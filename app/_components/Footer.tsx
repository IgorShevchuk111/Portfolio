export default function Footer() {
  return (
    <footer className="py-8 text-center">
      <p className="text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Igor Shevchuk
      </p>
    </footer>
  );
}
