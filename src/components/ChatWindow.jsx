import { useState } from "react";
import MessageInput from "./MessageInput";

export default function ChatWindow({ username }) {
  const [messages, setMessages] = useState([
    { from: "System", text: "Welcome to YeahChat 🚀" },
  ]);

  const handleSend = (text) => {
    if (text.trim()) {
      setMessages([...messages, { from: username, text }]);
    }
  };

  return (
    <main className="flex-1 flex flex-col bg-gray-50">
      {/* Chat messages */}
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`mb-2 ${
              msg.from === username ? "text-right" : "text-left"
            }`}
          >
            <span
              className={`inline-block px-3 py-2 rounded-2xl ${
                msg.from === username
                  ? "bg-purple-600 text-white"
                  : "bg-gray-300 text-gray-800"
              }`}
            >
              <strong>{msg.from !== username ? msg.from + ": " : ""}</strong>
              {msg.text}
            </span>
          </div>
        ))}
      </div>

      {/* Message input */}
      <MessageInput onSend={handleSend} />
    </main>
  );
}
