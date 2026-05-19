import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";
import { ContactForm } from "./ContactForm";

const contactItems = [
  { icon: MapPin, label: "Address", value: siteConfig.contact.address },
  { icon: Phone, label: "Phone", value: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phone.replace(/\s/g, "")}` },
  { icon: Mail, label: "Email", value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
  { icon: Clock, label: "Office Hours", value: siteConfig.contact.hours },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="section-padding bg-white"
      aria-labelledby="contact-heading"
    >
      <div className="container-narrow">
        <SectionHeading
          id="contact-heading"
          eyebrow="Contact"
          title="We Would Love to Hear From You"
          description="Have questions about admissions, fees, or school tours? Reach out and our team will respond promptly."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <ul className="space-y-5">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-slate-500">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="mt-0.5 font-medium text-brand-800 hover:text-brand-600 transition"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="mt-0.5 font-medium text-brand-900">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="overflow-hidden rounded-2xl border border-brand-100 bg-brand-50 aspect-video flex items-center justify-center text-brand-600 text-sm font-medium">
              Campus map — add your Google Maps embed here
            </div>
          </div>

          <div className="rounded-3xl border border-slate-100 bg-slate-50/50 p-6 sm:p-8 lg:col-span-3">
            <h3 className="text-xl font-semibold text-brand-900">Send a Message</h3>
            <p className="mt-1 text-sm text-slate-600">
              Fill in the form below and we will get back to you within 1–2 business days.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
