import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // <- import Link

export default function LandingPage() {
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    const ws = new WebSocket(import.meta.env.VITE_WS_URL);

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === "count") {
        setUserCount(data.count);
      }
    };

    return () => ws.close();
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-600 to-blue-500 text-white text-center">
      <h1 className="text-5xl font-bold mb-4">Welcome to YeahChat 🚀</h1>
      <p className="text-lg mb-6">Connect instantly. Chat freely.</p>

      <div className="bg-white/10 px-6 py-4 rounded-2xl shadow-lg mb-6">
        <p className="text-xl">👥 {userCount} people online now</p>
      </div>

      {/* Use Link instead of a */}
      <Link
        to="/login"
        className="px-6 py-3 bg-white text-purple-700 rounded-2xl shadow-lg font-semibold hover:bg-purple-100 transition"
      >
        Get Started
      </Link>
    </div>
  );
}
