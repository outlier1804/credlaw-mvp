'use client';

import {
    Folder,
    UploadCloud,
    FileText,
    Image as ImageIcon,
    MoreVertical,
    Search,
    Download,
    CheckCircle2
} from "lucide-react"
import { ContractAnalyzer } from "@/components/contract-analyzer";

export default function EvidenceLockerPage() {
    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Evidence Locker</h1>
                    <p className="text-muted-foreground">Securely store documents to build your case.</p>
                </div>
                <button className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground shadow transition-colors hover:bg-primary/90">
                    <UploadCloud className="mr-2 h-4 w-4" /> Upload Document
                </button>
            </div>

            {/* Folder Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* Folder 1 */}
                <div className="bg-card border border-border p-4 rounded-xl flex flex-col items-center justify-center gap-2 hover:bg-secondary/50 transition-colors cursor-pointer group">
                    <Folder className="h-10 w-10 text-blue-500 fill-blue-500/20" />
                    <span className="font-medium text-sm">Bureau Responses</span>
                    <span className="text-xs text-muted-foreground">3 Files</span>
                </div>
                {/* Folder 2 */}
                <div className="bg-card border border-border p-4 rounded-xl flex flex-col items-center justify-center gap-2 hover:bg-secondary/50 transition-colors cursor-pointer group">
                    <Folder className="h-10 w-10 text-yellow-500 fill-yellow-500/20" />
                    <span className="font-medium text-sm">Sent Letters</span>
                    <span className="text-xs text-muted-foreground">12 Files</span>
                </div>
                {/* Folder 3 */}
                <div className="bg-card border border-border p-4 rounded-xl flex flex-col items-center justify-center gap-2 hover:bg-secondary/50 transition-colors cursor-pointer group">
                    <Folder className="h-10 w-10 text-purple-500 fill-purple-500/20" />
                    <span className="font-medium text-sm">Personal ID</span>
                    <span className="text-xs text-muted-foreground">2 Files</span>
                </div>
                {/* Folder 4 */}
                <div className="bg-card border border-border p-4 rounded-xl flex flex-col items-center justify-center gap-2 hover:bg-secondary/50 transition-colors cursor-pointer group">
                    <Folder className="h-10 w-10 text-green-500 fill-green-500/20" />
                    <span className="font-medium text-sm">Legal Affidavits</span>
                    <span className="text-xs text-muted-foreground">1 File</span>
                </div>
            </div>

            {/* Recent Files Table */}
            <div className="rounded-xl border border-border bg-card">
                <div className="p-6 border-b border-border flex justify-between items-center">
                    <h3 className="font-bold">Recent Uploads</h3>
                    <div className="relative w-64">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Filter files..."
                            className="w-full rounded-md border border-input bg-background pl-9 pr-4 h-9 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                        />
                    </div>
                </div>
                <div className="p-0">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-muted/50 text-muted-foreground font-medium">
                            <tr>
                                <th className="px-6 py-3">Name</th>
                                <th className="px-6 py-3">Category</th>
                                <th className="px-6 py-3">Date Added</th>
                                <th className="px-6 py-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {/* Row 1 */}
                            <tr className="hover:bg-muted/50 transition-colors">
                                <td className="px-6 py-4 flex items-center gap-3">
                                    <div className="h-8 w-8 rounded bg-red-100 flex items-center justify-center">
                                        <FileText className="h-4 w-4 text-red-600" />
                                    </div>
                                    <span className="font-medium">Chase_Response_Letter_Feb.pdf</span>
                                </td>
                                <td className="px-6 py-4 text-muted-foreground">Bureau Response</td>
                                <td className="px-6 py-4 text-muted-foreground">Feb 10, 2026</td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-muted-foreground hover:text-primary p-2">
                                        <Download className="h-4 w-4" />
                                    </button>
                                </td>
                            </tr>
                            {/* Row 2 */}
                            <tr className="hover:bg-muted/50 transition-colors">
                                <td className="px-6 py-4 flex items-center gap-3">
                                    <div className="h-8 w-8 rounded bg-blue-100 flex items-center justify-center">
                                        <ImageIcon className="h-4 w-4 text-blue-600" />
                                    </div>
                                    <span className="font-medium">Drivers_License_Front.jpg</span>
                                </td>
                                <td className="px-6 py-4 text-muted-foreground">Personal ID</td>
                                <td className="px-6 py-4 text-muted-foreground">Jan 15, 2026</td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-muted-foreground hover:text-primary p-2">
                                        <Download className="h-4 w-4" />
                                    </button>
                                </td>
                            </tr>
                            {/* Row 3 */}
                            <tr className="hover:bg-muted/50 transition-colors">
                                <td className="px-6 py-4 flex items-center gap-3">
                                    <div className="h-8 w-8 rounded bg-gray-100 flex items-center justify-center">
                                        <FileText className="h-4 w-4 text-gray-600" />
                                    </div>
                                    <span className="font-medium">Round1_Dispute_Package_TU.pdf</span>
                                </td>
                                <td className="px-6 py-4 text-muted-foreground">Sent Letters</td>
                                <td className="px-6 py-4 text-muted-foreground">Jan 12, 2026</td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-muted-foreground hover:text-primary p-2">
                                        <Download className="h-4 w-4" />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Contract Analyzer Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h2 className="text-xl font-bold mb-4">Step 1: Upload Your Contract</h2>
                    <p className="text-muted-foreground mb-4">
                        We need to find the "Binding Arbitration" clause in your cardholder agreement. This is how we get paid.
                    </p>
                    <ContractAnalyzer />
                </div>

                {/* Drag & Drop Main Uploader */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Step 2: Upload Evidence</h2>
                    <p className="text-muted-foreground mb-4">
                        Upload denial letters, credit reports, and dispute results here.
                    </p>
                    <div className="border-2 border-dashed border-input rounded-xl p-10 flex flex-col items-center justify-center text-center hover:bg-muted/50 transition-colors h-[320px]">
                        <div className="bg-primary/10 p-4 rounded-full mb-4">
                            <UploadCloud className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Drag & Drop Files Here</h3>
                        <p className="text-muted-foreground text-sm max-w-xs mb-6">
                            Upload Denial Letters, Dispute Responses, or Credit Reports (PDF/JPG)
                        </p>
                        <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md font-bold text-sm transition-colors shadow">
                            Select Files
                        </button>
                    </div>
                </div>
            </div>

            {/* Upload Area */}
            <div className="rounded-xl border-2 border-dashed border-border p-12 text-center hover:bg-secondary/20 transition-colors cursor-pointer">
                <div className="mx-auto h-12 w-12 bg-secondary rounded-full flex items-center justify-center mb-4">
                    <UploadCloud className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold">Drag & Drop files here</h3>
                <p className="text-sm text-muted-foreground mt-1">or click to browse from your computer</p>
                <p className="text-xs text-muted-foreground mt-4">Supported: PDF, JPG, PNG (Max 10MB)</p>
            </div>
        </div>
    )
}
