const stats = [
  { value: "9+", label: "Years of Excellence" },
  { value: "300+", label: "Happy Pupils" },
  { value: "20+", label: "Qualified Staff" },
  { value: "98%", label: "Parent Satisfaction" },
];

export function Stats() {
  return (
    <section className="gradient-hero py-14" aria-label="School statistics">
      <div className="container-narrow px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center px-1">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">{stat.value}</dd>
              <dt className="mt-1.5 text-xs font-medium text-brand-100 sm:mt-2 sm:text-sm lg:text-base">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
