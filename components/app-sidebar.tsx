'use client';

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    LayoutDashboard,
    Users,
    FileText,
    Settings,
    CreditCard,
    LogOut,
    Shield,
    Gavel,
    Briefcase,
    Home,
    AppWindow,
    ShieldAlert,
    FolderOpen,
    GraduationCap,
    MessageSquare,
    Phone
} from "lucide-react"
import { cn } from "@/lib/utils"

export function AppSidebar() {
    const pathname = usePathname();

    // Determine Role based on URL segment
    const isClient = pathname?.startsWith('/client');
    const isAgency = pathname?.startsWith('/agency');
    const isAttorney = pathname?.startsWith('/attorney');
    const isAdmin = pathname?.startsWith('/admin');

    // Define menus
    const adminMenu = [
        { href: '/admin', label: 'Overview', icon: LayoutDashboard },
        { href: '/admin/users', label: 'User Management', icon: Users },
        { href: '/admin/billing', label: 'Platform Revenue', icon: CreditCard },
        { href: '/admin/settings', label: 'System Settings', icon: Settings },
    ];

    const agencyMenu = [
        { href: '/agency', label: 'Agency Status', icon: LayoutDashboard },
        { href: '/agency/clients', label: 'Client CRM', icon: Users },
        { href: '/agency/attorneys', label: 'Attorney Network', icon: Gavel },
        { href: '/agency/settings', label: 'Agent Customizer', icon: Settings },
        { href: '/agency/messages', label: 'Case Chat', icon: MessageSquare },
    ];

    const attorneyMenu = [
        { href: '/attorney', label: 'Litigation Feed', icon: Gavel },
        { href: '/attorney/cases', label: 'Case Files', icon: Briefcase },
        { href: '/attorney/billing', label: 'Settlements', icon: CreditCard },
        { href: '/attorney/messages', label: 'Case Chat', icon: MessageSquare },
    ];

    const clientMenu = [
        { href: '/client', label: 'Command Center', icon: AppWindow }, // New Home
        { href: '/client/disputes', label: 'Dispute Center', icon: Gavel },
        { href: '/client/violations', label: 'Violation Vault', icon: ShieldAlert },
        { href: '/client/documents', label: 'Evidence Locker', icon: FolderOpen },
        { href: '/client/education', label: 'Credit Builder', icon: GraduationCap },
        { href: '/client/messages', label: 'Case Chat', icon: MessageSquare },
        { href: '/client/calls', label: 'Predator Call Trap', icon: Phone },
    ];

    let currentMenu = clientMenu; // Default fallback
    let roleLabel = "Client Portal";

    if (isAdmin) {
        currentMenu = adminMenu;
        roleLabel = "Super Admin";
    } else if (isAgency) {
        currentMenu = agencyMenu;
        roleLabel = "Agency Dashboard";
    } else if (isAttorney) {
        currentMenu = attorneyMenu;
        roleLabel = "Attorney Portal";
    }

    return (
        <aside className="w-64 border-r border-border bg-card hidden md:flex flex-col h-full">
            <div className="h-16 flex items-center px-6 border-b border-border">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
                    <Shield className="h-6 w-6 text-primary" />
                    <span>CredLaw</span>
                </Link>
            </div>

            <div className="px-6 py-4">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    {roleLabel}
                </div>
                <nav className="grid gap-1">
                    {currentMenu.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all",
                                pathname === item.href
                                    ? "bg-primary/10 text-primary"
                                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                            )}
                        >
                            <item.icon className="h-4 w-4" />
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Admin "God Mode" Switcher (Only visible to Admin for Demo) */}
            {isAdmin && (
                <div className="px-6 py-4 mt-auto border-t border-border">
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                        Quick Switch (Admin)
                    </div>
                    <nav className="grid gap-1">
                        <Link href="/agency" className="text-xs text-muted-foreground hover:text-primary flex items-center gap-2"><ArrowRightIcon className="h-3 w-3" /> View as Agency</Link>
                        <Link href="/attorney" className="text-xs text-muted-foreground hover:text-primary flex items-center gap-2"><ArrowRightIcon className="h-3 w-3" /> View as Attorney</Link>
                        <Link href="/client" className="text-xs text-muted-foreground hover:text-primary flex items-center gap-2"><ArrowRightIcon className="h-3 w-3" /> View as Client</Link>
                    </nav>
                </div>
            )}

            <div className="p-4 border-t border-border mt-auto">
                <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-all hover:text-destructive hover:bg-destructive/10">
                    <LogOut className="h-4 w-4" />
                    Sign Out
                </button>
            </div>
        </aside>
    )
}

function ArrowRightIcon(props: any) {
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
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    )
}
