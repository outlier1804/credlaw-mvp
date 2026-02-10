'use client';

import {
    Gavel,
    CheckCircle2,
    XCircle,
    FileText,
    DollarSign,
    Clock,
    ShieldAlert,
    MoreHorizontal
} from "lucide-react"
import Link from "next/link";

export default function AttorneyDashboardPage() {
    return (
        <div className="space-y-8 animate-in fade-in duration-500 max-w-5xl mx-auto">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Litigation Feed</h1>
                    <p className="text-muted-foreground">High-value FCRA/FDCPA cases ready for filing.</p>
                </div>
                <div className="flex gap-4 text-sm font-medium">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-green-100 text-green-700 rounded-full">
                        <DollarSign className="h-4 w-4" />
                        <span>Potential Fees: $4,500</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full">
                        <Gavel className="h-4 w-4" />
                        <span>Active Cases: 12</span>
                    </div>
                </div>
            </div>

            {/* Case Feed */}
            <div className="space-y-4">

                {/* Case Card 1 (High Priority) */}
                <div className="group bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
                    <div className="flex flex-col md:flex-row gap-6">

                        {/* Violations Summary */}
                        <div className="flex-1 space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-zinc-100 flex items-center justify-center font-bold text-zinc-900">JD</div>
                                    <div>
                                        <h3 className="font-bold text-lg">John Doe vs. Equifax</h3>
                                        <p className="text-sm text-muted-foreground">Ref: #CASE-9281 • Agency: CreditCleanup Pros</p>
                                    </div>
                                </div>
                                <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                    Litigation Ready
                                </span>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-secondary/50 p-3 rounded-lg">
                                    <span className="text-xs text-muted-foreground uppercase font-bold block mb-1">Primary Violation</span>
                                    <div className="flex items-center gap-2 font-medium text-sm">
                                        <ShieldAlert className="h-4 w-4 text-red-500" />
                                        15 U.S.C. § 1681i (Failure to Reinvestigate)
                                    </div>
                                </div>
                                <div className="bg-secondary/50 p-3 rounded-lg">
                                    <span className="text-xs text-muted-foreground uppercase font-bold block mb-1">Damages Estimate</span>
                                    <div className="flex items-center gap-2 font-medium text-sm text-green-600">
                                        <DollarSign className="h-4 w-4" />
                                        $1,000 Statutory + Fees
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-2">
                                <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Hinkle v. Midland Cited</span>
                                <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">Complete Evid. Pack</span>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col justify-center gap-3 min-w-[180px] border-l border-border pl-6">
                            <div className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
                                <Clock className="h-3 w-3" /> Expires in 24h
                            </div>
                            <Link href="/attorney/cases/9281" className="w-full inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground shadow transition-colors hover:bg-primary/90">
                                <CheckCircle2 className="mr-2 h-4 w-4" /> Accept Case
                            </Link>
                            <button className="w-full inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">
                                <XCircle className="mr-2 h-4 w-4" /> Reject
                            </button>
                        </div>
                    </div>
                </div>

                {/* Case Card 2 */}
                <div className="group bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all relative overflow-hidden opacity-90">
                    <div className="absolute top-0 left-0 w-1 h-full bg-yellow-500"></div>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1 space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-zinc-100 flex items-center justify-center font-bold text-zinc-900">SM</div>
                                    <div>
                                        <h3 className="font-bold text-lg">Sarah Miller vs. Chase Bank</h3>
                                        <p className="text-sm text-muted-foreground">Ref: #CASE-8821 • Agency: Elite Credit</p>
                                    </div>
                                </div>
                                <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                    MOV Failure
                                </span>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-secondary/50 p-3 rounded-lg">
                                    <span className="text-xs text-muted-foreground uppercase font-bold block mb-1">Primary Violation</span>
                                    <div className="flex items-center gap-2 font-medium text-sm">
                                        <ShieldAlert className="h-4 w-4 text-orange-500" />
                                        Norman v. TransUnion (MOV)
                                    </div>
                                </div>
                                <div className="bg-secondary/50 p-3 rounded-lg">
                                    <span className="text-xs text-muted-foreground uppercase font-bold block mb-1">Damages Estimate</span>
                                    <div className="flex items-center gap-2 font-medium text-sm text-green-600">
                                        <DollarSign className="h-4 w-4" />
                                        $1,000 + Punitive
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center gap-3 min-w-[180px] border-l border-border pl-6">
                            <div className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
                                <Clock className="h-3 w-3" /> Expires in 48h
                            </div>
                            <button className="w-full inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground shadow transition-colors hover:bg-primary/90">
                                <CheckCircle2 className="mr-2 h-4 w-4" /> Accept Case
                            </button>
                            <button className="w-full inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">
                                <XCircle className="mr-2 h-4 w-4" /> Reject
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
