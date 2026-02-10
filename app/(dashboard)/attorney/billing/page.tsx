'use client';
import {
    CreditCard,
    Landmark,
    Wallet,
    ArrowUpRight,
    Settings,
    CheckCircle2,
    AlertCircle,
    Copy,
    DollarSign
} from "lucide-react"

export default function AttorneyBillingPage() {
    return (
        <div className="space-y-8 animate-in fade-in duration-500 max-w-4xl mx-auto pb-10">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Financials & Settings</h1>
                <p className="text-muted-foreground">Manage your payouts and firm profile.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Revenue Card */}
                <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-medium text-muted-foreground">Total Payouts</h3>
                        <Wallet className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="text-3xl font-bold mb-1">$42,500.00</div>
                    <div className="flex items-center text-xs text-green-600 gap-1 font-medium bg-green-100 w-fit px-2 py-0.5 rounded-full">
                        <ArrowUpRight className="h-3 w-3" />
                        +12% this month
                    </div>
                </div>

                {/* Pending Card */}
                <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-medium text-muted-foreground">Pending Settlements</h3>
                        <ClockIcon className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="text-3xl font-bold mb-1">$8,250.00</div>
                    <p className="text-xs text-muted-foreground">Estimated clearance: 3-5 days</p>
                </div>

                {/* Stripe Status Card */}
                <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white rounded-xl p-6 shadow-md relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-4 opacity-90">
                            <Landmark className="h-4 w-4" />
                            <h3 className="text-sm font-bold uppercase tracking-wider">Stripe Connect</h3>
                        </div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="bg-white/20 p-1.5 rounded-full">
                                <CheckCircle2 className="h-5 w-5 text-white" />
                            </div>
                            <span className="font-bold text-lg">Payouts Active</span>
                        </div>
                        <button className="w-full bg-white text-indigo-700 py-2 rounded font-bold text-sm hover:bg-indigo-50 transition-colors shadow">
                            Manage Express Dashboard
                        </button>
                    </div>
                </div>
            </div>

            {/* Settlement Calculator */}
            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
                <div className="p-6 border-b border-border bg-muted/30">
                    <h3 className="font-bold flex items-center gap-2">
                        <DollarSign className="h-4 w-4" /> Settlement Split Calculator
                    </h3>
                    <p className="text-sm text-muted-foreground">Quickly verify fee distribution before accepting an offer.</p>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <div>
                            <label className="text-sm font-medium block mb-1.5">Gross Settlement Amount</label>
                            <div className="relative">
                                <span className="absolute left-3 top-2.5 text-muted-foreground">$</span>
                                <input type="number" defaultValue="3000" className="flex h-10 w-full rounded-md border border-input bg-background pl-8 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
                            </div>
                        </div>
                        <div className="p-3 bg-blue-50 text-blue-800 text-sm rounded border border-blue-100 flex gap-2">
                            <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                            <span>Standard CredLaw fee structure applied: 40% Attorney, 40% Client, 20% Platform Success Fee.</span>
                        </div>
                    </div>

                    <div className="space-y-3 bg-secondary/50 p-4 rounded-lg">
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-muted-foreground">Attorney Net (40%)</span>
                            <span className="font-bold font-mono">$1,200.00</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-muted-foreground">Client Net (40%)</span>
                            <span className="font-bold font-mono">$1,200.00</span>
                        </div>
                        <div className="flex justify-between items-center text-sm pt-2 border-t border-border/50">
                            <span className="text-muted-foreground font-medium">Platform Fee (20%)</span>
                            <span className="font-bold font-mono text-muted-foreground">$600.00</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Profile Settings */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                <h3 className="font-bold flex items-center gap-2 mb-6">
                    <Settings className="h-4 w-4" /> Firm Profile
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-1">
                        <label className="text-sm font-medium">Firm Name</label>
                        <input defaultValue="Smith & Associates, PLLC" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
                    </div>
                    <div className="space-y-1">
                        <label className="text-sm font-medium">Bar Number (State)</label>
                        <input defaultValue="FL-982121" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
                    </div>
                    <div className="space-y-1 md:col-span-2">
                        <label className="text-sm font-medium">Escrow Account (Last 4)</label>
                        <div className="flex items-center gap-2">
                            <input defaultValue="**** 4291" disabled className="flex h-10 w-full rounded-md border border-input bg-secondary px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
                            <button className="bg-secondary hover:bg-secondary/80 p-2.5 rounded border border-input transition-colors">
                                <Copy className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex justify-end">
                    <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md font-bold text-sm transition-colors shadow">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    )
}

function ClockIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
        </svg>
    )
}
