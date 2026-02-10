'use client';

import {
    ShieldAlert,
    TrendingUp,
    CheckCircle2,
    AlertTriangle,
    ArrowRight,
    FileText,
    DollarSign
} from "lucide-react"
import Link from "next/link";

export default function ClientCommandCenter() {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Command Center</h1>
                    <p className="text-muted-foreground">Your journey from bad credit to a big check starts here.</p>
                </div>
                <div className="flex gap-3">
                    <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 py-2 px-4 shadow-sm border border-input">
                        Download Report
                    </button>
                    <Link href="/client/disputes" className="inline-flex items-center justify-center rounded-md text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4 shadow">
                        Start New Dispute
                    </Link>
                </div>
            </div>

            {/* Top Metrics Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {/* Metric 1: Potential Claim Value */}
                <div className="rounded-xl border border-border bg-card text-card-foreground shadow-sm p-6 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <DollarSign className="h-16 w-16 text-green-500" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <span className="text-sm font-medium text-muted-foreground">Potential Claim Value</span>
                        <span className="text-3xl font-bold text-green-500 tracking-tight">$3,500</span>
                    </div>
                    <div className="mt-4 flex items-center text-xs font-medium text-green-600">
                        <TrendingUp className="mr-1 h-3 w-3" />
                        <span>+$1,000 from last month</span>
                    </div>
                    <div className="h-1 w-full bg-secondary mt-4 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 w-[60%] rounded-full"></div>
                    </div>
                </div>

                {/* Metric 2: Violations Detectd */}
                <div className="rounded-xl border border-border bg-card text-card-foreground shadow-sm p-6 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <ShieldAlert className="h-16 w-16 text-destructive" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <span className="text-sm font-medium text-muted-foreground">Violations Found</span>
                        <span className="text-3xl font-bold text-destructive tracking-tight">12</span>
                    </div>
                    <div className="mt-4 text-xs text-muted-foreground">
                        Across 3 Bureaus
                    </div>
                </div>

                {/* Metric 3: Items Deleted */}
                <div className="rounded-xl border border-border bg-card text-card-foreground shadow-sm p-6 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <CheckCircle2 className="h-16 w-16 text-primary" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <span className="text-sm font-medium text-muted-foreground">Items Deleted</span>
                        <span className="text-3xl font-bold text-primary tracking-tight">4</span>
                    </div>
                    <div className="mt-4 text-xs text-muted-foreground">
                        Impact: +42 pts
                    </div>
                </div>

                {/* Metric 4: Credit Score */}
                <div className="rounded-xl border border-border bg-card text-card-foreground shadow-sm p-6 relative overflow-hidden group">
                    <div className="flex flex-col space-y-1.5">
                        <span className="text-sm font-medium text-muted-foreground">Avg Credit Score</span>
                        <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-bold tracking-tight">642</span>
                            <span className="text-sm text-green-500 font-bold">+15</span>
                        </div>
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
                        <div className="bg-secondary/50 rounded p-1">
                            <div className="font-bold">EQ</div>
                            <div>638</div>
                        </div>
                        <div className="bg-secondary/50 rounded p-1">
                            <div className="font-bold">TU</div>
                            <div>645</div>
                        </div>
                        <div className="bg-secondary/50 rounded p-1">
                            <div className="font-bold">EX</div>
                            <div>643</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Areas */}
            <div className="grid gap-8 md:grid-cols-7">

                {/* Left Column: Next Best Actions & Timeline (Span 5) */}
                <div className="md:col-span-5 space-y-8">

                    {/* "Next Best Action" Hero Card */}
                    <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 md:p-8 shadow-sm relative overflow-hidden">
                        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                            <div className="space-y-2">
                                <div className="inline-flex items-center rounded-full border border-primary/20 bg-background px-2.5 py-0.5 text-xs font-semibold text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                                    Attention Required
                                </div>
                                <h3 className="text-2xl font-bold tracking-tight">Sign Affidavit for Round 2</h3>
                                <p className="text-muted-foreground max-w-lg">
                                    We've drafted your procedural demand letters for Equifax. We need your digital signature to proceed with mailing.
                                </p>
                            </div>
                            <button className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                                Sign Now <ArrowRight className="ml-2 h-4 w-4" />
                            </button>
                        </div>
                        {/* Abstract Background Decoration */}
                        <div className="absolute top-0 right-0 -mt-10 -mr-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl z-0"></div>
                    </div>

                    {/* Section: Timeline / Active Disputes */}
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-bold tracking-tight">Active Disputes</h2>
                            <Link href="/client/disputes" className="text-sm font-medium text-primary hover:underline">View All</Link>
                        </div>
                        <div className="space-y-4">
                            {/* Dispute Item 1 */}
                            <div className="rounded-lg border border-border bg-card p-4 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold text-xs">
                                        CHASE
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-sm">Chase Card Services</h4>
                                        <p className="text-xs text-muted-foreground">Account # ****4291 • Credit Card</p>
                                    </div>
                                </div>
                                <div className="hidden md:flex flex-col items-end text-sm">
                                    <span className="font-medium">Round 2: Procedural Request</span>
                                    <span className="text-xs text-muted-foreground">Sent 4 days ago via Certified Mail</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="inline-flex items-center rounded-full border border-transparent bg-yellow-100 px-2.5 py-0.5 text-xs font-semibold text-yellow-800">
                                        In Dispute
                                    </span>
                                </div>
                            </div>

                            {/* Dispute Item 2 */}
                            <div className="rounded-lg border border-border bg-card p-4 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
                                        MIDLND
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-sm">Midland Credit Mgmt</h4>
                                        <p className="text-xs text-muted-foreground">Account # ****9921 • Collections</p>
                                    </div>
                                </div>
                                <div className="hidden md:flex flex-col items-end text-sm">
                                    <span className="font-medium">Analysis Complete</span>
                                    <span className="text-xs text-muted-foreground">Violation Detected: FDCPA § 1692e(8)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="inline-flex items-center rounded-full border border-transparent bg-red-100 px-2.5 py-0.5 text-xs font-semibold text-red-800">
                                        Action Needed
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Recent Activity Feed (Span 2) */}
                <div className="md:col-span-2 space-y-6">
                    <div className="rounded-xl border border-border bg-card text-card-foreground shadow-sm">
                        <div className="p-6 border-b border-border">
                            <h3 className="font-semibold leading-none tracking-tight">Recent Activity</h3>
                        </div>
                        <div className="p-6 pt-4">
                            <div className="space-y-6">
                                {/* Activity Item */}
                                <div className="flex gap-4 relative">
                                    <div className="absolute left-0 top-2 bottom-0 w-px bg-border ml-[7px]"></div>
                                    <div className="relative z-10 w-3.5 h-3.5 mt-1.5 rounded-full border-2 border-primary bg-background flex-shrink-0"></div>
                                    <div className="space-y-1 pb-1">
                                        <p className="text-sm font-medium leading-none">Violation Detected</p>
                                        <p className="text-xs text-muted-foreground">Midland Credit failed to mark account as disputed.</p>
                                        <span className="text-[10px] text-muted-foreground block pt-1">2 hours ago</span>
                                    </div>
                                </div>
                                {/* Activity Item */}
                                <div className="flex gap-4 relative">
                                    <div className="absolute left-0 top-2 bottom-0 w-px bg-border ml-[7px]"></div>
                                    <div className="relative z-10 w-3.5 h-3.5 mt-1.5 rounded-full border-2 border-muted bg-background flex-shrink-0"></div>
                                    <div className="space-y-1 pb-1">
                                        <p className="text-sm font-medium leading-none">Letter Mailed</p>
                                        <p className="text-xs text-muted-foreground">Round 1 letters sent to Equifax & TransUnion.</p>
                                        <span className="text-[10px] text-muted-foreground block pt-1">Yesterday</span>
                                    </div>
                                </div>
                                {/* Activity Item */}
                                <div className="flex gap-4 relative">
                                    <div className="relative z-10 w-3.5 h-3.5 mt-1.5 rounded-full border-2 border-muted bg-background flex-shrink-0"></div>
                                    <div className="space-y-1 pb-1">
                                        <p className="text-sm font-medium leading-none">Report Imported</p>
                                        <p className="text-xs text-muted-foreground">SmartCredit report successfully analyzed.</p>
                                        <span className="text-[10px] text-muted-foreground block pt-1">2 days ago</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Support Widget Placeholder */}
                    <div className="rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent p-6 shadow-sm">
                        <h3 className="font-semibold text-sm mb-2">Need Legal Advice?</h3>
                        <p className="text-xs text-muted-foreground mb-4">Our AI Paralegal is online and ready to answer your questions about FDCPA violations.</p>
                        <button className="w-full inline-flex items-center justify-center rounded-md border border-input bg-background/50 hover:bg-background text-xs font-medium h-8 shadow-sm transition-colors">
                            Chat Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
