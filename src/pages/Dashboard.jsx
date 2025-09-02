export default function Dashboard() {
  const username = localStorage.getItem("username") || "Guest";

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-200 p-4">
        <h2 className="text-xl font-bold mb-4">YeahChat</h2>
        <p className="text-gray-700">Logged in as {username}</p>
      </aside>

      {/* Main chat area */}
      <main className="flex-1 bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">Your conversations will appear here.</p>
      </main>
    </div>
  );
}
