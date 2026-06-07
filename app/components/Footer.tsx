import Link from 'next/link';

const footerLinks = {
  Product: [
    { label: 'Features', href: '/features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Demo', href: '/demo' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white mb-4">
              <span className="w-8 h-8 rounded-lg bg-[#0066cc] text-white flex items-center justify-center text-sm font-bold">V</span>
              Vertibis
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              India's leading MSME business health scoring platform. Empowering CAs and advisors with instant insights.
            </p>
            <a href="mailto:hello@vertibis.com" className="text-sm text-gray-300 hover:text-white transition-colors">
              hello@vertibis.com
            </a>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            Copyright {new Date().getFullYear()} Vertibis Technologies Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-sm">
            Built in India for Indian CAs & MSMEs
          </p>
        </div>
      </div>
    </footer>
  );
}
