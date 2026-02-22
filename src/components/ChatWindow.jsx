import { useState, useEffect } from "react";
import { io } from "socket.io-client";

// Single socket connection
const socket = io("http://localhost:5000");

export default function ChatWindow({
  chat,
  chats,
  setChats,
  selectedChat
}) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [showEmoji, setShowEmoji] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const emojis = ["😀", "😂", "😍", "👍", "🔥", "🎯", "🚀"];

  // Join room when chat changes
  useEffect(() => {
    if (!chat) return;

    socket.emit("join_room", chat.id);
    setMessages(chat.messages || []);
  }, [chat]);

  // Socket listeners
  useEffect(() => {
    const receiveHandler = (data) => {
      setMessages((prev) => [...prev, data]);

      // Increase unread if chat not open
      if (selectedChat?.id !== data.room) {
        setChats((prevChats) =>
          prevChats.map((c) =>
            c.id === data.room
              ? { ...c, unread: c.unread + 1 }
              : c
          )
        );
      } else {
        socket.emit("message_read", data.room);
      }
    };

    const typingHandler = () => setIsTyping(true);
    const stopTypingHandler = () => setIsTyping(false);

    const seenHandler = () => {
      setMessages((prev) =>
        prev.map((msg, index) =>
          index === prev.length - 1
            ? { ...msg, status: "seen" }
            : msg
        )
      );
    };

    socket.on("receive_message", receiveHandler);
    socket.on("user_typing", typingHandler);
    socket.on("user_stop_typing", stopTypingHandler);
    socket.on("message_seen", seenHandler);

    return () => {
      socket.off("receive_message", receiveHandler);
      socket.off("user_typing", typingHandler);
      socket.off("user_stop_typing", stopTypingHandler);
      socket.off("message_seen", seenHandler);
    };
  }, [selectedChat, setChats]);

  function handleSend() {
    if (!message.trim() || !chat) return;

    const messageData = {
      room: chat.id,
      text: message,
      from: "me",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      status: "sent",
    };

    socket.emit("send_message", messageData);
    setMessage("");
    setShowEmoji(false);
  }

  if (!chat) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center text-gray-400">
        <p className="text-lg font-medium">Your messages</p>
        <p className="text-sm mt-1">
          Select a conversation to start chatting
        </p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-gray-50">

      {/* Header */}
      <div className="px-4 py-3 border-b flex items-center gap-3 bg-white">
        <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center font-semibold text-blue-600">
          A
        </div>
        <div>
          <p className="font-medium text-sm">{chat.user}</p>
          <p className="text-xs text-green-500">Online</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${
              msg.from === "me" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-2xl text-sm shadow-sm ${
                msg.from === "me"
                  ? "bg-blue-600 text-white rounded-br-none"
                  : "bg-white text-gray-800 border rounded-bl-none"
              }`}
            >
              <p>{msg.text}</p>
              <p className="text-[10px] mt-1 opacity-70 text-right">
                {msg.time}
                {msg.from === "me" && (
                  <span className="ml-1">
                    {msg.status === "seen" ? "✓✓" : "✓"}
                  </span>
                )}
              </p>
            </div>
          </div>
        ))}

        {isTyping && (
          <p className="text-xs text-gray-500">
            {chat.user} is typing...
          </p>
        )}
      </div>

      {/* Input Area */}
      <div className="p-3 border-t bg-white flex items-center gap-2 relative">

        {/* Emoji Button */}
        <button
          onClick={() => setShowEmoji(!showEmoji)}
          className="text-xl"
        >
          😀
        </button>

        {/* Emoji Picker */}
        {showEmoji && (
          <div className="absolute bottom-14 left-3 bg-white border rounded-lg shadow-lg p-2 flex gap-2 z-20">
            {emojis.map((e) => (
              <button
                key={e}
                onClick={() => {
                  setMessage((prev) => prev + e);
                  setShowEmoji(false);
                }}
                className="text-xl"
              >
                {e}
              </button>
            ))}
          </div>
        )}

        {/* Attach File */}
        <label className="cursor-pointer text-xl">
          📎
          <input type="file" hidden />
        </label>

        {/* Input */}
        <input
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            socket.emit("typing", chat.id);

            setTimeout(() => {
              socket.emit("stop_typing", chat.id);
            }, 1000);
          }}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Type a message..."
          className="flex-1 border rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Send */}
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}
