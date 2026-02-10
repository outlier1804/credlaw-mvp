'use client';

import { useState } from "react"
import { Scale, Users, TrendingUp, AlertCircle, Plus } from "lucide-react"
import { ViolationCard } from "@/components/violation-card"
import { MailingModal } from "@/components/mailing-modal"

export default function AttorneyDashboard() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedCase, setSelectedCase] = useState<{ client: string, violation: string } | null>(null);

    const handleGenerate = (client: string, violation: string) => {
        setSelectedCase({ client, violation });
        setModalOpen(true);
    };

    return (
        <div className="space-y-8">
            {/* Header Section */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Litigation Feed</h2>
                    <p className="text-muted-foreground">Review actionable violations and generate federal complaints.</p>
                </div>
                <div className="flex gap-2">
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                        Filter View
                    </button>
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                        <Plus className="mr-2 h-4 w-4" />
                        Buy Leads
                    </button>
                </div>
            </div>

            {/* Metrics Section */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {[
                    { title: "Litigation Ready", value: "12", icon: Scale, change: "+3 today", color: "text-blue-500" },
                    { title: "Potential Revenue", value: "$18,500", icon: TrendingUp, change: "Based on statutory damages", color: "text-green-500" },
                    { title: "Active Clients", value: "45", icon: Users, change: "8 pending intake", color: "text-indigo-500" },
                    { title: "Critical Violations", value: "8", icon: AlertCircle, change: "Requires immediate action", color: "text-red-500" },
                ].map((metric, i) => (
                    <div key={i} className="rounded-xl border border-border bg-card text-card-foreground shadow p-6">
                        <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <h3 className="tracking-tight text-sm font-medium text-muted-foreground">{metric.title}</h3>
                            <metric.icon className={`h-4 w-4 ${metric.color}`} />
                        </div>
                        <div className="pt-0">
                            <div className="text-2xl font-bold">{metric.value}</div>
                            <p className="text-xs text-muted-foreground">{metric.change}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Feed */}
            <div className="space-y-4">
                <h3 className="font-semibold text-lg tracking-tight">High Priority Violations</h3>
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    <ViolationCard
                        clientName="Sarah Jenkins"
                        violationType="Hinkle v. Midland Credit"
                        statute="15 U.S.C. § 1681i"
                        damages={1000}
                        evidenceStrength="High"
                        status="Litigation Ready"
                        onGenerateComplaint={() => handleGenerate("Sarah Jenkins", "Hinkle v. Midland Credit")}
                    />
                    <ViolationCard
                        clientName="Michael Torres"
                        violationType="Saunders v. BB&T"
                        statute="15 U.S.C. § 1681s-2(a)"
                        damages={1000}
                        evidenceStrength="High"
                        status="Litigation Ready"
                        onGenerateComplaint={() => handleGenerate("Michael Torres", "Saunders v. BB&T")}
                    />
                    <ViolationCard
                        clientName="David Chen"
                        violationType="Wrongful Repo Notice"
                        statute="UCC Article 9"
                        damages={5000}
                        evidenceStrength="Medium"
                        status="Confirmed"
                        onGenerateComplaint={() => handleGenerate("David Chen", "Wrongful Repo Notice")}
                    />
                    <ViolationCard
                        clientName="Amanda Smith"
                        violationType="Norman v. TransUnion"
                        statute="15 U.S.C. § 1681i(a)(7)"
                        damages={1000}
                        evidenceStrength="High"
                        status="Detected"
                        onGenerateComplaint={() => handleGenerate("Amanda Smith", "Norman v. TransUnion")}
                    />
                </div>
            </div>

            {/* Mailing Modal */}
            <MailingModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                clientName={selectedCase?.client || ""}
                violationType={selectedCase?.violation || ""}
            />
        </div>
    )
}
