export default function ChatSidebar({ username }) {
  // Placeholder for conversations
  const conversations = [
    { id: 1, name: "General Chat" },
    { id: 2, name: "Random" },
  ];

  return (
    <aside className="w-64 bg-gray-200 p-4 flex flex-col">
      <h2 className="text-xl font-bold mb-2">YeahChat</h2>
      <p className="text-sm text-gray-600 mb-4">Logged in as {username}</p>

      <h3 className="text-lg font-semibold mb-2">Conversations</h3>
      <ul className="space-y-2">
        {conversations.map((c) => (
          <li
            key={c.id}
            className="p-2 bg-white rounded-xl shadow hover:bg-purple-100 cursor-pointer"
          >
            {c.name}
          </li>
        ))}
      </ul>
    </aside>
  );
}
