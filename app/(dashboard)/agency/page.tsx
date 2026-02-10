'use client';

import {
    Users,
    Gavel,
    TrendingUp,
    AlertCircle,
    DollarSign,
    ArrowUpRight,
    FileText,
    Plus,
    Search
} from "lucide-react"
import Link from "next/link";

export default function AgencyDashboardPage() {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Agency Command Center</h1>
                    <p className="text-muted-foreground">Manage your client pipeline and convert violations into revenue.</p>
                </div>
                <div className="flex gap-3">
                    <button className="inline-flex items-center justify-center rounded-md border border-input bg-background/50 hover:bg-background px-4 py-2 text-sm font-medium transition-colors shadow-sm">
                        <FileText className="mr-2 h-4 w-4" /> Bulk Import (CSV)
                    </button>
                    <Link href="/agency/clients" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground shadow transition-colors hover:bg-primary/90">
                        <Plus className="mr-2 h-4 w-4" /> Add New Client
                    </Link>
                </div>
            </div>

            {/* Top Metrics Grid (The "Gold Mine") */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {/* Metric 1: Pipeline Value */}
                <div className="rounded-xl border border-border bg-card text-card-foreground shadow-sm p-6 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <DollarSign className="h-16 w-16 text-green-500" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <span className="text-sm font-medium text-muted-foreground">Total Pipeline Value</span>
                        <span className="text-3xl font-bold text-green-500 tracking-tight">$1.2M</span>
                    </div>
                    <div className="mt-4 flex items-center text-xs font-medium text-green-600">
                        <TrendingUp className="mr-1 h-3 w-3" />
                        <span>+$150k this month</span>
                    </div>
                </div>

                {/* Metric 2: Litigation Ready */}
                <div className="rounded-xl border border-border bg-card text-card-foreground shadow-sm p-6 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Gavel className="h-16 w-16 text-primary" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <span className="text-sm font-medium text-muted-foreground">Litigation Ready</span>
                        <span className="text-3xl font-bold tracking-tight">42</span>
                    </div>
                    <div className="mt-4 text-xs text-muted-foreground">
                        Clients with >3 Violations
                    </div>
                </div>

                {/* Metric 3: Active Clients */}
                <div className="rounded-xl border border-border bg-card text-card-foreground shadow-sm p-6 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Users className="h-16 w-16 text-blue-500" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <span className="text-sm font-medium text-muted-foreground">Active Clients</span>
                        <span className="text-3xl font-bold tracking-tight">1,240</span>
                    </div>
                    <div className="mt-4 text-xs text-muted-foreground">
                        98% Retention Rate
                    </div>
                </div>

                {/* Metric 4: Attorneys Assigned */}
                <div className="rounded-xl border border-border bg-card text-card-foreground shadow-sm p-6 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <FileText className="h-16 w-16 text-purple-500" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <span className="text-sm font-medium text-muted-foreground">Cases in Suit</span>
                        <span className="text-3xl font-bold tracking-tight">15</span>
                    </div>
                    <div className="mt-4 text-xs text-muted-foreground">
                        Avg Settlement: $3,200
                    </div>
                </div>
            </div>

            {/* Main Content Areas */}
            <div className="grid gap-8 md:grid-cols-7">

                {/* Left Column: Actionable Clients (Span 5) */}
                <div className="md:col-span-4 space-y-6">
                    <div className="rounded-xl border border-border bg-card shadow-sm">
                        <div className="p-6 border-b border-border flex justify-between items-center">
                            <div>
                                <h3 className="font-bold text-lg">Actionable Clients</h3>
                                <p className="text-sm text-muted-foreground">These clients need your attention to move forward.</p>
                            </div>
                            <Link href="/agency/clients" className="text-sm font-medium text-primary hover:underline">View All CRM</Link>
                        </div>
                        <div className="p-0">
                            {/* Client Row 1 */}
                            <div className="flex items-center justify-between p-4 border-b border-border hover:bg-muted/50 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">JD</div>
                                    <div>
                                        <h4 className="font-semibold text-sm">John Doe</h4>
                                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                            <span className="text-red-500 font-medium">8 Violations</span>
                                            <span>•</span>
                                            <span>Est. $8,000</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <button className="inline-flex items-center justify-center rounded-md bg-zinc-900 text-white hover:bg-zinc-800 px-3 py-1.5 text-xs font-medium transition-colors">
                                        Send to Attorney <ArrowUpRight className="ml-1 h-3 w-3" />
                                    </button>
                                </div>
                            </div>
                            {/* Client Row 2 */}
                            <div className="flex items-center justify-between p-4 border-b border-border hover:bg-muted/50 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">SM</div>
                                    <div>
                                        <h4 className="font-semibold text-sm">Sarah Miller</h4>
                                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                            <span className="text-orange-500 font-medium">MOV Request</span>
                                            <span>•</span>
                                            <span>Round 2</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <button className="inline-flex items-center justify-center rounded-md border border-input bg-background hover:bg-secondary px-3 py-1.5 text-xs font-medium transition-colors">
                                        Generate Letter
                                    </button>
                                </div>
                            </div>
                            {/* Client Row 3 */}
                            <div className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">RJ</div>
                                    <div>
                                        <h4 className="font-semibold text-sm">Robert James</h4>
                                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                            <span className="text-green-600 font-medium">Settlement Offer</span>
                                            <span>•</span>
                                            <span>Midland Credit</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <button className="inline-flex items-center justify-center rounded-md bg-green-600 text-white hover:bg-green-700 px-3 py-1.5 text-xs font-medium transition-colors">
                                        Review Offer
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Recent Activity Feed (Span 3) */}
                <div className="md:col-span-3 space-y-6">
                    <div className="rounded-xl border border-border bg-card text-card-foreground shadow-sm">
                        <div className="p-6 border-b border-border flex justify-between items-center">
                            <h3 className="font-semibold leading-none tracking-tight">Live Agency Feed</h3>
                            <button className="text-xs text-muted-foreground hover:text-primary">Filter</button>
                        </div>
                        <div className="p-6 pt-4">
                            <div className="space-y-6">
                                {/* Activity Item */}
                                <div className="flex gap-4 relative">
                                    <div className="absolute left-0 top-2 bottom-0 w-px bg-border ml-[7px]"></div>
                                    <div className="relative z-10 w-3.5 h-3.5 mt-1.5 rounded-full border-2 border-green-500 bg-background flex-shrink-0"></div>
                                    <div className="space-y-1 pb-1">
                                        <p className="text-sm font-medium leading-none">New Settlement Reached</p>
                                        <p className="text-xs text-muted-foreground"><span className="font-bold text-foreground">Amanda B.</span> settled with Portfolio Recovery for $1,500.</p>
                                        <span className="text-[10px] text-muted-foreground block pt-1">10 mins ago</span>
                                    </div>
                                </div>
                                {/* Activity Item */}
                                <div className="flex gap-4 relative">
                                    <div className="absolute left-0 top-2 bottom-0 w-px bg-border ml-[7px]"></div>
                                    <div className="relative z-10 w-3.5 h-3.5 mt-1.5 rounded-full border-2 border-primary bg-background flex-shrink-0"></div>
                                    <div className="space-y-1 pb-1">
                                        <p className="text-sm font-medium leading-none">Bulk Disputes Sent</p>
                                        <p className="text-xs text-muted-foreground">Round 1 letters for 15 clients mailed via USPS.</p>
                                        <span className="text-[10px] text-muted-foreground block pt-1">1 hour ago</span>
                                    </div>
                                </div>
                                {/* Activity Item */}
                                <div className="flex gap-4 relative">
                                    <div className="relative z-10 w-3.5 h-3.5 mt-1.5 rounded-full border-2 border-muted bg-background flex-shrink-0"></div>
                                    <div className="space-y-1 pb-1">
                                        <p className="text-sm font-medium leading-none">Client Imported</p>
                                        <p className="text-xs text-muted-foreground">Michael Scott connected SmartCredit.</p>
                                        <span className="text-[10px] text-muted-foreground block pt-1">3 hours ago</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
