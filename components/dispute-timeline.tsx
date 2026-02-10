'use client';

import { CheckCircle, Circle, Clock, Mail, FileSignature, Upload, Search, Zap, ArrowRight, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export type DisputeStep = 'AI_ANALYSIS' | 'DRAFTING' | 'CLIENT_SIGNATURE' | 'MAILED' | 'WAITING_RESPONSE' | 'RESPONSE_RECEIVED' | 'NEXT_STEPS';

interface DisputeTimelineProps {
    currentStep: DisputeStep;
    daysRemaining?: number;
    onUploadResponse?: () => void;
    onSignLetters?: () => void;
}

export function DisputeTimeline({ currentStep, daysRemaining, onUploadResponse, onSignLetters }: DisputeTimelineProps) {

    const steps: { id: DisputeStep, label: string, icon: any, description: string }[] = [
        { id: 'AI_ANALYSIS', label: 'AI Scan & Audit', icon: Search, description: 'Analyzing credit report for FCRA violations.' },
        { id: 'DRAFTING', label: 'Drafting Strategy', icon: Zap, description: 'Creating dispute plan based on case law.' },
        { id: 'CLIENT_SIGNATURE', label: 'Signature Required', icon: FileSignature, description: 'Please sign the generated dispute letters.' },
        { id: 'MAILED', label: 'Mailed to Bureaus', icon: Mail, description: 'Sent via Certified Mail. Tracking active.' },
        { id: 'WAITING_RESPONSE', label: 'Waiting Period', icon: Clock, description: 'Bureaus have 30 days to investigate.' },
        { id: 'RESPONSE_RECEIVED', label: 'Analyze Response', icon: Upload, description: 'Upload the response letter you received.' },
        { id: 'NEXT_STEPS', label: 'Next Action', icon: ArrowRight, description: 'AI determining next move (MOV or Litigation).' },
    ];

    const getCurrentStepIndex = () => steps.findIndex(s => s.id === currentStep);
    const currentIdx = getCurrentStepIndex();

    return (
        <div className="rounded-xl border border-border bg-card shadow-sm p-6">
            <h3 className="font-semibold text-lg mb-6">Dispute Journey</h3>
            <div className="relative">
                {/* Vertical Line for Mobile / Start of List */}
                <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:hidden" />

                <div className="space-y-6 md:space-y-0 md:flex md:justify-between md:relative">
                    {/* Horizontal Line for Desktop */}
                    <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-border -z-10" />

                    {steps.map((step, idx) => {
                        const isCompleted = idx < currentIdx;
                        const isCurrent = idx === currentIdx;

                        return (
                            <div key={step.id} className="relative flex flex-row md:flex-col items-start md:items-center gap-4 md:gap-2 md:flex-1">
                                {/* Icon Circle */}
                                <div className={cn(
                                    "z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 transition-colors",
                                    isCompleted ? "border-primary bg-primary text-primary-foreground" :
                                        isCurrent ? "border-primary bg-background text-primary ring-4 ring-primary/20" :
                                            "border-muted bg-muted/50 text-muted-foreground"
                                )}>
                                    {isCompleted ? <CheckCircle className="h-6 w-6" /> : <step.icon className="h-5 w-5" />}
                                </div>

                                {/* Text */}
                                <div className="md:text-center pt-1 md:pt-0">
                                    <h4 className={cn("text-sm font-semibold", isCurrent ? "text-primary" : "text-foreground")}>
                                        {step.label}
                                    </h4>
                                    <p className="text-xs text-muted-foreground md:max-w-[120px] md:mx-auto">
                                        {step.description}
                                    </p>

                                    {/* Interactive Actions for Current Step */}
                                    {isCurrent && (
                                        <div className="mt-2 md:mt-3">
                                            {step.id === 'CLIENT_SIGNATURE' && (
                                                <button
                                                    onClick={onSignLetters}
                                                    className="inline-flex items-center justify-center px-3 py-1.5 text-xs font-medium bg-primary text-primary-foreground rounded-md shadow hover:bg-primary/90 animate-pulse"
                                                >
                                                    Sign Now
                                                </button>
                                            )}
                                            {step.id === 'WAITING_RESPONSE' && daysRemaining !== undefined && (
                                                <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-mono bg-yellow-500/10 text-yellow-600 rounded">
                                                    {daysRemaining} Days Left
                                                </span>
                                            )}
                                            {step.id === 'RESPONSE_RECEIVED' && (
                                                <button
                                                    onClick={onUploadResponse}
                                                    className="inline-flex items-center justify-center px-3 py-1.5 text-xs font-medium bg-primary text-primary-foreground rounded-md shadow hover:bg-primary/90"
                                                >
                                                    <Upload className="mr-1 h-3 w-3" /> Upload
                                                </button>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
