export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white/50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100">
          Get In Touch
        </h2>
        <div className="max-w-xl mx-auto text-center">
          <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
            Currently based in Leeds, UK. Looking forward to new opportunities
            and collaborations.
          </p>
          <div className="flex flex-col space-y-4">
            <a
              href="mailto:igorshevchuk111@gmail.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              igor.shevchuk.dev@gmail.com
            </a>
            <p className="text-gray-600 dark:text-gray-400">
              Phone: 07869378211
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
