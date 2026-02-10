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

            {/* Client Table */}
            <div className="rounded-xl border border-border bg-card overflow-hidden shadow-sm">
                <table className="w-full text-sm text-left">
                    <thead className="bg-muted/50 text-muted-foreground font-medium border-b border-border">
                        <tr>
                            <th className="px-6 py-4">Client Name</th>
                            <th className="px-6 py-4">Status</th>
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
                                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800">
                                    Ready for Litigation
                                </span>
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

                        {/* Row 2: In Dispute */}
                        <tr className="hover:bg-muted/50 transition-colors group">
                            <td className="px-6 py-4 font-medium">
                                <div className="flex flex-col">
                                    <span>Sarah Miller</span>
                                    <span className="text-xs text-muted-foreground">ID: #8821 • sarah.m@gmail.com</span>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-semibold text-yellow-800">
                                    Round 2 (MOV)
                                </span>
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
                                <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800">
                                    Newly Imported
                                </span>
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
