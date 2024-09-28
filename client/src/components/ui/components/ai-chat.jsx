import React, { useState } from 'react'
import { Modal, Button, Input } from "antd";
import { BotMessageSquare } from "lucide-react";


const AiChatBot = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I assist you today?' }
  ]);
  const [userMessage, setUserMessage] = useState('');

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSendMessage = () => {
    if (userMessage.trim()) {
      setMessages([...messages, { sender: 'user', text: userMessage }]);
      setUserMessage('');
    }
  };

  return (
    <>
      <Button onClick={showModal} className="cursor-pointer bg-secondary/80 rounded-full shadow-xl w-12 h-12 flex items-center justify-center fixed bottom-4 right-4">
        <BotMessageSquare />
      </Button>
      <Modal
        title="Philately Assistant"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        centered
        bodyStyle={{ padding: 0 }}
        width={400}
      >
        <div className="flex flex-col h-96  rounded-lg overflow-hidden">
          <div className="flex-1 p-4 overflow-y-auto bg-white">
            {messages.map((message, index) => (
              <div key={index} className={`mb-4 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <div
                  className={`inline-block p-3 rounded-lg ${message.sender === 'user' ? 'bg-secondary text-white' : 'bg-gray-200 text-gray-700'
                    }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>


          <div className="p-4">
            <Input
              placeholder="Type your message..."
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              onPressEnter={handleSendMessage}
              className="rounded-lg"
              suffix={
                <Button
                  type="primary"
                  className="bg-secondary text-white"
                  onClick={handleSendMessage}
                >
                  Send
                </Button>
              }
            />
          </div>
        </div>
      </Modal>
    </>
  )
}

export default AiChatBot