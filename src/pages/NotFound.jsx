// src/pages/NotFound.jsx
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-lg mt-4">Oops! Page not found.</p>
      <a
        href="/"
        className="mt-6 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg"
      >
        Go Home
      </a>
    </div>
  );
}
