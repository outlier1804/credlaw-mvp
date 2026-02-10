'use client';

import {
    Gavel,
    Briefcase,
    FileText,
    MoreHorizontal,
    Search,
    Filter,
    ArrowRight,
    CheckCircle2,
    Clock,
    DollarSign
} from "lucide-react"

export default function LitigationQueuePage() {
    return (
        <div className="space-y-6 animate-in fade-in duration-500 overflow-x-auto h-full pb-4">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-2">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Litigation Pipeline</h1>
                    <p className="text-muted-foreground">Track cases from hand-off to settlement.</p>
                </div>
                <div className="flex gap-2">
                    <button className="inline-flex items-center justify-center rounded-md border border-input bg-background/50 hover:bg-background px-3 py-2 text-sm font-medium transition-colors">
                        <Filter className="mr-2 h-4 w-4" /> Filter by Firm
                    </button>
                    <button className="inline-flex items-center justify-center rounded-md bg-zinc-900 text-white hover:bg-zinc-800 px-4 py-2 text-sm font-bold transition-colors">
                        <Gavel className="mr-2 h-4 w-4" /> New Case Intake
                    </button>
                </div>
            </div>

            {/* Kanban Board Layout */}
            <div className="flex gap-6 min-w-[1000px]">

                {/* Column 1: Review / Drafting */}
                <div className="flex-1 min-w-[300px] flex flex-col gap-4">
                    <div className="flex items-center justify-between pb-2 border-b border-border">
                        <h3 className="font-bold flex items-center gap-2">
                            <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                            Attorney Review
                        </h3>
                        <span className="text-xs font-medium text-muted-foreground bg-secondary px-2 py-1 rounded-full">3 Cases</span>
                    </div>

                    {/* Card 1 */}
                    <div className="bg-card border border-border p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-grab active:cursor-grabbing">
                        <div className="flex justify-between items-start mb-3">
                            <div>
                                <h4 className="font-bold text-sm">John Doe vs. Equifax</h4>
                                <p className="text-xs text-muted-foreground">Violation: 15 U.S.C. § 1681i</p>
                            </div>
                            <button className="text-muted-foreground hover:text-primary"><MoreHorizontal className="h-4 w-4" /></button>
                        </div>
                        <div className="space-y-2 mb-3">
                            <div className="flex items-center gap-2 text-xs bg-red-100 text-red-700 px-2 py-1 rounded w-fit">
                                <Clock className="h-3 w-3" />
                                <span>Drafting Complaint</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between pt-3 border-t border-border">
                            <div className="flex -space-x-2">
                                <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center text-[10px] text-white font-bold border-2 border-card">JD</div>
                            </div>
                            <span className="text-xs text-muted-foreground">Assigned: Smith Law</span>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-card border border-border p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-grab active:cursor-grabbing">
                        <div className="flex justify-between items-start mb-3">
                            <div>
                                <h4 className="font-bold text-sm">Sarah Miller vs. Chase</h4>
                                <p className="text-xs text-muted-foreground">Violation: Hinkle v. Midland</p>
                            </div>
                            <button className="text-muted-foreground hover:text-primary"><MoreHorizontal className="h-4 w-4" /></button>
                        </div>
                        <div className="space-y-2 mb-3">
                            <div className="flex items-center gap-2 text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded w-fit">
                                <FileText className="h-3 w-3" />
                                <span>Evidence Audit</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between pt-3 border-t border-border">
                            <div className="flex -space-x-2">
                                <div className="h-6 w-6 rounded-full bg-purple-500 flex items-center justify-center text-[10px] text-white font-bold border-2 border-card">SM</div>
                            </div>
                            <span className="text-xs text-muted-foreground">Assigned: Pending</span>
                        </div>
                    </div>
                </div>

                {/* Column 2: Filed in Court */}
                <div className="flex-1 min-w-[300px] flex flex-col gap-4">
                    <div className="flex items-center justify-between pb-2 border-b border-border">
                        <h3 className="font-bold flex items-center gap-2">
                            <div className="h-3 w-3 rounded-full bg-purple-500"></div>
                            Filed / Arbitration
                        </h3>
                        <span className="text-xs font-medium text-muted-foreground bg-secondary px-2 py-1 rounded-full">2 Cases</span>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-card border border-border p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-grab active:cursor-grabbing">
                        <div className="flex justify-between items-start mb-3">
                            <div>
                                <h4 className="font-bold text-sm">M. Scott vs. Experian</h4>
                                <p className="text-xs text-muted-foreground">Process: AAA Arbitration</p>
                            </div>
                            <button className="text-muted-foreground hover:text-primary"><MoreHorizontal className="h-4 w-4" /></button>
                        </div>
                        <div className="space-y-2 mb-3">
                            <div className="flex items-center gap-2 text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded w-fit">
                                <Gavel className="h-3 w-3" />
                                <span>Case #22-cv-891</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between pt-3 border-t border-border">
                            <span className="text-xs font-bold text-muted-foreground">Est. Value: $4,500</span>
                            <span className="text-xs text-muted-foreground">Day 14</span>
                        </div>
                    </div>
                </div>

                {/* Column 3: Settlement Negotiation */}
                <div className="flex-1 min-w-[300px] flex flex-col gap-4">
                    <div className="flex items-center justify-between pb-2 border-b border-border">
                        <h3 className="font-bold flex items-center gap-2">
                            <div className="h-3 w-3 rounded-full bg-green-500"></div>
                            Negotiation
                        </h3>
                        <span className="text-xs font-medium text-muted-foreground bg-secondary px-2 py-1 rounded-full">1 Case</span>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-card border border-l-4 border-l-green-500 border-y border-r border-border p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-grab active:cursor-grabbing">
                        <div className="flex justify-between items-start mb-3">
                            <div>
                                <h4 className="font-bold text-sm">Amanda B. vs. Portfolio</h4>
                                <p className="text-xs text-muted-foreground">Offer Received</p>
                            </div>
                            <button className="text-muted-foreground hover:text-primary"><MoreHorizontal className="h-4 w-4" /></button>
                        </div>
                        <div className="space-y-2 mb-3">
                            <div className="flex items-center gap-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded w-fit">
                                <DollarSign className="h-3 w-3" />
                                <span>Offer: $1,500</span>
                            </div>
                            <p className="text-xs text-muted-foreground font-medium">Attorney Strategy: "Counter at $3k"</p>
                        </div>
                        <button className="w-full mt-2 text-xs bg-green-600 text-white font-bold py-1.5 rounded hover:bg-green-700 transition-colors">
                            Review Settlement
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}
