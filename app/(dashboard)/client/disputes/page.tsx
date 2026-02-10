'use client';

import {
    AlertCircle,
    CheckCircle2,
    Clock,
    FileText,
    MoreHorizontal,
    Plus,
    Search,
    Filter
} from "lucide-react"

export default function DisputeCenterPage() {
    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Dispute Center</h1>
                    <p className="text-muted-foreground">Track your challenging items and manage your litigation letters.</p>
                </div>
                <button className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground shadow transition-colors hover:bg-primary/90">
                    <Plus className="mr-2 h-4 w-4" /> New Dispute
                </button>
            </div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search by creditor or account number..."
                        className="w-full rounded-md border border-input bg-background pl-9 pr-4 h-10 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    />
                </div>
                <button className="inline-flex items-center justify-center rounded-md border border-input bg-background/50 hover:bg-background px-4 py-2 text-sm font-medium transition-colors shadow-sm">
                    <Filter className="mr-2 h-4 w-4" /> Filter Status
                </button>
            </div>

            {/* Matrix View (By Bureau) */}
            <div className="grid md:grid-cols-3 gap-6">

                {/* EQUIFAX COLUMN */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between pb-2 border-b border-border">
                        <div className="font-bold flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-red-500"></span>
                            Equifax
                        </div>
                        <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full">3 Active</span>
                    </div>

                    {/* Card 1 */}
                    <div className="rounded-xl border border-border bg-card shadow-sm p-4 hover:border-primary/50 transition-colors cursor-pointer group">
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h4 className="font-semibold text-sm">Chase Bank USA</h4>
                                <p className="text-xs text-muted-foreground">Charge-off • $5,200</p>
                            </div>
                            <span className="inline-flex items-center rounded-full border border-transparent bg-yellow-100 px-2 py-0.5 text-[10px] font-semibold text-yellow-800">
                                In Progress
                            </span>
                        </div>
                        <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            <span>Waiting for Response (Day 15/30)</span>
                        </div>
                        <div className="mt-3 pt-3 border-t border-border flex justify-between items-center opacity-70 group-hover:opacity-100 transition-opacity">
                            <span className="text-[10px] font-medium text-primary">View Letter</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="rounded-xl border border-border bg-card shadow-sm p-4 hover:border-primary/50 transition-colors cursor-pointer group">
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h4 className="font-semibold text-sm">Portfolio Recovery</h4>
                                <p className="text-xs text-muted-foreground">Collection • $850</p>
                            </div>
                            <span className="inline-flex items-center rounded-full border border-transparent bg-red-100 px-2 py-0.5 text-[10px] font-semibold text-red-800">
                                Action Needed
                            </span>
                        </div>
                        <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                            <AlertCircle className="h-3 w-3 text-red-500" />
                            <span className="text-red-600 font-medium">Response Received: Verified</span>
                        </div>
                        <button className="mt-3 w-full inline-flex items-center justify-center rounded bg-primary/10 hover:bg-primary/20 text-primary px-2 py-1.5 text-xs font-medium transition-colors">
                            Analyze Response
                        </button>
                    </div>
                </div>

                {/* EXPERIAN COLUMN */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between pb-2 border-b border-border">
                        <div className="font-bold flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                            Experian
                        </div>
                        <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full">1 Active</span>
                    </div>

                    {/* Card 1 */}
                    <div className="rounded-xl border border-border bg-card shadow-sm p-4 hover:border-primary/50 transition-colors cursor-pointer group">
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h4 className="font-semibold text-sm">Midland Credit</h4>
                                <p className="text-xs text-muted-foreground">Collection • $1,200</p>
                            </div>
                            <span className="inline-flex items-center rounded-full border border-transparent bg-green-100 px-2 py-0.5 text-[10px] font-semibold text-green-800">
                                Deleted
                            </span>
                        </div>
                        <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                            <CheckCircle2 className="h-3 w-3 text-green-500" />
                            <span>Removed on Feb 8th</span>
                        </div>
                        <div className="mt-3 pt-3 border-t border-border flex justify-between items-center">
                            <span className="text-[10px] font-medium text-green-600">+25 pts Impact</span>
                        </div>
                    </div>
                </div>

                {/* TRANSUNION COLUMN */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between pb-2 border-b border-border">
                        <div className="font-bold flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                            TransUnion
                        </div>
                        <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full">2 Active</span>
                    </div>

                    {/* Card 1 */}
                    <div className="rounded-xl border border-border bg-card shadow-sm p-4 hover:border-primary/50 transition-colors cursor-pointer group">
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h4 className="font-semibold text-sm">Capital One</h4>
                                <p className="text-xs text-muted-foreground">Late Payment (30 days)</p>
                            </div>
                            <span className="inline-flex items-center rounded-full border border-transparent bg-yellow-100 px-2 py-0.5 text-[10px] font-semibold text-yellow-800">
                                In Progress
                            </span>
                        </div>
                        <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            <span>Mailing Pending (Round 1)</span>
                        </div>
                        <button className="mt-3 w-full inline-flex items-center justify-center rounded bg-zinc-900 text-white hover:bg-zinc-800 px-2 py-1.5 text-xs font-medium transition-colors">
                            Pay for Postage ($4.50)
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}
