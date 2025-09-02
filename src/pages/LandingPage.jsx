import { useEffect, useState } from "react";

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

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-600 to-blue-500 text-white text-center">
      <h1 className="text-5xl font-bold mb-6">Welcome to YeahChat 🚀</h1>
      <p className="text-lg mb-4">A place to chat instantly with anyone, anywhere.</p>

      <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg mb-6">
        <p className="text-xl">👥 {userCount} people online now</p>
      </div>

      <button className="px-6 py-3 bg-white text-purple-700 rounded-2xl shadow-lg font-semibold hover:bg-purple-100 transition">
        Start Chatting
      </button>
    </div>
  );
}
