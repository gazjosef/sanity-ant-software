const currentYear = new Date().getFullYear();

export default function FooterCopyright() {
  return (
    <section className="mt-12">
      <p className="mx-auto max-w-xs text-center text-sm text-gray-300">
        Copyright <span className="text-secondary-100">&copy;</span> Ant
        Software {currentYear}
      </p>
    </section>
  );
}
