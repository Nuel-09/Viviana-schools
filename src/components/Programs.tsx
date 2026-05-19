import { Baby, GraduationCap, School } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const programs = [
  {
    icon: Baby,
    title: "Nursery School",
    ages: "Ages 3 – 5",
    description:
      "Play-based early years programme focusing on language development, motor skills, socialisation, and school readiness through music, art, and guided discovery.",
    features: [
      "Phonics & pre-reading",
      "Sensory play & outdoor time",
      "Social-emotional learning",
    ],
  },
  {
    icon: School,
    title: "Primary School",
    ages: "P1 – P7",
    description:
      "Rigorous primary curriculum covering literacy, mathematics, science, ICT, humanities, and co-curricular activities  preparing pupils for secondary success.",
    features: [
      "National curriculum aligned",
      "STEM & computer literacy",
      "Sports, clubs & leadership",
    ],
  },
  {
    icon: GraduationCap,
    title: "Secondary School",
    ages: "JSS 1 – SS 3",
    description:
      "Comprehensive secondary education with strong academics, exam preparation, career guidance, and leadership development equipping students for university and beyond.",
    features: [
      "WAEC & NECO preparation",
      "Science, arts & commercial streams",
      "Career counselling & mentorship",
    ],
  },
];

export function Programs() {
  return (
    <section
      id="programs"
      className="section-padding bg-brand-50/60"
      aria-labelledby="programs-heading"
    >
      <div className="container-narrow">
        <SectionHeading
          id="programs-heading"
          eyebrow="Our Programmes"
          title="Nursery, Primary & Secondary Education Under One Roof"
          description="Three carefully designed pathways that grow with your child — from their first classroom experience through secondary graduation."
        />

        <div className="mt-10 grid gap-6 sm:mt-14 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <article
              key={program.title}
              className="group flex flex-col rounded-3xl border border-brand-100 bg-white p-8 shadow-sm transition hover:border-brand-300 hover:shadow-lg"
            >
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-700 text-white transition group-hover:bg-brand-800">
                <program.icon className="h-7 w-7" aria-hidden />
              </span>
              <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-brand-600">
                {program.ages}
              </p>
              <h3 className="mt-1 text-2xl font-bold text-brand-900">{program.title}</h3>
              <p className="mt-4 flex-1 text-slate-600 leading-relaxed">
                {program.description}
              </p>
              <ul className="mt-6 space-y-2 border-t border-brand-100 pt-6">
                {program.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm font-medium text-brand-800"
                  >
                    <span
                      className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-100 text-brand-700 text-xs"
                      aria-hidden
                    >
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
