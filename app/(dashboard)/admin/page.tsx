'use client';

import { DollarSign, Users, Activity, Gavel, ArrowUpRight, CheckCircle, AlertTriangle, Server } from "lucide-react"

export default function AdminDashboard() {
    return (
        <div className="space-y-8">
            {/* Platform Owner Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Super Admin</h2>
                    <p className="text-muted-foreground">Platform overview, revenue metrics, and system health.</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 text-green-500 rounded-full text-xs font-medium">
                        <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
                        System Operational
                    </div>
                </div>
            </div>

            {/* Revenue & Growth Metrics */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                    <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <h3 className="tracking-tight text-sm font-medium text-muted-foreground">Monthly Revenue (MRR)</h3>
                        <DollarSign className="h-4 w-4 text-green-500" />
                    </div>
                    <div className="pt-0">
                        <div className="text-2xl font-bold">$24,500</div>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                            <span className="text-green-500 flex items-center"><ArrowUpRight className="h-3 w-3" /> +12%</span> from last month
                        </p>
                    </div>
                </div>
                <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                    <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <h3 className="tracking-tight text-sm font-medium text-muted-foreground">Active Subscriptions</h3>
                        <Users className="h-4 w-4 text-blue-500" />
                    </div>
                    <div className="pt-0">
                        <div className="text-2xl font-bold">142</div>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                            <span className="text-green-500 flex items-center"><ArrowUpRight className="h-3 w-3" /> +8</span> new this week
                        </p>
                    </div>
                </div>
                <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                    <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <h3 className="tracking-tight text-sm font-medium text-muted-foreground">Violations Processed</h3>
                        <Gavel className="h-4 w-4 text-purple-500" />
                    </div>
                    <div className="pt-0">
                        <div className="text-2xl font-bold">1,893</div>
                        <p className="text-xs text-muted-foreground">Across all agencies</p>
                    </div>
                </div>
                <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                    <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <h3 className="tracking-tight text-sm font-medium text-muted-foreground">API Usage</h3>
                        <Activity className="h-4 w-4 text-orange-500" />
                    </div>
                    <div className="pt-0">
                        <div className="text-2xl font-bold">84%</div>
                        <p className="text-xs text-muted-foreground">Quota usage (OpenAI)</p>
                    </div>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                {/* Recent Signups / Activity */}
                <div className="col-span-4 rounded-xl border border-border bg-card shadow-sm">
                    <div className="p-6 border-b border-border">
                        <h3 className="font-semibold text-lg">Recent Signups</h3>
                        <p className="text-sm text-muted-foreground">New Attorneys and Agencies joining the platform.</p>
                    </div>
                    <div className="p-0">
                        <table className="w-full text-sm">
                            <thead className="bg-secondary/50 border-b border-border">
                                <tr>
                                    <th className="h-10 px-4 text-left font-medium text-muted-foreground">User</th>
                                    <th className="h-10 px-4 text-left font-medium text-muted-foreground">Role</th>
                                    <th className="h-10 px-4 text-left font-medium text-muted-foreground">Plan</th>
                                    <th className="h-10 px-4 text-right font-medium text-muted-foreground">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                <tr>
                                    <td className="p-4 font-medium">Lakeside Legal Group</td>
                                    <td className="p-4 text-muted-foreground">Attorney</td>
                                    <td className="p-4">Pro ($299/mo)</td>
                                    <td className="p-4 text-right"><span className="text-green-500 text-xs font-medium bg-green-500/10 px-2 py-1 rounded-full">Active</span></td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-medium">Credit Fix Miami</td>
                                    <td className="p-4 text-muted-foreground">Agency</td>
                                    <td className="p-4">Enterprise</td>
                                    <td className="p-4 text-right"><span className="text-green-500 text-xs font-medium bg-green-500/10 px-2 py-1 rounded-full">Active</span></td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-medium">John Doe Law</td>
                                    <td className="p-4 text-muted-foreground">Attorney</td>
                                    <td className="p-4">Starter</td>
                                    <td className="p-4 text-right"><span className="text-yellow-500 text-xs font-medium bg-yellow-500/10 px-2 py-1 rounded-full">Onboarding</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* System Health / Status */}
                <div className="col-span-3 rounded-xl border border-border bg-card shadow-sm">
                    <div className="p-6 border-b border-border">
                        <h3 className="font-semibold text-lg flex items-center gap-2">
                            <Server className="h-5 w-5" />
                            System Status
                        </h3>
                    </div>
                    <div className="p-6 space-y-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-green-500" />
                                <span className="font-medium">Database (Supabase)</span>
                            </div>
                            <span className="text-xs text-muted-foreground">98ms latency</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-green-500" />
                                <span className="font-medium">AI Engine (OpenAI)</span>
                            </div>
                            <span className="text-xs text-muted-foreground">Operational</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-yellow-500" />
                                <span className="font-medium">Mailing (PostGrid)</span>
                            </div>
                            <span className="text-xs text-yellow-500">Degraded Performance</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-green-500" />
                                <span className="font-medium">e-Sign (DocuSign)</span>
                            </div>
                            <span className="text-xs text-muted-foreground">Operational</span>
                        </div>

                        <div className="mt-6 pt-6 border-t border-border">
                            <h4 className="font-medium text-sm mb-3">Quick Actions</h4>
                            <div className="grid grid-cols-2 gap-2">
                                <button className="text-xs border border-border rounded-md py-2 hover:bg-accent">View Logs</button>
                                <button className="text-xs border border-border rounded-md py-2 hover:bg-accent">Manage API Keys</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
