import React from 'react';
import ChatMessage from './ChatMessage';

const ChatList = ({ messages }) => {
    return (
        <div className="chat-container">
            {messages.map((message, index) => (
                <ChatMessage key={index} message={message} />
            ))}
        </div>
    );
};

export default ChatList;
