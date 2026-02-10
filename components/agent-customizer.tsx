'use client';

import { useState } from 'react';
import { Bot, Save, MessageSquare } from 'lucide-react';

export function AgentCustomizer() {
    const [config, setConfig] = useState({
        agentName: "CredLaw Assistant",
        welcomeMessage: "Hi! I can help you with your credit repair journey.",
        tone: "Professional"
    });

    const handleSave = () => {
        // In production, save to Supabase via API
        alert("Agent settings saved! Your clients will now see the updated assistant.");
    };

    return (
        <div className="rounded-xl border border-border bg-card shadow-sm">
            <div className="p-6 border-b border-border">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                    <Bot className="h-5 w-5" />
                    Customize Client AI Agent
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                    Configure how the AI assistant interacts with your clients.
                </p>
            </div>

            <div className="p-6 space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Agent Name</label>
                        <input
                            type="text"
                            value={config.agentName}
                            onChange={(e) => setConfig({ ...config, agentName: e.target.value })}
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Tone of Voice</label>
                        <select
                            value={config.tone}
                            onChange={(e) => setConfig({ ...config, tone: e.target.value })}
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            <option>Professional</option>
                            <option>Friendly</option>
                            <option>Strict / Legal</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">Welcome Message</label>
                    <textarea
                        value={config.welcomeMessage}
                        onChange={(e) => setConfig({ ...config, welcomeMessage: e.target.value })}
                        className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                </div>

                <div className="bg-secondary/20 p-4 rounded-lg border border-border">
                    <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-3">Preview</h4>
                    <div className="flex gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                            <Bot className="h-4 w-4" />
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs font-medium">{config.agentName}</p>
                            <div className="bg-muted p-3 rounded-r-lg rounded-bl-lg text-sm">
                                {config.welcomeMessage}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end">
                    <button
                        onClick={handleSave}
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                    >
                        <Save className="mr-2 h-4 w-4" />
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    )
}
