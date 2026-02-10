'use client';

import { useState } from 'react';
import {
    ArrowLeft,
    FileText,
    Download,
    Printer,
    Clock,
    Gavel,
    ShieldAlert,
    CheckCircle2,
    MessageSquare,
    Send
} from "lucide-react"
import Link from "next/link";
import { LEGAL_TEMPLATES } from "@/lib/templates";

// Define Types (Simulated)
interface Correspondence {
    id: string;
    type: string;
    date: string;
    status: 'Drafted' | 'Mailed' | 'Delivered' | 'In Progress';
}

export default function CaseFilePage({ params }: { params: { id: string } }) {
    const [isGenerating, setIsGenerating] = useState(false);
    const [correspondenceLog, setCorrespondenceLog] = useState<Correspondence[]>([
        { id: '1', type: 'Demand Letter - Equifax', date: '2025-10-14', status: 'Delivered' },
        { id: '2', type: 'Method of Verification Request', date: '2025-11-02', status: 'Mailed' },
    ]);
    const [previewContent, setPreviewContent] = useState<string | null>(null);

    // AI Generator Simulation
    const handleGenerateComplaint = () => {
        setIsGenerating(true);
        // Simulate API delay
        setTimeout(() => {
            const draft = `
IN THE UNITED STATES DISTRICT COURT
FOR THE MIDDLE DISTRICT OF FLORIDA

JOHN DOE,
        Plaintiff,

v. 

EQUIFAX INFORMATION SERVICES, LLC,
        Defendant.

Case No.: 25-cv-XXXX
JURY TRIAL DEMANDED

COMPLAINT FOR DAMAGES

COMES NOW the Plaintiff, JOHN DOE, by and through undersigned counsel, and sues EQUIFAX INFORMATION SERVICES, LLC ("Defendant"), and alleges as follows:

INTRODUCTION
1. This is an action for actual and statutory damages brought by Plaintiff for the Defendant's violations of the Fair Credit Reporting Act ("FCRA"), 15 U.S.C. § 1681 et seq.

STATEMENT OF FACTS
2. On or about October 14, 2025, Plaintiff submitted a dispute to Defendant regarding an inaccurate tradeline...
3. Defendant responded on November 15, 2025, claiming the account was "Verified."
4. However, Defendant failed to review the underlying original instrument of indebtedness, in violation of Hinkle v. Midland Credit Management. 

COUNT I
VIOLATION OF 15 U.S.C. § 1681i
(Failure to Conduct Upon Reasonable Investigation)

${LEGAL_TEMPLATES.hinkle_violation}

WHEREFORE, Plaintiff demands judgment for actual damages, statutory damages, punitive damages, and attorney's fees.
            `;
            setPreviewContent(draft);
            setIsGenerating(false);
            // Add to log
            setCorrespondenceLog(prev => [{
                id: Math.random().toString(),
                type: 'Federal Complaint Draft',
                date: new Date().toISOString().split('T')[0],
                status: 'Drafted'
            }, ...prev]);
        }, 2000);
    };

    return (
        <div className="space-y-6 animate-in fade-in duration-500 max-w-6xl mx-auto pb-10">
            {/* Back Nav */}
            <Link href="/attorney" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Feed
            </Link>

            {/* Case Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-border pb-6">
                <div>
                    <div className="flex items-center gap-3 mb-1">
                        <h1 className="text-3xl font-bold tracking-tight">John Doe vs. Equifax</h1>
                        <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                            Litigation Ready
                        </span>
                    </div>
                    <p className="text-muted-foreground flex items-center gap-2">
                        <ShieldAlert className="h-4 w-4 text-red-500" />
                        Ref: #CASE-9281 • Violation: 15 U.S.C. § 1681i (Failure to Reinvestigate)
                    </p>
                </div>
                <div className="flex gap-2">
                    <button className="inline-flex items-center justify-center rounded-md border border-input bg-background/50 hover:bg-background px-4 py-2 text-sm font-medium transition-colors">
                        <MessageSquare className="mr-2 h-4 w-4" /> Message Client
                    </button>
                    <button className="inline-flex items-center justify-center rounded-md bg-zinc-900 text-white hover:bg-zinc-800 px-4 py-2 text-sm font-bold transition-colors shadow">
                        <CheckCircle2 className="mr-2 h-4 w-4" /> Mark as Filed
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Left Column: AI Paralegal & Evidence */}
                <div className="lg:col-span-2 space-y-6">

                    {/* AI Paralegal Card */}
                    <div className="bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 rounded-xl p-6 shadow-sm">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="bg-indigo-600 text-white p-2 rounded-lg">
                                <Gavel className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-indigo-950">AI Paralegal</h3>
                                <p className="text-xs text-indigo-700 font-medium">Auto-Drafting Engine</p>
                            </div>
                        </div>

                        <p className="text-sm text-muted-foreground mb-6">
                            Based on the evidence attached, I have identified a valid **Hinkle v. Midland** violation. I can draft the initial Federal Complaint instantly.
                        </p>

                        <div className="flex gap-3">
                            <button
                                onClick={handleGenerateComplaint}
                                disabled={isGenerating}
                                className="flex-1 inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-indigo-700 disabled:opacity-50"
                            >
                                {isGenerating ? (
                                    <>Processing Legal Logic...</>
                                ) : (
                                    <><FileText className="mr-2 h-4 w-4" /> Generate Federal Complaint</>
                                )}
                            </button>
                            <button className="flex-1 inline-flex items-center justify-center rounded-lg border border-indigo-200 bg-white px-4 py-3 text-sm font-bold text-indigo-700 shadow-sm transition-all hover:bg-indigo-50">
                                <Download className="mr-2 h-4 w-4" /> Discovery Request (ACDV)
                            </button>
                        </div>
                    </div>

                    {/* Evidence Docket */}
                    <div className="bg-card border border-border rounded-xl shadow-sm">
                        <div className="px-6 py-4 border-b border-border bg-muted/30">
                            <h3 className="font-bold text-sm">Evidence Docket</h3>
                        </div>
                        <div className="divide-y divide-border">
                            {[
                                { name: 'Use_Agreement_Arbitration.pdf', type: 'Contract', date: '2025-01-10' },
                                { name: 'Dispute_Letter_Round1.pdf', type: 'Correspondence', date: '2025-10-14' },
                                { name: 'Equifax_Response_Verified.pdf', type: 'CRA Response', date: '2025-11-15', tag: 'Sham Verification' },
                                { name: 'MOV_Request.pdf', type: 'Correspondence', date: '2025-11-16' },
                            ].map((file) => (
                                <div key={file.name} className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors group cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-secondary p-2 rounded">
                                            <FileText className="h-4 w-4 text-muted-foreground" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium">{file.name}</p>
                                            <p className="text-xs text-muted-foreground">{file.type} • {file.date}</p>
                                        </div>
                                    </div>
                                    {file.tag && (
                                        <span className="text-[10px] font-bold bg-red-100 text-red-700 px-2 py-1 rounded border border-red-200">
                                            {file.tag}
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column: Correspondence Log */}
                <div className="space-y-6">
                    <div className="bg-card border border-border rounded-xl shadow-sm h-full">
                        <div className="px-6 py-4 border-b border-border bg-muted/30 flex justify-between items-center">
                            <h3 className="font-bold text-sm">Correspondence Log</h3>
                            <span className="text-xs bg-muted px-2 py-1 rounded border border-border">Auto-Tracked</span>
                        </div>
                        <div className="p-4 space-y-6 relative">
                            {/* Vertical Line */}
                            <div className="absolute left-8 top-6 bottom-6 w-0.5 bg-border"></div>

                            {correspondenceLog.map((log, i) => (
                                <div key={log.id} className="relative flex gap-4 items-start">
                                    <div className={`relative z-10 w-8 h-8 rounded-full border-2 flex items-center justify-center bg-card ${log.status === 'Delivered' ? 'border-green-500 text-green-600' :
                                            log.status === 'Mailed' ? 'border-blue-500 text-blue-600' :
                                                'border-zinc-300 text-zinc-400'
                                        }`}>
                                        {log.status === 'Delivered' ? <CheckCircle2 className="h-4 w-4" /> :
                                            log.status === 'Mailed' ? <Send className="h-4 w-4" /> :
                                                <FileText className="h-4 w-4" />}
                                    </div>
                                    <div className="flex-1 pt-1">
                                        <div className="flex justify-between items-start">
                                            <p className="text-sm font-bold">{log.type}</p>
                                            <span className="text-[10px] text-muted-foreground">{log.date}</span>
                                        </div>
                                        <p className="text-xs text-muted-foreground mt-0.5">Status: <span className="font-medium text-foreground">{log.status}</span></p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            {/* Document Preview Modal */}
            {previewContent && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white text-black w-full max-w-3xl rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200">
                        <div className="flex justify-between items-center p-4 border-b bg-gray-50">
                            <div className="flex items-center gap-2">
                                <FileText className="h-5 w-5 text-indigo-600" />
                                <span className="font-bold text-lg">Detailed Complaint Preview</span>
                            </div>
                            <button onClick={() => setPreviewContent(null)} className="hover:bg-gray-200 p-2 rounded-full transition-colors">
                                <span className="sr-only">Close</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x h-5 w-5"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                            </button>
                        </div>
                        <div className="flex-1 overflow-y-auto p-10 font-serif text-sm leading-relaxed whitespace-pre-wrap bg-white">
                            {previewContent}
                        </div>
                        <div className="p-4 border-t bg-gray-50 flex justify-end gap-2">
                            <button onClick={() => setPreviewContent(null)} className="px-4 py-2 text-sm font-medium hover:bg-gray-200 rounded-md transition-colors">
                                Cancel
                            </button>
                            <button className="flex items-center gap-2 px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 font-bold text-sm shadow-md transition-all">
                                <Printer className="h-4 w-4" /> Print & File
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
