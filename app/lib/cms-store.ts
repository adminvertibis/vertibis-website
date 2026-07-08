import { promises as fs } from "fs";
import path from "path";
import { defaultCmsData } from "./cms-defaults";
import type { CmsData, LeadSubmission } from "./cms-types";

const dataDirectory = path.join(process.cwd(), "data");
const cmsFilePath = path.join(dataDirectory, "cms.json");
const leadsFilePath = path.join(dataDirectory, "leads.json");
const auditFilePath = path.join(dataDirectory, "admin-audit.json");

async function ensureDataDirectory() {
  await fs.mkdir(dataDirectory, { recursive: true });
}

async function readJsonFile<T>(filePath: string, fallback: T): Promise<T> {
  await ensureDataDirectory();

  try {
    const file = await fs.readFile(filePath, "utf8");
    return JSON.parse(file) as T;
  } catch (error) {
    const code = (error as NodeJS.ErrnoException).code;
    if (code !== "ENOENT") {
      throw error;
    }

    await fs.writeFile(filePath, JSON.stringify(fallback, null, 2));
    return fallback;
  }
}

async function writeJsonFile<T>(filePath: string, value: T) {
  await ensureDataDirectory();
  await fs.writeFile(filePath, JSON.stringify(value, null, 2));
}

export async function getCmsData(): Promise<CmsData> {
  return readJsonFile<CmsData>(cmsFilePath, defaultCmsData);
}

export async function saveCmsData(data: CmsData) {
  await writeJsonFile(cmsFilePath, data);
}

export async function getLeads(): Promise<LeadSubmission[]> {
  return readJsonFile<LeadSubmission[]>(leadsFilePath, []);
}

export async function saveLead(lead: LeadSubmission) {
  const leads = await getLeads();
  leads.unshift(lead);
  await writeJsonFile(leadsFilePath, leads);
}

export interface AuditRecord {
  id: string;
  action: string;
  actor: string;
  createdAt: string;
  detail: string;
}

export async function getAuditLogs(): Promise<AuditRecord[]> {
  return readJsonFile<AuditRecord[]>(auditFilePath, []);
}

export async function saveAuditLog(record: Omit<AuditRecord, "id" | "createdAt">) {
  const logs = await getAuditLogs();
  logs.unshift({
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    ...record,
  });
  await writeJsonFile(auditFilePath, logs.slice(0, 500));
}

