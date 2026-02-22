import { useState } from "react";
import chatsData from "../data/chats";
import ChatList from "../components/ChatList";
import ChatWindow from "../components/ChatWindow";

export default function Messages() {
  const [chats, setChats] = useState(chatsData);
  const [selectedChat, setSelectedChat] = useState(null);

  function handleSelect(chat) {
    // Reset unread when opened
    setChats((prev) =>
      prev.map((c) =>
        c.id === chat.id ? { ...c, unread: 0 } : c
      )
    );

    setSelectedChat(chat);
  }

  return (
    <div className="max-w-7xl mx-auto h-[calc(100vh-64px)] border rounded-xl overflow-hidden flex bg-gray-50">
      <ChatList
        chats={chats}
        selectedChat={selectedChat}
        onSelect={handleSelect}
      />

      <ChatWindow
        chat={selectedChat}
        chats={chats}
        setChats={setChats}
        selectedChat={selectedChat}
      />
    </div>
  );
}
