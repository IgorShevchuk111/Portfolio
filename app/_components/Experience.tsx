const experiences = [
  {
    period: '2025 – Present',
    role: 'FleetInspect',
    // company: 'Projects',
    // location: 'Leeds, United Kingdom',
    description:
      'Digital Vehicle Inspection App: Inspired by real-world logistics systems, digitising inspection processes and implementing modern React/Next.js/TypeScript, Supabase, and Tailwind CSS architecture. Mobile-first app to streamline vehicle inspections, with secure role-based access via Google OAuth and Supabase. Deployed using GitHub Actions and Vercel. ',
  },
  {
    period: '2024',
    role: 'Hotel Booking Platform',
    // company: 'Projects',
    // location: 'Leeds, United Kingdom',
    description:
      'Full-Stack App: Developed a full-stack booking system with a client-facing site and admin dashboard. Implemented Google authentication, responsive UI, state management with Context API, and enhanced UX with Toastify notifications.',
  },
  {
    period: '2011 – 2023',
    role: 'Previous Roles (Logistics & Engineering)',
    company: 'Various',
    location: 'Ukraine, Poland, UK',
    description:
      'Held various logistics and engineering roles in Ukraine, Poland, and the UK, developing strong problem-solving, operational efficiency, and technical skills. Experience managing processes, optimising workflows, and solving real-world problems now informs software development work.',
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
              {/* <div className="text-gray-600 dark:text-gray-400 mb-2">
                {exp.company} | {exp.location}
              </div> */}
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
