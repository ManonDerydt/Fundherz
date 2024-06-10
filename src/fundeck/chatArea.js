import React, { useState, useEffect, useRef } from 'react';
import ChatList from './ChatList';

const ChatArea = ({ messages, sendMessage }) => {
    const [input, setInput] = useState('');
    const chatListRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            sendMessage(input);
            setInput('');
        }
    };

    useEffect(() => {
        if (chatListRef.current) {
            chatListRef.current.scrollTop = chatListRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div>
            <div className="chat-area">
                <div ref={chatListRef} className="chat-list">
                    <ChatList messages={messages}/>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                />
                <button type="submit">Send</button>
            </form>
        </div>
    )
        ;
};

export default ChatArea;
