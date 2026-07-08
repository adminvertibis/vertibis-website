import { existsSync } from "node:fs";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();

const forbiddenPhrases = [
  "public website now",
  "public site now",
  "Admin can edit",
  "CMS-ready",
  "CMS ready",
  "stored for admin review",
  "admin review",
  "admin-editable",
  "pilot-stage while Vertibis moves",
  "no unsupported production claims",
  "registered ASP status",
  "exactly where the product is",
  "coming soon content is labelled internally",
  "Trusted by 500+",
  "Trusted by leading CA firms",
  "12,000+",
  "98% customer satisfaction",
  "500+ active CAs",
  "2.5 Cr seed",
  "₹2.5 Cr seed",
  "Real results from real Chartered Accountants",
  "CA Ramesh Mehta",
  "Priya Sharma",
  "Vikram Gupta",
  "Arjun Patel",
  "Neha Krishnamurthy",
  "Rohit Jain",
  "Ananya Bose",
  "India's leading",
  "India’s leading",
  "Direct GSTN data pull",
  "No manual data entry needed",
  "instant government database pull",
  "Fully production-ready GST integration",
  "GSTN integrated",
  "From GSTN to health score",
  "CAs across India trust Vertibis",
  "BKC, Mumbai",
  "+91 98765 43210",
  "placeholder testimonial",
  "demo testimonial",
  "lorem ipsum",
  "This is placeholder",
  "Demo firm",
  "vertibis-frontend.vercel.app",
];

const scanTargets = [
  { directory: "app", extensions: [".ts", ".tsx", ".js", ".jsx", ".json"] },
  { directory: "data", extensions: [".json"] },
  { directory: path.join(".next", "server", "app"), extensions: [".html", ".rsc", ".js", ".json"] },
];

const excludedPathParts = [
  `${path.sep}app${path.sep}admin${path.sep}`,
  `${path.sep}app${path.sep}api${path.sep}`,
  `${path.sep}app${path.sep}components${path.sep}site${path.sep}AdminConsole.tsx`,
  `${path.sep}app${path.sep}lib${path.sep}cms-types.ts`,
  `${path.sep}.next${path.sep}server${path.sep}app${path.sep}admin${path.sep}`,
  `${path.sep}.next${path.sep}server${path.sep}app${path.sep}api${path.sep}`,
];

function shouldExclude(filePath) {
  const absolutePath = path.resolve(root, filePath);
  return excludedPathParts.some((part) => absolutePath.includes(part));
}

async function collectFiles(directory, extensions) {
  const absoluteDirectory = path.resolve(root, directory);

  if (!existsSync(absoluteDirectory)) {
    return [];
  }

  const entries = await readdir(absoluteDirectory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const absolutePath = path.join(absoluteDirectory, entry.name);
    const relativePath = path.relative(root, absolutePath);

    if (shouldExclude(relativePath)) {
      continue;
    }

    if (entry.isDirectory()) {
      files.push(...(await collectFiles(relativePath, extensions)));
      continue;
    }

    if (entry.isFile() && extensions.includes(path.extname(entry.name))) {
      files.push(relativePath);
    }
  }

  return files;
}

function lineNumberForIndex(content, index) {
  return content.slice(0, index).split(/\r?\n/).length;
}

const findings = [];

for (const target of scanTargets) {
  const files = await collectFiles(target.directory, target.extensions);

  for (const file of files) {
    const content = await readFile(path.resolve(root, file), "utf8");
    const lowerContent = content.toLowerCase();

    for (const phrase of forbiddenPhrases) {
      const index = lowerContent.indexOf(phrase.toLowerCase());

      if (index !== -1) {
        findings.push({
          file,
          line: lineNumberForIndex(content, index),
          phrase,
        });
      }
    }
  }
}

if (findings.length) {
  console.error("Public copy audit failed. Remove or rewrite these phrases:");

  for (const finding of findings) {
    console.error(`- ${finding.file}:${finding.line} -> ${finding.phrase}`);
  }

  process.exit(1);
}

console.log("Public copy audit passed.");
