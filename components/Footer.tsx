export default function Footer() {
  return (
    <footer className="bg-earth-100 border-t border-earth-200 py-12 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="font-serif italic text-earth-700 mb-4">
          "Uma nova folha de esperança."
        </p>
        <p className="text-sm text-earth-600">
          © {new Date().getFullYear()} Nova Folha. All rights reserved.
        </p>
      </div>
    </footer>
  );
}