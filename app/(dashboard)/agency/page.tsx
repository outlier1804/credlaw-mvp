'use client';

import { Users, FileText, ArrowRight, Upload } from "lucide-react"
import { AgentCustomizer } from "@/components/agent-customizer"

export default function AgencyDashboard() {
    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Agency CRM</h2>
                    <p className="text-muted-foreground">Manage clients and push violations to litigation.</p>
                </div>
                <div className="flex gap-2">
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                        <Upload className="mr-2 h-4 w-4" />
                        Bulk Import CSV
                    </button>
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                        <Users className="mr-2 h-4 w-4" />
                        Add Client
                    </button>
                </div>
            </div>

            {/* Client CRM Table */}
            <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead className="bg-secondary/50 border-b border-border">
                            <tr>
                                <th className="h-12 px-4 text-left font-medium text-muted-foreground">Client Name</th>
                                <th className="h-12 px-4 text-left font-medium text-muted-foreground">Status</th>
                                <th className="h-12 px-4 text-left font-medium text-muted-foreground">Disputes</th>
                                <th className="h-12 px-4 text-left font-medium text-muted-foreground">Violations Detected</th>
                                <th className="h-12 px-4 text-right font-medium text-muted-foreground">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {/* Row 1 */}
                            <tr className="hover:bg-muted/50 transition-colors">
                                <td className="p-4 font-medium">Sarah Jenkins</td>
                                <td className="p-4">
                                    <span className="inline-flex items-center rounded-full bg-blue-500/10 px-2.5 py-0.5 text-xs font-medium text-blue-500">
                                        MOV Request Sent
                                    </span>
                                </td>
                                <td className="p-4 text-muted-foreground">Round 2</td>
                                <td className="p-4">
                                    <span className="font-bold text-foreground">3</span> <span className="text-muted-foreground text-xs">(Hinkle, Norman)</span>
                                </td>
                                <td className="p-4 text-right">
                                    <button
                                        onClick={() => alert("Pushing Sarah Jenkins to Attorney Feed...")}
                                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-xs font-medium bg-primary/10 text-primary hover:bg-primary/20 h-8 px-3"
                                    >
                                        Push to Attorney
                                        <ArrowRight className="ml-1 h-3 w-3" />
                                    </button>
                                </td>
                            </tr>

                            {/* Row 2 */}
                            <tr className="hover:bg-muted/50 transition-colors">
                                <td className="p-4 font-medium">Michael Torres</td>
                                <td className="p-4">
                                    <span className="inline-flex items-center rounded-full bg-yellow-500/10 px-2.5 py-0.5 text-xs font-medium text-yellow-500">
                                        Attorney Review
                                    </span>
                                </td>
                                <td className="p-4 text-muted-foreground">Litigation Prep</td>
                                <td className="p-4">
                                    <span className="font-bold text-foreground">1</span> <span className="text-muted-foreground text-xs">(Saunders)</span>
                                </td>
                                <td className="p-4 text-right">
                                    <span className="text-xs text-muted-foreground italic">Sent to Attorney</span>
                                </td>
                            </tr>

                            {/* Row 3 */}
                            <tr className="hover:bg-muted/50 transition-colors">
                                <td className="p-4 font-medium">David Chen</td>
                                <td className="p-4">
                                    <span className="inline-flex items-center rounded-full bg-green-500/10 px-2.5 py-0.5 text-xs font-medium text-green-500">
                                        Dispute Round 1
                                    </span>
                                </td>
                                <td className="p-4 text-muted-foreground">Awaiting Response</td>
                                <td className="p-4">
                                    <span className="font-bold text-foreground">0</span>
                                </td>
                                <td className="p-4 text-right">
                                    <button className="text-muted-foreground hover:text-foreground text-xs underline">
                                        View Details
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Agent Customization Section */}
            <AgentCustomizer />
        </div>
    )
}
