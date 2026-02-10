'use client';

import { useState } from 'react';
import {
    Phone,
    PhoneIncoming,
    PhoneOff,
    Play,
    AlertTriangle,
    Gavel,
    Clock,
    ShieldAlert,
    Mic
} from "lucide-react"

// Call Log Type
interface CallLog {
    id: string;
    caller: string;
    number: string;
    time: string;
    duration: string;
    status: 'Clean' | 'Suspicious' | 'Violation Detected';
    transcriptSnippet?: string;
    violationType?: string;
}

export default function PredatorTrapPage() {
    const [calls, setCalls] = useState<CallLog[]>([
        {
            id: '1',
            caller: 'Unknown (Midland Credit)',
            number: '(800) 555-0199',
            time: 'Today, 8:12 AM',
            duration: '0:45',
            status: 'Violation Detected',
            transcriptSnippet: "...if you don't pay by Friday, we will have the sheriff come to your job and arrest you...",
            violationType: 'FDCPA § 806 (Threat of Arrest)'
        },
        {
            id: '2',
            caller: 'Portfolio Recovery',
            number: '(888) 555-0123',
            time: 'Yesterday, 9:45 PM',
            duration: '0:12',
            status: 'Violation Detected',
            transcriptSnippet: "(Call received outside permissible hours 9pm-8am)",
            violationType: 'FDCPA § 805(a)(1) (Inconvenient Time)'
        },
        {
            id: '3',
            caller: 'Chase Bank',
            number: '(800) 935-9935',
            time: 'Yesterday, 2:30 PM',
            duration: '1:10',
            status: 'Clean',
            transcriptSnippet: "This is a courtesy call regarding your payment..."
        }
    ]);

    const [activeCallId, setActiveCallId] = useState<string | null>(null);

    return (
        <div className="space-y-6 animate-in fade-in duration-500 max-w-5xl mx-auto pb-10">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-red-600 flex items-center gap-2">
                    <ShieldAlert className="h-8 w-8" />
                    Predator Call Trap
                </h1>
                <p className="text-muted-foreground">Monitor your burner line. Catch them breaking the law.</p>
            </div>

            {/* Burner Number Card */}
            <div className="bg-gradient-to-r from-red-900 to-red-950 text-white rounded-xl p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -z-10"></div>
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                        <h2 className="text-sm font-bold uppercase tracking-widest text-red-200 mb-1">Your Trap Number</h2>
                        <div className="text-4xl md:text-5xl font-mono font-bold tracking-wider flex items-center gap-3">
                            <Phone className="h-8 w-8 animate-pulse text-red-400" />
                            (555) 019-2834
                        </div>
                        <p className="text-sm text-red-200/80 mt-2 flex items-center gap-2">
                            <Mic className="h-4 w-4" />
                            AI Listening & Recording Active (24/7)
                        </p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg border border-white/20 backdrop-blur-sm text-center">
                        <div className="text-3xl font-bold text-red-400 mb-1">2</div>
                        <div className="text-xs uppercase font-bold text-white/80">Violations Caught</div>
                    </div>
                </div>
            </div>

            {/* Call Log */}
            <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
                <div className="p-6 border-b border-border bg-muted/30 flex items-center justify-between">
                    <h3 className="font-bold flex items-center gap-2">
                        <PhoneIncoming className="h-4 w-4" /> Recent Calls
                    </h3>
                    <span className="text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded-full font-bold border border-red-200">
                        Live Monitor
                    </span>
                </div>

                <div className="divide-y divide-border">
                    {calls.map((call) => (
                        <div key={call.id} className="p-6 hover:bg-muted/50 transition-colors group">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                <div className="flex items-start gap-4">
                                    <div className={`p-3 rounded-full ${call.status === 'Violation Detected' ? 'bg-red-100 text-red-600' :
                                            call.status === 'Suspicious' ? 'bg-yellow-100 text-yellow-600' :
                                                'bg-secondary text-muted-foreground'
                                        }`}>
                                        {call.status === 'Violation Detected' ? <AlertTriangle className="h-5 w-5" /> : <Phone className="h-5 w-5" />}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <h4 className="font-bold text-lg">{call.caller}</h4>
                                            <span className="text-sm text-muted-foreground font-mono">{call.number}</span>
                                        </div>
                                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                                            <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {call.time}</span>
                                            <span>Duration: {call.duration}</span>
                                        </div>

                                        {/* Transcript Snippet */}
                                        {call.status === 'Violation Detected' && (
                                            <div className="mt-3 bg-red-50 border border-red-100 rounded-lg p-3 max-w-2xl">
                                                <p className="text-sm italic text-red-800">
                                                    "{call.transcriptSnippet}"
                                                </p>
                                                <div className="mt-2 flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-wide">
                                                    <ShieldAlert className="h-3 w-3" />
                                                    {call.violationType} Detected
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex items-center gap-3">
                                    <button className="p-2 rounded-full hover:bg-secondary text-muted-foreground transition-colors" title="Play Recording">
                                        <Play className="h-5 w-5" />
                                    </button>

                                    {call.status === 'Violation Detected' && (
                                        <button className="inline-flex items-center justify-center rounded-md bg-red-600 text-white hover:bg-red-700 px-4 py-2 text-sm font-bold shadow-md transition-all animate-pulse">
                                            <Gavel className="mr-2 h-4 w-4" /> Generate Lawsuit ($1,000)
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
