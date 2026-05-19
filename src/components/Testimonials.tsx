import { SectionHeading } from "./SectionHeading";

const testimonials = [
  {
    quote:
      "Viviana gave our daughter confidence from day one. The teachers genuinely care, and she loves going to school every morning.",
    author: "Sarah N.",
    role: "Parent, Nursery",
  },
  {
    quote:
      "The primary programme is excellent — strong academics plus values education. Our son improved dramatically in reading and maths.",
    author: "James M.",
    role: "Parent, Primary",
  },
  {
    quote:
      "Our daughter thrived in secondary — dedicated teachers, solid exam prep, and a supportive environment all the way to graduation.",
    author: "Grace A.",
    role: "Parent, Secondary",
  },
];

export function Testimonials() {
  return (
    <section
      className="section-padding bg-brand-50/60"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-narrow">
        <SectionHeading
          id="testimonials-heading"
          eyebrow="Testimonials"
          title="Trusted by Families Across the Community"
        />

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.author}
              className="flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-brand-100"
            >
              <p className="flex-1 text-slate-600 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-6 border-t border-brand-100 pt-4">
                <cite className="not-italic">
                  <span className="block font-semibold text-brand-900">{t.author}</span>
                  <span className="text-sm text-brand-600">{t.role}</span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
