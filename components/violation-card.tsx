import { AlertCircle, FileText, Gavel, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface ViolationCardProps {
    clientName: string
    violationType: string // e.g., "Saunders v. BB&T"
    statute: string
    damages: number
    evidenceStrength: 'High' | 'Medium' | 'Low'
    status: 'Detected' | 'Confirmed' | 'Litigation Ready'
    onGenerateComplaint?: () => void
}

export function ViolationCard({
    clientName,
    violationType,
    statute,
    damages,
    evidenceStrength,
    status,
    onGenerateComplaint
}: ViolationCardProps) {
    return (
        <div className="group relative rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-start justify-between">
                <div className="space-y-1">
                    <div className="flex items-center gap-2">
                        <h3 className="font-semibold leading-none tracking-tight">{clientName}</h3>
                        <span className={cn(
                            "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
                            status === 'Litigation Ready' ? "bg-green-500/10 text-green-500" : "bg-yellow-500/10 text-yellow-500"
                        )}>
                            {status}
                        </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{violationType}</p>
                    <p className="text-xs text-muted-foreground font-mono">{statute}</p>
                </div>
                <div className="text-right">
                    <div className="text-xl font-bold text-green-500">${damages.toLocaleString()}</div>
                    <p className="text-xs text-muted-foreground">Est. Damages</p>
                </div>
            </div>

            <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                    <CheckCircle className={cn(
                        "h-4 w-4",
                        evidenceStrength === 'High' ? "text-green-500" : "text-yellow-500"
                    )} />
                    <span>Evidence: <strong className="text-foreground">{evidenceStrength}</strong></span>
                </div>
                <div className="flex items-center gap-1">
                    <FileText className="h-4 w-4" />
                    <span>Docs Ready</span>
                </div>
            </div>

            <div className="mt-6 flex gap-2">
                <button
                    onClick={onGenerateComplaint}
                    className="flex-1 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
                >
                    <Gavel className="mr-2 h-4 w-4" />
                    Generate Complaint
                </button>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">
                    Review
                </button>
            </div>
        </div>
    )
}
