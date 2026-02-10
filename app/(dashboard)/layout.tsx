import { AppSidebar } from "@/components/app-sidebar"
import { LayoutDashboard, Users, FileText, Settings, CreditCard, LogOut } from "lucide-react"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex h-screen w-full bg-background">
            {/* Sidebar */}
            <AppSidebar />

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
