'use client';

import {
    Search,
    Filter,
    MoreHorizontal,
    ArrowUpRight,
    Download,
    Plus,
    FileText,
    CheckCircle2,
    Clock,
    AlertCircle
} from "lucide-react"

export default function AgencyClientsPage() {
    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Client CRM</h1>
                    <p className="text-muted-foreground">Manage disputes, track violations, and push cases to litigation.</p>
                </div>
                <div className="flex gap-2">
                    <button className="inline-flex items-center justify-center rounded-md border border-input bg-background hover:bg-secondary px-4 py-2 text-sm font-medium transition-colors shadow-sm">
                        <Download className="mr-2 h-4 w-4" /> Export CSV
                    </button>
                    <button className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground shadow transition-colors hover:bg-primary/90">
                        <Plus className="mr-2 h-4 w-4" /> Add Client
                    </button>
                </div>
            </div>

            {/* Filters Bar */}
            <div className="flex flex-col md:flex-row gap-4 bg-card p-4 rounded-xl border border-border shadow-sm">
                <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search by name, email, or last 4 SSN..."
                        className="w-full rounded-md border border-input bg-background pl-9 pr-4 h-9 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                    />
                </div>
                <div className="flex gap-2">
                    <button className="inline-flex items-center justify-center rounded-md border border-input bg-background/50 hover:bg-background px-3 py-2 text-sm font-medium transition-colors">
                        <Filter className="mr-2 h-4 w-4" /> Status: All
                    </button>
                    <button className="inline-flex items-center justify-center rounded-md border border-input bg-background/50 hover:bg-background px-3 py-2 text-sm font-medium transition-colors">
                        <AlertCircle className="mr-2 h-4 w-4" /> Violations > 5
                    </button>
                </div>
            </div>


            interface TimelineStep {
                label: string;
            description: string;
            active: boolean;
            completed: boolean;
}

            function ReclaimTimeline({steps}: {steps: TimelineStep[] }) {
    return (
            <div className="flex items-center w-full max-w-xs">
                {steps.map((step, index) => (
                    <div key={step.label} className="relative flex-1 group">
                        {/* Line */}
                        {index !== 0 && (
                            <div className={`absolute top-1.5 right-1/2 w-full h-0.5 -translate-y-1/2 ${step.completed || step.active ? 'bg-primary' : 'bg-secondary'}`} style={{ right: '50%', width: '100%' }}></div>
                        )}

                        {/* Dot */}
                        <div className="relative flex flex-col items-center group">
                            <div className={`w-3 h-3 rounded-full border-2 z-10 ${step.completed ? 'bg-primary border-primary' :
                                    step.active ? 'bg-primary border-primary animate-pulse' :
                                        'bg-background border-muted'
                                }`}></div>

                            {/* Tooltip */}
                            <div className="absolute bottom-4 hidden group-hover:block bg-black text-white text-[10px] px-2 py-1 rounded whitespace-nowrap z-20">
                                {step.label}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            )
}

            // ... (Rest of component)

            {/* Client Table */}
            <div className="rounded-xl border border-border bg-card overflow-hidden shadow-sm">
                <table className="w-full text-sm text-left">
                    <thead className="bg-muted/50 text-muted-foreground font-medium border-b border-border">
                        <tr>
                            <th className="px-6 py-4">Client Name</th>
                            <th className="px-6 py-4 w-[300px]">Reclaim Timeline</th>
                            <th className="px-6 py-4">Violations</th>
                            <th className="px-6 py-4">Est. Value</th>
                            <th className="px-6 py-4">Last Action</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                        {/* Row 1: Ready for Litigation */}
                        <tr className="hover:bg-muted/50 transition-colors group">
                            <td className="px-6 py-4 font-medium">
                                <div className="flex flex-col">
                                    <span>John Doe</span>
                                    <span className="text-xs text-muted-foreground">ID: #9281 • john@example.com</span>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <ReclaimTimeline steps={[
                                    { label: 'Dispute', description: 'Sent Round 1', active: false, completed: true },
                                    { label: 'Reinvestigation', description: 'CRA Verified', active: false, completed: true },
                                    { label: 'MOV', description: 'Method Requested', active: false, completed: true },
                                    { label: 'Demand', description: 'Letter Sent', active: false, completed: true },
                                    { label: 'Litigation', description: 'Ready to File', active: true, completed: false },
                                ]} />
                                <span className="text-[10px] font-bold text-green-600 mt-1 block pl-1">READY FOR SUIT</span>
                            </td>
                            <td className="px-6 py-4">
                                <span className="font-bold text-red-600">8 Found</span>
                            </td>
                            <td className="px-6 py-4 font-bold text-green-600">$8,000</td>
                            <td className="px-6 py-4 text-muted-foreground">
                                <div className="flex items-center gap-1.5">
                                    <Clock className="h-3 w-3" />
                                    <span>MOV 15 Days Expired</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <button className="inline-flex items-center justify-center rounded-md bg-zinc-900 text-white hover:bg-zinc-800 px-3 py-1.5 text-xs font-bold transition-colors shadow-sm">
                                    Push to Attorney <ArrowUpRight className="ml-1 h-3 w-3" />
                                </button>
                            </td>
                        </tr>

                        {/* Row 2: In Dispute (MOV Phase) */}
                        <tr className="hover:bg-muted/50 transition-colors group">
                            <td className="px-6 py-4 font-medium">
                                <div className="flex flex-col">
                                    <span>Sarah Miller</span>
                                    <span className="text-xs text-muted-foreground">ID: #8821 • sarah.m@gmail.com</span>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <ReclaimTimeline steps={[
                                    { label: 'Dispute', description: 'Sent Round 1', active: false, completed: true },
                                    { label: 'Reinvestigation', description: 'CRA Verified', active: false, completed: true },
                                    { label: 'MOV', description: 'Method Requested', active: true, completed: false },
                                    { label: 'Demand', description: 'Letter Sent', active: false, completed: false },
                                    { label: 'Litigation', description: 'Ready to File', active: false, completed: false },
                                ]} />
                                <span className="text-[10px] font-medium text-orange-500 mt-1 block pl-1">MOV SENT</span>
                            </td>
                            <td className="px-6 py-4">
                                <span className="font-bold text-orange-500">2 Potential</span>
                            </td>
                            <td className="px-6 py-4 font-bold text-muted-foreground">$2,000</td>
                            <td className="px-6 py-4 text-muted-foreground">
                                <div className="flex items-center gap-1.5">
                                    <FileText className="h-3 w-3" />
                                    <span>Sent 1 week ago</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <div className="flex justify-end gap-2">
                                    <button className="text-muted-foreground hover:text-primary">
                                        <FileText className="h-4 w-4" />
                                    </button>
                                    <button className="text-muted-foreground hover:text-primary">
                                        <MoreHorizontal className="h-4 w-4" />
                                    </button>
                                </div>
                            </td>
                        </tr>

                        {/* Row 3: New Import */}
                        <tr className="hover:bg-muted/50 transition-colors group">
                            <td className="px-6 py-4 font-medium">
                                <div className="flex flex-col">
                                    <span>Michael Scott</span>
                                    <span className="text-xs text-muted-foreground">ID: #1021 • mscott@dunder.com</span>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <ReclaimTimeline steps={[
                                    { label: 'Dispute', description: 'Sent Round 1', active: true, completed: false },
                                    { label: 'Reinvestigation', description: 'CRA Verified', active: false, completed: false },
                                    { label: 'MOV', description: 'Method Requested', active: false, completed: false },
                                    { label: 'Demand', description: 'Letter Sent', active: false, completed: false },
                                    { label: 'Litigation', description: 'Ready to File', active: false, completed: false },
                                ]} />
                                <span className="text-[10px] font-medium text-blue-500 mt-1 block pl-1">NEW IMPORT</span>
                            </td>
                            <td className="px-6 py-4">
                                <span className="font-bold text-muted-foreground">Scanning...</span>
                            </td>
                            <td className="px-6 py-4 font-bold text-muted-foreground">--</td>
                            <td className="px-6 py-4 text-muted-foreground">
                                <div className="flex items-center gap-1.5">
                                    <CheckCircle2 className="h-3 w-3" />
                                    <span>Report connected today</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <button className="inline-flex items-center justify-center rounded-md border border-primary text-primary hover:bg-primary/5 px-3 py-1.5 text-xs font-bold transition-colors">
                                    Start Round 1
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Showing 1-10 of 1,240 clients</span>
                <div className="flex gap-2">
                    <button className="px-4 py-2 border border-input rounded-md hover:bg-secondary">Previous</button>
                    <button className="px-4 py-2 border border-input rounded-md hover:bg-secondary">Next</button>
                </div>
            </div>
        </div>
    )
}
