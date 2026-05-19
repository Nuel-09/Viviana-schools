import Link from "next/link";
import { PortalLinkList } from "@/components/PortalDropdown";
import { SchoolLogo } from "@/components/SchoolLogo";
import { navLinks, siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-100 bg-brand-950 text-brand-100">
      <div className="container-narrow section-padding !py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5">
              <SchoolLogo size="md" className="ring-1 ring-white/20" />
              <span>
                <span className="block font-semibold text-white">Viviana Schools</span>
                <span className="text-xs text-brand-300">Nursery · Primary · Secondary</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-brand-200/80">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-brand-200/90 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-brand-200/90">
              <li>{siteConfig.contact.address}</li>
              <li>
                <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`} className="hover:text-white transition">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              School Portal
            </h3>
            <p className="mt-4 text-sm text-brand-200/80 leading-relaxed">
              Staff use the Admin Portal; students and parents use the Student Portal on Eduffice.
            </p>
            <PortalLinkList
              className="mt-4"
              linkClassName="bg-accent-500 text-brand-950 hover:bg-accent-400 text-sm py-2.5"
            />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-brand-300">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-sm text-brand-400">
            Built with care for our school community.
          </p>
        </div>
      </div>
    </footer>
  );
}
