import './globals.css'; // Import your global Tailwind styles

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-800">
        <header className="bg-blue-600 text-white py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold">Learning App for Disabilities</h1>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">{children}</main>
        <footer className="bg-blue-600 text-white py-4 mt-8">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm">&copy; 2024 Learning App. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
