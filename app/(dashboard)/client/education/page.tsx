'use client';

import {
    GraduationCap,
    BookOpen,
    CreditCard,
    TrendingUp,
    CheckCircle2,
    Lock,
    ArrowRight
} from "lucide-react"

export default function CreditBuilderPage() {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-3xl font-bold tracking-tight">Credit Builder Academy</h1>
                <p className="text-muted-foreground">Master the game of credit while we fight your battles.</p>
            </div>

            {/* "Road to 750" Tracker */}
            <div className="rounded-xl border border-border bg-gradient-to-r from-primary/10 to-transparent p-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                    <div>
                        <h3 className="text-xl font-bold flex items-center gap-2">
                            <TrendingUp className="h-5 w-5 text-primary" />
                            Road to 750 Club
                        </h3>
                        <p className="text-sm text-muted-foreground">Complete these steps to optimize your profile.</p>
                    </div>
                    <div className="text-right hidden md:block">
                        <span className="text-2xl font-bold text-primary">35%</span>
                        <span className="text-xs text-muted-foreground block">Profile Strength</span>
                    </div>
                </div>

                {/* Steps */}
                <div className="grid md:grid-cols-4 gap-4">
                    {/* Step 1: Active */}
                    <div className="bg-card border border-primary/50 p-4 rounded-lg relative overflow-hidden">
                        <div className="absolute top-2 right-2 text-primary font-bold text-xs">Step 1</div>
                        <CheckCircle2 className="h-6 w-6 text-primary mb-2" />
                        <h4 className="font-bold text-sm">Identity Audit</h4>
                        <p className="text-xs text-muted-foreground">Remove old addresses & name variations.</p>
                    </div>
                    {/* Step 2: Current */}
                    <div className="bg-card border border-primary ring-2 ring-primary/20 p-4 rounded-lg relative">
                        <div className="absolute top-2 right-2 text-primary font-bold text-xs animate-pulse">Current</div>
                        <div className="h-6 w-6 rounded-full border-2 border-primary mb-2"></div>
                        <h4 className="font-bold text-sm">Add Positive Line</h4>
                        <p className="text-xs text-muted-foreground">Open a secured card or report rent.</p>
                        <button className="mt-2 w-full text-xs bg-primary text-primary-foreground py-1 rounded">Find Offers</button>
                    </div>
                    {/* Step 3: Locked */}
                    <div className="bg-gray-100 dark:bg-zinc-800/50 border border-transparent p-4 rounded-lg relative opacity-70">
                        <Lock className="h-4 w-4 text-muted-foreground absolute top-3 right-3" />
                        <div className="h-6 w-6 rounded-full border-2 border-muted mb-2"></div>
                        <h4 className="font-bold text-sm text-muted-foreground">Utilization Hack</h4>
                        <p className="text-xs text-muted-foreground">The "AZEO" Method explained.</p>
                    </div>
                    {/* Step 4: Locked */}
                    <div className="bg-gray-100 dark:bg-zinc-800/50 border border-transparent p-4 rounded-lg relative opacity-70">
                        <Lock className="h-4 w-4 text-muted-foreground absolute top-3 right-3" />
                        <div className="h-6 w-6 rounded-full border-2 border-muted mb-2"></div>
                        <h4 className="font-bold text-sm text-muted-foreground">Limit Increase</h4>
                        <p className="text-xs text-muted-foreground">Ask for 3x increase safely.</p>
                    </div>
                </div>
            </div>

            {/* Recommended Products (Affiliate Section) */}
            <div className="grid md:grid-cols-2 gap-6">
                {/* Product 1 */}
                <div className="group rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-start gap-4">
                        <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <CreditCard className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg">Report Your Rent</h4>
                            <p className="text-sm text-muted-foreground mb-4">Add up to 2 years of rental history to your report instantly. Avg +30 pts.</p>
                            <button className="inline-flex items-center text-sm font-semibold text-primary hover:underline">
                                Check Eligibility <ArrowRight className="ml-1 h-3 w-3" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Product 2 */}
                <div className="group rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-start gap-4">
                        <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                            <CreditCard className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg">Self Lender</h4>
                            <p className="text-sm text-muted-foreground mb-4">Build credit while saving money. No hard pull. Terms apply.</p>
                            <button className="inline-flex items-center text-sm font-semibold text-primary hover:underline">
                                View Offer <ArrowRight className="ml-1 h-3 w-3" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Educational Articles */}
            <div>
                <h3 className="text-xl font-bold tracking-tight mb-4">Latest Strategies</h3>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="rounded-lg border border-border overflow-hidden">
                        <div className="h-32 bg-secondary flex items-center justify-center">
                            <BookOpen className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <div className="p-4">
                            <h4 className="font-bold text-sm mb-1">How to Freeze Your Secondary Reports</h4>
                            <p className="text-xs text-muted-foreground">Stop LN, SageStream, and Innovis from sharing your data.</p>
                        </div>
                    </div>

                    <div className="rounded-lg border border-border overflow-hidden">
                        <div className="h-32 bg-secondary flex items-center justify-center">
                            <GraduationCap className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <div className="p-4">
                            <h4 className="font-bold text-sm mb-1">609 Letters vs Factual Disputes</h4>
                            <p className="text-xs text-muted-foreground">Why template letters fail and what works in 2026.</p>
                        </div>
                    </div>

                    <div className="rounded-lg border border-border overflow-hidden">
                        <div className="h-32 bg-secondary flex items-center justify-center">
                            <TrendingUp className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <div className="p-4">
                            <h4 className="font-bold text-sm mb-1">Understanding "Date of Last Activity"</h4>
                            <p className="text-xs text-muted-foreground">When items naturally fall off and how not to reset the clock.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
