import React, { useState } from 'react';
import { Button, Input } from 'antd';
const Messaging = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <div className="flex h-full">
      <div className="flex-1 flex flex-col">
        {selectedChat ? (
          <ChatWindow selectedChat={selectedChat} />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            Select a conversation
          </div>
        )}
      </div>
      <ChatSidebar onSelectChat={setSelectedChat} />
    </div>
  );
};

const ChatSidebar = ({ onSelectChat }) => {
  const chats = [
    { id: 1, name: 'User1' },
    { id: 2, name: 'Group1' },
    { id: 3, name: 'User2' },
  ];

  return (
    <div className="w-1/3 bg-primary/90 text-white">
      <div className="p-4 text-lg font-bold">Conversations</div>
      <div className="flex flex-col p-2 space-y-2">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className="p-3 bg-secondary rounded-lg cursor-pointer hover:bg-secondary/50"
            onClick={() => onSelectChat(chat)}
          >
            {chat.name}
          </div>
        ))}
      </div>
    </div>
  );
};

const ChatWindow = ({ selectedChat }) => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'User1', text: 'Hello!' },
    { id: 2, sender: 'You', text: 'Hi there!' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { id: messages.length + 1, sender: 'You', text: newMessage }]);
      setNewMessage('');
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-white">
      <div className="bg-gray-100 p-4 border-b text-lg font-bold">
        Conversation with {selectedChat.name}
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`px-3 py-2 max-w-xs rounded-lg ${msg.sender === 'You' ? 'bg-primary text-white' : 'bg-gray-200'
                }`}
            >
              <span className="font-medium">{msg.sender}: </span>{msg.text}
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 bg-gray-100 border-t flex space-x-3">
        <Input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none"
        />
        <Button
          onClick={sendMessage}
          type="primary"
          className="px-5 py-5 rounded-lg transition"
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default Messaging;
