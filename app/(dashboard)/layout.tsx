import Link from "next/link"
import { LayoutDashboard, Users, FileText, Settings, CreditCard, LogOut } from "lucide-react"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex h-screen w-full bg-background">
            {/* Sidebar */}
            <aside className="w-64 border-r border-border bg-card hidden md:flex flex-col">
                <div className="h-16 flex items-center px-6 border-b border-border">
                    <Link href="/" className="font-bold text-xl tracking-tight">
                        CredLaw
                    </Link>
                </div>
                <div className="flex-1 overflow-y-auto py-4">
                    <nav className="grid gap-1 px-2">
                        <Link
                            href="/admin"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-secondary"
                        >
                            <LayoutDashboard className="h-4 w-4" />
                            Admin
                        </Link>
                        <Link
                            href="/attorney"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-secondary"
                        >
                            <FileText className="h-4 w-4" />
                            Attorney
                        </Link>
                        <Link
                            href="/agency"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-secondary"
                        >
                            <Users className="h-4 w-4" />
                            Agency
                        </Link>
                        <Link
                            href="/client"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-secondary"
                        >
                            <CreditCard className="h-4 w-4" />
                            Client
                        </Link>
                        <Link
                            href="/settings"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-secondary"
                        >
                            <Settings className="h-4 w-4" />
                            Settings
                        </Link>
                    </nav>
                </div>
                <div className="p-4 border-t border-border">
                    <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-destructive hover:bg-destructive/10">
                        <LogOut className="h-4 w-4" />
                        Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex flex-col flex-1">
                <header className="h-16 border-b border-border flex items-center px-6 justify-between bg-card/50 backdrop-blur-sm">
                    <h1 className="text-lg font-medium">Dashboard</h1>
                    <div className="h-8 w-8 rounded-full bg-secondary"></div>
                </header>
                <main className="flex-1 overflow-y-auto p-6">
                    {children}
                </main>
            </div>
        </div>
    )
}
