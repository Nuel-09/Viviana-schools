import {
  BookMarked,
  Bus,
  Computer,
  Dumbbell,
  FlaskConical,
  Trees,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const facilities = [
  {
    icon: BookMarked,
    title: "Modern Library",
    text: "A quiet space stocked with age-appropriate books to fuel imagination and literacy.",
  },
  {
    icon: Computer,
    title: "ICT Lab",
    text: "Computers and digital tools that prepare pupils for a technology-driven world.",
  },
  {
    icon: FlaskConical,
    title: "Science Room",
    text: "Hands-on experiments that make science exciting and memorable.",
  },
  {
    icon: Trees,
    title: "Playgrounds",
    text: "Safe outdoor areas for physical activity, games, and fresh-air learning.",
  },
  {
    icon: Dumbbell,
    title: "Sports Facilities",
    text: "Football, athletics, and team sports that build fitness and teamwork.",
  },
  {
    icon: Bus,
    title: "School Transport",
    text: "Reliable bus routes covering key neighbourhoods for convenient drop-off.",
  },
];

export function Facilities() {
  return (
    <section
      id="facilities"
      className="section-padding bg-white"
      aria-labelledby="facilities-heading"
    >
      <div className="container-narrow">
        <SectionHeading
          id="facilities-heading"
          eyebrow="Facilities"
          title="Spaces Designed for Learning & Play"
          description="Our campus provides everything young learners need to explore, create, and grow in safety and comfort."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-2xl border border-slate-100 bg-slate-50/80 p-6 transition hover:border-brand-200 hover:bg-brand-50/40"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-brand-900">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
