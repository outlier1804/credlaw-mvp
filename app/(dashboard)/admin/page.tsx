import { Users, DollarSign, Activity, FileText } from "lucide-react"

export default function AdminDashboard() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">Admin Overview</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {/* Metric Cards */}
                {[
                    { title: "Total Revenue", value: "$45,231.89", icon: DollarSign, change: "+20.1% from last month" },
                    { title: "Active Attorneys", value: "+2350", icon: Users, change: "+180.1% from last month" },
                    { title: "Active Cases", value: "+12,234", icon: FileText, change: "+19% from last month" },
                    { title: "Active Now", value: "+573", icon: Activity, change: "+201 since last hour" },
                ].map((metric, i) => (
                    <div key={i} className="rounded-xl border border-border bg-card text-card-foreground shadow p-6">
                        <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <h3 className="tracking-tight text-sm font-medium text-muted-foreground">{metric.title}</h3>
                            <metric.icon className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div className="pt-0">
                            <div className="text-2xl font-bold">{metric.value}</div>
                            <p className="text-xs text-muted-foreground">{metric.change}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <div className="col-span-4 rounded-xl border border-border bg-card text-card-foreground shadow">
                    <div className="p-6">
                        <h3 className="font-semibold leading-none tracking-tight">Recent Activity</h3>
                    </div>
                    <div className="p-6 pt-0">
                        <div className="h-[200px] flex items-center justify-center text-muted-foreground border-2 border-dashed border-border rounded-md">
                            Chart Placeholder
                        </div>
                    </div>
                </div>
                <div className="col-span-3 rounded-xl border border-border bg-card text-card-foreground shadow">
                    <div className="p-6">
                        <h3 className="font-semibold leading-none tracking-tight">Recent Signups</h3>
                    </div>
                    <div className="p-6 pt-0">
                        <div className="space-y-8">
                            {[1, 2, 3, 4, 5].map((_, i) => (
                                <div key={i} className="flex items-center">
                                    <div className="h-9 w-9 rounded-full bg-secondary flex items-center justify-center text-xs font-bold">
                                        JD
                                    </div>
                                    <div className="ml-4 space-y-1">
                                        <p className="text-sm font-medium leading-none">John Doe</p>
                                        <p className="text-sm text-muted-foreground">john.doe@example.com</p>
                                    </div>
                                    <div className="ml-auto font-medium text-sm text-primary">+$1,999.00</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
