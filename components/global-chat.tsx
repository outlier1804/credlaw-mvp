'use client';

import { useState } from 'react';
import {
    Search,
    Send,
    MoreVertical,
    User,
    Briefcase,
    ShieldCheck,
    Paperclip
} from "lucide-react"

// Types
interface Contact {
    id: string;
    name: string;
    role: 'Client' | 'Attorney' | 'Agency';
    lastMessage: string;
    time: string;
    unread: number;
    avatarColor: string;
}

interface Message {
    id: string;
    senderId: string;
    text: string;
    time: string;
    isMe: boolean;
}

export function GlobalChatInterface({ userRole }: { userRole: 'agency' | 'attorney' | 'client' }) {
    const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
    const [messageInput, setMessageInput] = useState('');

    // Mock Data based on Role
    const contacts: Contact[] = [
        { id: '1', name: 'John Doe', role: 'Client', lastMessage: 'Did you get the Equifax letter?', time: '10:30 AM', unread: 2, avatarColor: 'bg-blue-500' },
        { id: '2', name: 'Smith Law Firm', role: 'Attorney', lastMessage: 'Settlement offer received.', time: 'Yesterday', unread: 0, avatarColor: 'bg-zinc-800' },
    ];

    const [messages, setMessages] = useState<Message[]>([
        { id: '1', senderId: '1', text: 'Hey, I just uploaded the new denial letter.', time: '10:28 AM', isMe: false },
        { id: '2', senderId: '1', text: 'Did you get the Equifax letter?', time: '10:30 AM', isMe: false },
    ]);

    const handleSend = () => {
        if (!messageInput.trim()) return;
        setMessages([...messages, {
            id: Date.now().toString(),
            senderId: 'me',
            text: messageInput,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isMe: true
        }]);
        setMessageInput('');
    };

    return (
        <div className="flex h-[calc(100vh-8rem)] bg-card border border-border rounded-xl overflow-hidden shadow-sm animate-in fade-in duration-500">

            {/* Sidebar (Contacts) */}
            <div className="w-80 border-r border-border flex flex-col bg-muted/10">
                <div className="p-4 border-b border-border">
                    <h2 className="font-bold text-lg mb-4">Messages</h2>
                    <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <input type="text" placeholder="Search conversations..." className="w-full pl-9 pr-4 py-2 text-sm bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20" />
                    </div>
                </div>
                <div className="flex-1 overflow-y-auto">
                    {contacts.map(contact => (
                        <div
                            key={contact.id}
                            onClick={() => setSelectedContact(contact)}
                            className={`p-4 border-b border-border/50 cursor-pointer hover:bg-accent/50 transition-colors ${selectedContact?.id === contact.id ? 'bg-accent' : ''}`}
                        >
                            <div className="flex justify-between items-start mb-1">
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm ${contact.avatarColor}`}>
                                        {contact.name.substring(0, 2).toUpperCase()}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-sm">{contact.name}</h3>
                                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                            {contact.role === 'Attorney' && <Briefcase className="h-3 w-3" />}
                                            {contact.role === 'Client' && <User className="h-3 w-3" />}
                                            {contact.role}
                                        </div>
                                    </div>
                                </div>
                                <span className="text-[10px] text-muted-foreground">{contact.time}</span>
                            </div>
                            <p className="text-xs text-muted-foreground line-clamp-1 pl-[52px]">{contact.lastMessage}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Chat Area */}
            {selectedContact ? (
                <div className="flex-1 flex flex-col bg-background">
                    {/* Chat Header */}
                    <div className="p-4 border-b border-border flex justify-between items-center bg-card/50">
                        <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold border-2 border-background ${selectedContact.avatarColor}`}>
                                {selectedContact.name.substring(0, 2).toUpperCase()}
                            </div>
                            <div>
                                <h3 className="font-bold">{selectedContact.name}</h3>
                                <p className="text-xs text-muted-foreground flex items-center gap-1">
                                    <span className="w-2 h-2 bg-green-500 rounded-full"></span> Online
                                </p>
                            </div>
                        </div>
                        <button className="text-muted-foreground hover:text-foreground">
                            <MoreVertical className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-muted/5">
                        {messages.map(msg => (
                            <div key={msg.id} className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[70%] rounded-2xl px-4 py-3 text-sm shadow-sm ${msg.isMe
                                        ? 'bg-primary text-primary-foreground rounded-br-none'
                                        : 'bg-card border border-border rounded-bl-none'
                                    }`}>
                                    <p>{msg.text}</p>
                                    <div className={`text-[10px] mt-1 flex justify-end ${msg.isMe ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                                        {msg.time}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Input Area */}
                    <div className="p-4 border-t border-border bg-card">
                        <div className="flex items-center gap-2">
                            <button className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors">
                                <Paperclip className="h-5 w-5" />
                            </button>
                            <input
                                type="text"
                                value={messageInput}
                                onChange={(e) => setMessageInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                placeholder={`Message ${selectedContact.name}...`}
                                className="flex-1 bg-muted/50 border-none rounded-full px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20"
                            />
                            <button
                                onClick={handleSend}
                                className="p-2.5 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors shadow-sm disabled:opacity-50"
                                disabled={!messageInput.trim()}
                            >
                                <Send className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground bg-muted/5">
                    <div className="bg-muted/20 p-6 rounded-full mb-4">
                        <MessageSquare className="h-12 w-12 text-muted-foreground/50" />
                    </div>
                    <p className="font-medium">Select a conversation to start chatting</p>
                </div>
            )}
        </div>
    )
}

function MessageSquare(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
    )
}
