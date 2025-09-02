import { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim()) {
      localStorage.setItem("username", username);
      window.location.href = "/dashboard";
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-2xl shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login to YeahChat</h2>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2 border rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded-xl font-semibold hover:bg-purple-700 transition"
        >
          Enter Chat
        </button>
      </form>
    </div>
  );
}
