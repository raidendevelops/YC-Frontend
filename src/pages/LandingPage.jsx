import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white text-center p-6">
      <h1 className="text-6xl font-extrabold mb-4 drop-shadow-lg">
        YeahChat 🚀
      </h1>
      <p className="text-lg mb-8 opacity-90">
        A simple, fast and fun way to chat with friends.
      </p>

      <div className="bg-white/10 px-8 py-5 rounded-2xl shadow-xl backdrop-blur-md mb-8">
        <p className="text-2xl font-semibold">
          👥 {userCount} {userCount === 1 ? "person" : "people"} online now
        </p>
      </div>

      <Link
        to="/login"
        className="px-8 py-3 bg-white text-purple-700 rounded-2xl shadow-lg font-bold text-lg hover:bg-purple-100 hover:scale-105 transform transition duration-300"
      >
        Get Started
      </Link>
    </div>
  );
}
