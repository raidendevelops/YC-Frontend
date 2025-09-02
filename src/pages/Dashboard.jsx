import ChatSidebar from "../components/ChatSidebar";
import ChatWindow from "../components/ChatWindow";

export default function Dashboard() {
  const username = localStorage.getItem("username") || "Guest";

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <ChatSidebar username={username} />

      {/* Main chat window */}
      <ChatWindow username={username} />
    </div>
  );
}
