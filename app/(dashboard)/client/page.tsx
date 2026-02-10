'use client';

import { useState } from 'react';
import { Upload, Mic, FileText, Shield, AlertTriangle, CheckCircle, Scale } from "lucide-react"
import { SupportAgentWidget } from "@/components/support-agent-widget"
import { FileUploader } from "@/components/file-uploader"
import { DisputeTimeline, DisputeStep } from "@/components/dispute-timeline"
import { analyzeResponseLetter, AnalyzerResult } from "@/lib/response-analyzer"
import { OnboardingAgreement } from "@/components/onboarding-agreement"

export default function ClientDashboard() {
    const [isOnboarding, setIsOnboarding] = useState(true); // Default to true for demo
    const [currentStep, setCurrentStep] = useState<DisputeStep>('WAITING_RESPONSE');
    const [analysisResult, setAnalysisResult] = useState<AnalyzerResult | null>(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);

    // Mock Actions
    const handleSignLetters = () => {
        alert("Redirecting to DocuSign... (Mock)");
        setCurrentStep('MAILED');
    };

    const handleResponseUpload = async (fileName: string) => {
        setCurrentStep('RESPONSE_RECEIVED');
        setIsAnalyzing(true);

        // Simulate reading the file text (e.g., "The item was verified")
        const mockPdfText = "Dear Consumer, we have investigated your dispute. The item remains... verified as accurate.";

        const result = await analyzeResponseLetter(mockPdfText);
        setAnalysisResult(result);
        setIsAnalyzing(false);
        setCurrentStep('NEXT_STEPS');
    };

    if (isOnboarding) {
        return (
            <OnboardingAgreement
                agencyName="Premier Credit Agency"
                clientName="John Doe"
                onAgree={() => setIsOnboarding(false)}
            />
        );
    }

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Client Portal</h2>
                    <p className="text-muted-foreground">Track your repair progress and upload evidence.</p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-500 rounded-full border border-green-500/20">
                    <Shield className="h-4 w-4" />
                    <span className="font-medium text-sm">Credit Protection Active</span>
                </div>
            </div>

            {/* Dispute Timeline Component */}
            <DisputeTimeline
                currentStep={currentStep}
                daysRemaining={12} // Example: 12 days left in waiting period
                onSignLetters={handleSignLetters}
                onUploadResponse={() => document.getElementById('response-upload-trigger')?.click()}
            />

            {/* AI Analysis Result (Visible only after upload) */}
            {currentStep === 'NEXT_STEPS' && analysisResult && (
                <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 animate-in fade-in slide-in-from-top-4">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-full">
                            <CheckCircle className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">AI Analysis Complete</h3>
                            <p className="text-sm text-muted-foreground mt-1">Here is what we found in the response letter:</p>

                            <div className="mt-4 grid gap-4 md:grid-cols-2">
                                <div className="bg-background p-4 rounded-lg border border-border">
                                    <span className="text-xs font-semibold uppercase text-muted-foreground">Findings</span>
                                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                                        {analysisResult.findings.map((f, i) => (
                                            <li key={i}>{f}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-background p-4 rounded-lg border border-border">
                                    <span className="text-xs font-semibold uppercase text-muted-foreground">Recommended Strategy</span>
                                    <p className="font-bold text-primary mt-2">{analysisResult.recommendedAction.replace(/_/g, ' ')}</p>
                                    <p className="text-sm text-muted-foreground mt-1">{analysisResult.reasoning}</p>
                                </div>
                            </div>

                            <div className="mt-6">
                                <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 flex items-center">
                                    Proceed with Recommendations
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Content Grid */}
            <div className="grid gap-6 md:grid-cols-2">

                {/* Voice Agent Status */}
                <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold flex items-center gap-2">
                            <Mic className="h-5 w-5 text-primary" />
                            AI Voice Assistant
                        </h3>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" checked className="sr-only peer" readOnly />
                            <div className="w-11 h-6 bg-muted peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-ring rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                        Your AI assistant will call you <strong>3 days before</strong> your dispute window ends to remind you to check for mail.
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
                        Next call scheduled: Feb 14, 2026
                    </div>
                </div>

                {/* Proof of Harm / Response Uploader */}
                <div className="rounded-xl border border-border bg-card shadow-sm p-6">
                    <h3 className="font-semibold text-lg flex items-center gap-2 mb-4">
                        <FileText className="h-5 w-5" />
                        Document Locker
                    </h3>

                    {/* Hidden Trigger for Timeline Button */}
                    <div id="response-upload-trigger" className="hidden"></div>

                    <FileUploader
                        onUploadComplete={handleResponseUpload}
                        label={currentStep === 'WAITING_RESPONSE' ? "Upload CRA Response" : "Upload Evidence"}
                        sublabel={currentStep === 'WAITING_RESPONSE' ? "Did you get a letter back? Drop it here." : "Adverse Action Notices, IDs, Proof of Address"}
                    />
                </div>
            </div>

            {/* Floating Chat Agent */}
            <SupportAgentWidget />
        </div>
    )
}
