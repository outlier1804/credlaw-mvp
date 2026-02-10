'use client';

import {
    ShieldAlert,
    DollarSign,
    FileWarning,
    ArrowUpRight,
    Scale
} from "lucide-react"

export default function ViolationVaultPage() {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <ShieldAlert className="h-6 w-6 text-destructive" />
                        <h1 className="text-3xl font-bold tracking-tight text-destructive">Violation Vault</h1>
                    </div>
                    <p className="text-muted-foreground">Identified breaches of federal law (FCRA/FDCPA). These convert to cash settlements.</p>
                </div>
                <div className="bg-card border border-border px-6 py-3 rounded-xl shadow-sm flex items-center gap-4">
                    <div className="text-right">
                        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Est. Case Value</p>
                        <p className="text-2xl font-bold text-green-600">$3,500.00</p>
                    </div>
                    <DollarSign className="h-10 w-10 text-green-500 opacity-20" />
                </div>
            </div>

            {/* Explainer Banner */}
            <div className="rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900 p-4 flex gap-4 items-start">
                <Scale className="h-5 w-5 text-blue-600 mt-1 shrink-0" />
                <div>
                    <h3 className="font-semibold text-blue-900 dark:text-blue-200 text-sm">How this works</h3>
                    <p className="text-sm text-blue-800 dark:text-blue-300 mt-1">
                        Every time a credit bureau or collector breaks a rule (like re-inserting deleted items or failing to mark an account as disputed), it's a violation.
                        Accumulate enough violations, and we can hand your case to an attorney to sue for damages ($1,000 per violation).
                    </p>
                </div>
            </div>

            {/* Violation List */}
            <div className="grid gap-4">
                {/* Violation Item 1 */}
                <div className="group rounded-xl border border-border bg-card p-6 shadow-sm hover:border-destructive/50 transition-all relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1 h-full bg-destructive/50"></div>
                    <div className="flex flex-col md:flex-row gap-6 justify-between items-start">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <span className="inline-flex items-center rounded-md bg-destructive/10 px-2 py-1 text-xs font-medium text-destructive ring-1 ring-inset ring-destructive/20">
                                    FDCPA § 1692e(8)
                                </span>
                                <span className="text-xs text-muted-foreground">Detected 2 days ago</span>
                            </div>
                            <h3 className="text-lg font-bold">Failure to Communicate Credit is Disputed</h3>
                            <p className="text-sm text-muted-foreground max-w-2xl">
                                Midland Credit Management continued to report the debt to Experian without marking it as "Ambiguous" or "Disputed" after receiving our Round 1 letter.
                            </p>
                        </div>
                        <div className="flex flex-col items-end gap-3 min-w-[140px]">
                            <span className="text-lg font-bold text-green-600 flex items-center">
                                +$1,000 <span className="text-xs text-muted-foreground font-normal ml-1">est.</span>
                            </span>
                            <button className="inline-flex items-center justify-center rounded-md bg-secondary px-4 py-2 text-xs font-medium transition-colors hover:bg-secondary/80 w-full">
                                <FileWarning className="mr-2 h-3 w-3" /> View Evidence
                            </button>
                        </div>
                    </div>
                </div>

                {/* Violation Item 2 */}
                <div className="group rounded-xl border border-border bg-card p-6 shadow-sm hover:border-destructive/50 transition-all relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1 h-full bg-destructive/50"></div>
                    <div className="flex flex-col md:flex-row gap-6 justify-between items-start">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <span className="inline-flex items-center rounded-md bg-destructive/10 px-2 py-1 text-xs font-medium text-destructive ring-1 ring-inset ring-destructive/20">
                                    FCRA § 1681i
                                </span>
                                <span className="text-xs text-muted-foreground">Detected 1 week ago</span>
                            </div>
                            <h3 className="text-lg font-bold">Failure to Conduct Reasonable Reinvestigation</h3>
                            <p className="text-sm text-muted-foreground max-w-2xl">
                                Equifax verified the "Chase Card" account comprising false late payments but failed to provide the method of verification (MOV) upon request.
                            </p>
                        </div>
                        <div className="flex flex-col items-end gap-3 min-w-[140px]">
                            <span className="text-lg font-bold text-green-600 flex items-center">
                                +$1,000 <span className="text-xs text-muted-foreground font-normal ml-1">est.</span>
                            </span>
                            <button className="inline-flex items-center justify-center rounded-md bg-secondary px-4 py-2 text-xs font-medium transition-colors hover:bg-secondary/80 w-full">
                                <FileWarning className="mr-2 h-3 w-3" /> View Evidence
                            </button>
                        </div>
                    </div>
                </div>

                {/* Violation Item 3 */}
                <div className="group rounded-xl border border-border bg-card p-6 shadow-sm hover:border-destructive/50 transition-all relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1 h-full bg-destructive/50"></div>
                    <div className="flex flex-col md:flex-row gap-6 justify-between items-start">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <span className="inline-flex items-center rounded-md bg-destructive/10 px-2 py-1 text-xs font-medium text-destructive ring-1 ring-inset ring-destructive/20">
                                    FDCPA § 1692c(c)
                                </span>
                                <span className="text-xs text-muted-foreground">Detected 2 weeks ago</span>
                            </div>
                            <h3 className="text-lg font-bold">Cease and Desist Violation</h3>
                            <p className="text-sm text-muted-foreground max-w-2xl">
                                Portfolio Recovery contacted you via phone after receiving a certified Cease and Desist letter.
                            </p>
                        </div>
                        <div className="flex flex-col items-end gap-3 min-w-[140px]">
                            <span className="text-lg font-bold text-green-600 flex items-center">
                                +$500 <span className="text-xs text-muted-foreground font-normal ml-1">est.</span>
                            </span>
                            <button className="inline-flex items-center justify-center rounded-md bg-secondary px-4 py-2 text-xs font-medium transition-colors hover:bg-secondary/80 w-full">
                                <FileWarning className="mr-2 h-3 w-3" /> Phone Log
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Action Footer */}
            <div className="rounded-xl bg-zinc-900 text-white p-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                    <h3 className="text-xl font-bold">Ready to File Suit?</h3>
                    <p className="text-zinc-400 max-w-lg mt-2">
                        You have accumulated <span className="text-white font-bold">$3,500</span> in potential damages. Our partner attorneys can review your case file for free.
                    </p>
                </div>
                <button className="inline-flex h-11 items-center justify-center rounded-md bg-white text-black px-8 text-sm font-bold shadow transition-colors hover:bg-zinc-200">
                    Submit Case to Attorney <ArrowUpRight className="ml-2 h-4 w-4" />
                </button>
            </div>
        </div>
    )
}
