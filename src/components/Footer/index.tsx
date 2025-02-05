export default function Footer() {
  return (
    <footer className="bg-blue-600 text-black py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <p>&copy; {new Date().getFullYear()} Agustín Barrio</p>
      </div>
    </footer>
  );
}
