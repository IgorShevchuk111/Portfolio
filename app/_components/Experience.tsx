const experiences = [
  {
    period: '05/2023 – 11/2023',
    role: 'Angular Developer',
    company: 'Freelance',
    location: 'London, United Kingdom',
    description:
      'Developed and maintained Angular applications with a focus on performance and user experience.',
  },
  {
    period: '02/2023 – 07/2023',
    role: 'Web Developer',
    company: 'Matracnyk',
    location: 'Ternopil, Ukraine',
    description:
      'Built and maintained web applications using modern technologies and best practices.',
  },
] as const;

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white/50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100">
          Experience
        </h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              <div className="absolute left-0 top-0 h-full w-px bg-blue-600 dark:bg-blue-500"></div>
              <div className="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-500"></div>
              <div className="mb-1 text-sm text-blue-600 dark:text-blue-400 font-medium">
                {exp.period}
              </div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
                {exp.role}
              </h3>
              <div className="text-gray-600 dark:text-gray-400 mb-2">
                {exp.company} | {exp.location}
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
