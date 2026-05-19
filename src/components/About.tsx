import { Heart, Lightbulb, Target } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const values = [
  {
    icon: Heart,
    title: "Care & Compassion",
    text: "Every child is known by name, nurtured with patience, and celebrated for who they are.",
  },
  {
    icon: Lightbulb,
    title: "Curiosity & Creativity",
    text: "Hands-on learning, arts, and exploration spark a lifelong love of discovery.",
  },
  {
    icon: Target,
    title: "Excellence & Integrity",
    text: "High standards in literacy, numeracy, and character prepare pupils for lifelong success.",
  },
];

export function About() {
  return (
    <section id="about" className="section-padding bg-white" aria-labelledby="about-heading">
      <div className="container-narrow">
        <SectionHeading
          id="about-heading"
          eyebrow="About Us"
          title="A Foundation Built on Love and Learning"
          description="Viviana Private Nursery, Primary and Secondary Schools has been a trusted partner for families seeking holistic education from first steps in nursery through confident graduation from secondary."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p>
              We believe the best education happens when children feel safe, seen, and
              inspired. Our dedicated teachers create vibrant classrooms where pupils
              build literacy, numeracy, critical thinking, and strong moral values.
            </p>
            <p>
              With modern facilities, a balanced curriculum aligned to national standards,
              and a warm community spirit, Viviana guides learners from nursery through
              primary and secondary schools growing capable, compassionate leaders.
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {["Child-centred teaching", "Small class sizes", "Parent partnerships", "ICT-enabled learning"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2 text-brand-800 font-medium">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden />
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="grid gap-4 sm:grid-cols-1">
            {values.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-2xl border border-brand-100 bg-brand-50/50 p-6 transition hover:border-brand-200 hover:shadow-md"
              >
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-700 text-white">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-brand-900">{title}</h3>
                <p className="mt-2 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
