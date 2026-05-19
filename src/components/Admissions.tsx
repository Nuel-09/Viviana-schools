import { CheckCircle2, FileText, Users } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    icon: FileText,
    step: "01",
    title: "Submit Application",
    text: "Complete the enquiry form or visit our office with required documents.",
  },
  {
    icon: Users,
    step: "02",
    title: "Assessment & Tour",
    text: "Meet our team, tour the campus, and complete a brief age-appropriate assessment.",
  },
  {
    icon: CheckCircle2,
    step: "03",
    title: "Enrol & Begin",
    text: "Receive your admission letter, pay fees, and welcome your child to Viviana!",
  },
];

export function Admissions() {
  return (
    <section
      id="admissions"
      className="section-padding bg-brand-950 text-white"
      aria-labelledby="admissions-heading"
    >
      <div className="container-narrow">
        <SectionHeading
          id="admissions-heading"
          eyebrow="Admissions"
          title="Join the Viviana Family"
          description="Our admissions process is straightforward and family-friendly. Places are limited we encourage early applications."
        />

        <ol className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map(({ icon: Icon, step, title, text }) => (
            <li
              key={step}
              className="relative rounded-2xl bg-white/5 p-8 ring-1 ring-white/10"
            >
              <span className="text-5xl font-bold text-white/10" aria-hidden>
                {step}
              </span>
              <span className="mt-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500 text-brand-950">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-brand-100/80 leading-relaxed">{text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex w-full flex-col items-stretch justify-center gap-3 px-2 sm:flex-row sm:items-center sm:gap-4 sm:px-0">
          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center rounded-xl bg-accent-500 px-8 py-3.5 font-semibold text-brand-950 transition hover:bg-accent-400 sm:w-auto"
          >
            Start Your Application
          </a>
          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center rounded-xl border border-white/25 px-8 py-3.5 font-semibold text-white transition hover:bg-white/10 sm:w-auto"
          >
            Download Prospectus
          </a>
        </div>
      </div>
    </section>
  );
}
