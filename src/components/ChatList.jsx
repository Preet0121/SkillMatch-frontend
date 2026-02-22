export default function ChatList({ chats, selectedChat, onSelect }) {
  return (
    <div className="w-80 border-r bg-white overflow-y-auto">
      <div className="p-4 border-b font-semibold text-lg">
        Messages
      </div>

      {chats.map((chat) => (
        <div
          key={chat.id}
          onClick={() => onSelect(chat)}
          className={`p-4 cursor-pointer border-b flex justify-between items-center ${
            selectedChat?.id === chat.id ? "bg-gray-100" : ""
          }`}
        >
          <div>
            <p className="font-medium">{chat.user}</p>
          </div>

          {chat.unread > 0 && (
            <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
              {chat.unread}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
