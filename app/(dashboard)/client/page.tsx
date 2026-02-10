'use client';

import { Upload, Mic, FileText, Shield, AlertTriangle } from "lucide-react"

export default function ClientDashboard() {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Client Portal</h2>
                    <p className="text-muted-foreground">Track your repair progress and upload evidence.</p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-500 rounded-full border border-green-500/20">
                    <Shield className="h-4 w-4" />
                    <span className="font-medium text-sm">Credit Protection Active</span>
                </div>
            </div>

            {/* Voice Agent & Status */}
            <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold flex items-center gap-2">
                            <Mic className="h-5 w-5 text-primary" />
                            AI Voice Assistant
                        </h3>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" checked className="sr-only peer" readOnly />
                            <div className="w-11 h-6 bg-muted peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-ring rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                        Your AI assistant will call you <strong>3 days before</strong> your dispute window ends to remind you to check for mail.
                    </p>
                    <div className="p-3 bg-secondary/50 rounded-lg border border-border">
                        <p className="text-xs font-mono text-muted-foreground">Last Check: Today at 9:00 AM - No action needed.</p>
                    </div>
                </div>

                <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold flex items-center gap-2">
                            <AlertTriangle className="h-5 w-5 text-yellow-500" />
                            Action Required
                        </h3>
                        <span className="bg-yellow-500/10 text-yellow-500 text-xs px-2 py-1 rounded-full font-medium">1 Item</span>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-start gap-3 p-3 bg-background rounded-lg border border-border">
                            <div className="mt-1 h-2 w-2 rounded-full bg-yellow-500"></div>
                            <div>
                                <p className="text-sm font-medium">Upload Denial Letter</p>
                                <p className="text-xs text-muted-foreground">Chase Bank dispute ended 2 days ago.</p>
                            </div>
                            <button className="ml-auto text-xs bg-primary text-primary-foreground px-3 py-1 rounded-md hover:bg-primary/90">
                                Upload
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Proof of Harm Locker */}
            <div className="rounded-xl border border-border bg-card shadow-sm">
                <div className="p-6 border-b border-border">
                    <h3 className="font-semibold text-lg flex items-center gap-2">
                        <FileText className="h-5 w-5" />
                        Proof of Harm Locker
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                        Upload "Adverse Action" letters or high-interest rate offers here to establish legal standing.
                    </p>
                </div>

                <div className="p-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* Upload Box */}
                    <div className="border-2 border-dashed border-muted-foreground/25 hover:border-primary/50 transition-colors rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer bg-muted/5">
                        <div className="h-10 w-10 bg-secondary rounded-full flex items-center justify-center mb-3">
                            <Upload className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <p className="font-medium text-sm">Click to Upload</p>
                        <p className="text-xs text-muted-foreground mt-1">PDF, JPG, or PNG (Max 10MB)</p>
                    </div>

                    {/* Existing Files */}
                    <div className="group relative rounded-xl border border-border bg-background p-4 hover:shadow-md transition-all">
                        <div className="absolute top-4 right-4 text-muted-foreground">
                            <FileText className="h-4 w-4" />
                        </div>
                        <div className="mt-8">
                            <p className="font-medium text-sm">Denial Letter - Capital One</p>
                            <p className="text-xs text-muted-foreground mt-1">Uploaded Oct 12, 2025</p>
                            <div className="flex gap-2 mt-3">
                                <span className="inline-flex items-center rounded-full bg-red-500/10 px-2 py-0.5 text-xs font-medium text-red-500">
                                    Denied Mortgage
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="group relative rounded-xl border border-border bg-background p-4 hover:shadow-md transition-all">
                        <div className="absolute top-4 right-4 text-muted-foreground">
                            <FileText className="h-4 w-4" />
                        </div>
                        <div className="mt-8">
                            <p className="font-medium text-sm">High Interest Offer - Ally</p>
                            <p className="text-xs text-muted-foreground mt-1">Uploaded Sep 28, 2025</p>
                            <div className="flex gap-2 mt-3">
                                <span className="inline-flex items-center rounded-full bg-orange-500/10 px-2 py-0.5 text-xs font-medium text-orange-500">
                                    12% Rate
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
