'use client';
import {
    Users,
    CreditCard,
    Shield,
    Activity,
    Search,
    MoreHorizontal,
    LogIn,
    Ban,
    Trash2
} from "lucide-react"

export default function SuperAdminDashboard() {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold tracking-tight">System Overview</h1>
                <p className="text-muted-foreground">Master Control Panel</p>
            </div>

            {/* Global Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-muted-foreground">Total Revenue</span>
                        <CreditCard className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="text-2xl font-bold">$124,500</div>
                    <span className="text-xs text-green-500 font-medium">+18% vs last month</span>
                </div>
                <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-muted-foreground">Active Agencies</span>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="text-2xl font-bold">14</div>
                    <span className="text-xs text-muted-foreground">Managing 1,240 clients</span>
                </div>
                <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-muted-foreground">Litigation Cases</span>
                        <Shield className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="text-2xl font-bold">42</div>
                    <span className="text-xs text-muted-foreground">Total value: $1.2M</span>
                </div>
                <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-muted-foreground">System Health</span>
                        <Activity className="h-4 w-4 text-green-500" />
                    </div>
                    <div className="text-2xl font-bold text-green-500">99.9%</div>
                    <span className="text-xs text-muted-foreground">All systems operational</span>
                </div>
            </div>

            {/* Master User Table */}
            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
                <div className="p-6 border-b border-border flex justify-between items-center">
                    <div>
                        <h3 className="font-bold text-lg">Global User Management</h3>
                        <p className="text-sm text-muted-foreground">View and control all user accounts.</p>
                    </div>
                    <div className="relative w-64">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <input type="text" placeholder="Search users or agencies..." className="w-full pl-9 pr-4 py-2 text-sm bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20" />
                    </div>
                </div>
                <table className="w-full text-sm text-left">
                    <thead className="bg-muted/50 text-muted-foreground font-medium border-b border-border">
                        <tr>
                            <th className="px-6 py-4">User</th>
                            <th className="px-6 py-4">Role</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4">Subscription</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                        <tr className="hover:bg-muted/50 transition-colors">
                            <td className="px-6 py-4 font-medium">
                                <div className="flex flex-col">
                                    <span>CreditCleanup Pros</span>
                                    <span className="text-xs text-muted-foreground">agency_8123 • admin@ccpros.com</span>
                                </div>
                            </td>
                            <td className="px-6 py-4"><span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">Agency</span></td>
                            <td className="px-6 py-4"><span className="inline-flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-green-500"></span> Active</span></td>
                            <td className="px-6 py-4">$299/mo (Enterprise)</td>
                            <td className="px-6 py-4 text-right">
                                <div className="flex justify-end gap-2">
                                    <button className="text-xs bg-zinc-900 text-white px-3 py-1.5 rounded font-bold hover:bg-zinc-800 flex items-center gap-1">
                                        <LogIn className="h-3 w-3" /> Impersonate
                                    </button>
                                    <button className="text-muted-foreground hover:text-red-500 p-1.5 rounded"><Ban className="h-4 w-4" /></button>
                                </div>
                            </td>
                        </tr>
                        <tr className="hover:bg-muted/50 transition-colors">
                            <td className="px-6 py-4 font-medium">
                                <div className="flex flex-col">
                                    <span>Smith & Associates</span>
                                    <span className="text-xs text-muted-foreground">atty_9921 • legal@smithlaw.com</span>
                                </div>
                            </td>
                            <td className="px-6 py-4"><span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Attorney</span></td>
                            <td className="px-6 py-4"><span className="inline-flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-green-500"></span> Active</span></td>
                            <td className="px-6 py-4">--</td>
                            <td className="px-6 py-4 text-right">
                                <div className="flex justify-end gap-2">
                                    <button className="text-xs bg-zinc-900 text-white px-3 py-1.5 rounded font-bold hover:bg-zinc-800 flex items-center gap-1">
                                        <LogIn className="h-3 w-3" /> Impersonate
                                    </button>
                                    <button className="text-muted-foreground hover:text-red-500 p-1.5 rounded"><Ban className="h-4 w-4" /></button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* System Logs */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                <h3 className="font-bold mb-4">Recent System Activity</h3>
                <div className="space-y-4">
                    {[
                        { text: 'New Agency "Elite Credit" signed up', time: '2 mins ago', color: 'green' },
                        { text: 'System Backup completed successfully', time: '1 hour ago', color: 'blue' },
                        { text: 'Failed login attempt detected from IP 192.168.1.1', time: '3 hours ago', color: 'red' },
                    ].map((log, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm">
                            <div className={`w-2 h-2 rounded-full bg-${log.color}-500`}></div>
                            <span className="flex-1">{log.text}</span>
                            <span className="text-muted-foreground text-xs">{log.time}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
