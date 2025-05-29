import { FaReact, FaAngular, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiSupabase,
  SiOpenai,
  SiFirebase,
  SiRedux,
} from 'react-icons/si';

const skills = [
  {
    name: 'React',
    icon: <FaReact className="text-[#61DAFB]" />,
    description: 'Building dynamic user interfaces with React',
  },
  {
    name: 'Next.js',
    icon: <SiNextdotjs />,
    description: 'Creating full-stack applications with Next.js framework',
  },
  {
    name: 'Angular',
    icon: <FaAngular className="text-[#DD0031]" />,
    description: 'Developing robust enterprise applications with Angular',
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript className="text-[#3178C6]" />,
    description: 'Writing type-safe code with TypeScript',
  },
  {
    name: 'JavaScript',
    icon: <SiJavascript className="text-[#F7DF1E]" />,
    description: 'Core JavaScript development and ES6+ features',
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss className="text-[#38B2AC]" />,
    description: 'Creating responsive and modern UI designs',
  },
  {
    name: 'GPT-based Tools',
    icon: <SiOpenai className="text-gray-700 dark:text-gray-300" />,
    description: 'Integrating and working with AI technologies',
  },
  {
    name: 'Redux Toolkit',
    icon: <SiRedux className="text-[#764ABC]" />,
    description: 'State management with Redux Toolkit',
  },
  {
    name: 'Supabase',
    icon: <SiSupabase className="text-[#3ECF8E]" />,
    description: 'Backend and database management with Supabase',
  },
  {
    name: 'Firebase',
    icon: <SiFirebase className="text-[#FFCA28]" />,
    description: 'Building applications with Firebase services',
  },
  {
    name: 'CSS',
    icon: <FaCss3Alt className="text-[#264DE4]" />,
    description: 'Styling and layout with CSS3',
  },
  {
    name: 'HTML',
    icon: <FaHtml5 className="text-[#E34F26]" />,
    description: 'Semantic HTML5 markup and structure',
  },
] as const;

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100">
          Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white dark:bg-[#1e293b] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl">{skill.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {skill.name}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
