import { useEffect, useState } from "react";

export default function Dashboard() {
  const [userCount, setUserCount] = useState(0);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [ws, setWs] = useState(null);
  const username = localStorage.getItem("username");

  // Redirect if not logged in
  useEffect(() => {
    if (!username) {
      window.location.href = "/login";
    }
  }, [username]);

  // Connect to WebSocket
  useEffect(() => {
    if (!username) return;

    const socket = new WebSocket(import.meta.env.VITE_WS_URL);
    setWs(socket);

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.type === "count") {
        setUserCount(data.count);
      }

      if (data.type === "chat") {
        setMessages((prev) => [...prev, data]);
      }
    };

    socket.onclose = () => {
      console.warn("WebSocket closed, reconnecting...");
      setTimeout(() => window.location.reload(), 2000);
    };

    return () => socket.close();
  }, [username]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (text.trim() && ws?.readyState === 1) {
      ws.send(
        JSON.stringify({ type: "chat", from: username, text: text.trim() })
      );
      setText("");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-purple-600 text-white shadow-md">
        <h1 className="text-xl font-bold">YeahChat</h1>
        <div className="flex items-center gap-6">
          <p>👤 {username}</p>
          <p>👥 {userCount} online</p>
          <button
            onClick={handleLogout}
            className="bg-white text-purple-600 px-3 py-1 rounded-lg font-semibold hover:bg-purple-100"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Messages */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="max-w-2xl mx-auto space-y-3">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`p-3 rounded-xl shadow-md ${
                msg.from === username
                  ? "bg-purple-100 text-purple-900 self-end ml-auto"
                  : "bg-white text-gray-800"
              }`}
            >
              <p className="font-semibold">{msg.from}</p>
              <p>{msg.text}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Input */}
      <form
        onSubmit={sendMessage}
        className="flex p-4 border-t bg-white shadow-inner"
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          type="submit"
          className="ml-3 px-6 py-2 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
}
