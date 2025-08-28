import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function SocialLinks() {
  return (
    <div className="flex justify-center space-x-6 mt-8">
      <a
        href="https://github.com/IgorShevchuk111"
        target="_blank"
        rel="noopener noreferrer"
        className="text-3xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/igorshevchuk/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-3xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      >
        <FaLinkedin />
      </a>
      <a
        href="mailto:igor.shevchuk.dev@gmail.com"
        className="text-3xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      >
        <FaEnvelope />
      </a>
    </div>
  );
}
