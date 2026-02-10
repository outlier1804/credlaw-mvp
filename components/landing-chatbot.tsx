'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot } from "lucide-react"

export function LandingChatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Hi! Are you getting harassing calls from debt collectors?", isBot: true }
    ]);
    const [input, setInput] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = () => {
        if (!input.trim()) return;

        // User Message
        const newMessages = [...messages, { id: Date.now(), text: input, isBot: false }];
        setMessages(newMessages);
        setInput("");

        // Simulated Bot Response Logic
        setTimeout(() => {
            let botReply = "That sounds like a potential violation. How many times a day do they call?";
            if (input.toLowerCase().includes("yes")) {
                botReply = "Under the FDCPA, that could be worth $1,000 per call. Do they call before 8am or after 9pm?";
            } else if (input.toLowerCase().includes("times")) {
                botReply = "Excessive calling is harassment. We can stop them and get you paid. Click 'Calculate My Claim' above to start.";
            }

            setMessages(prev => [...prev, { id: Date.now() + 1, text: botReply, isBot: true }]);
        }, 1000);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {/* Chat Window */}
            {isOpen && (
                <div className="mb-4 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
                    <div className="bg-primary p-4 flex justify-between items-center text-primary-foreground">
                        <div className="flex items-center gap-2">
                            <Bot className="h-5 w-5" />
                            <span className="font-bold">Claim Assistant</span>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="hover:bg-primary/80 rounded p-1">
                            <X className="h-4 w-4" />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.isBot
                                        ? 'bg-white border border-gray-200 text-gray-800 rounded-tl-none'
                                        : 'bg-primary text-secondary rounded-tr-none'
                                    } shadow-sm`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
                        <input
                            className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 text-gray-900"
                            placeholder="Type a message..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        />
                        <button onClick={handleSend} className="bg-primary text-secondary p-2 rounded-full hover:bg-primary/90 transition-colors">
                            <Send className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="h-14 w-14 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-200 hover:shadow-primary/25"
            >
                {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
            </button>
        </div>
    )
}
