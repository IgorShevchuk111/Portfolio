const projects = [
  {
    title: 'FleetInspect',
    description:
      'A modern web platform that digitizes vehicle inspection processes for transport companies. Streamlines operations by replacing paper-based workflows with an efficient digital solution, reducing errors and improving compliance.',
    features: [
      'Smart form validation with real-time error checking',
      'Role-based access control with secure Google OAuth 2.0',
      'Real-time data synchronization using Supabase',
      'Responsive design optimized for both desktop and mobile use',
      'Automated PDF report generation for inspections',
      'Dashboard with inspection analytics and insights',
    ],
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Supabase',
      'React Hook Form',
      'Google Auth',
      'PDF Generation',
      'Charts.js',
    ],
    liveUrl: 'https://fleet-inspect.vercel.app',
  },
  {
    title: 'Hotel Booking Platform',
    description:
      'A full-featured hotel reservation system with real-time availability, secure payments, and automated booking management. Provides seamless experience for both guests and hotel staff.',
    features: [
      'Real-time room availability and dynamic pricing',
      'Secure user authentication with Google OAuth',
      'Interactive calendar for date selection',
      'Automated email confirmations for bookings',
      'Responsive design with dark/light mode support',
      'Advanced filtering and search capabilities',
    ],
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Supabase',
      'React Context',
      'React Hook Form',
      'Google Auth',
      'Email.js',
    ],
    liveUrl: 'https://hotel-bookit.vercel.app',
  },
  {
    title: 'Hotel Admin Dashboard',
    description:
      'A comprehensive administrative interface for hotel management, featuring real-time booking tracking, cabin management, and guest services. Streamlines daily operations with an intuitive dashboard for staff.',
    features: [
      'Real-time booking calendar and occupancy tracking',
      'Cabin inventory and maintenance management',
      'Guest check-in/check-out system with digital signatures',
      'Interactive analytics and revenue reporting',
      'Staff task management and assignment',
      'Automated guest communication system',
    ],
    technologies: [
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'Supabase',
      'React Query',
      'Chart.js',
      'React Hook Form',
      'Date-fns',
    ],
    liveUrl: 'https://this-hotel.vercel.app',
  },
] as const;

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-[#1e293b] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100 dark:border-gray-800"
            >
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
                  {project.description}
                </p>
                <ul className="list-none mb-6 text-gray-600 dark:text-gray-400 space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-sm rounded-full border border-blue-100 dark:border-blue-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="text-center border-t dark:border-gray-700 pt-4 mt-auto">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
                  >
                    {project.title}{' '}
                    <span className="ml-1 transform transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
