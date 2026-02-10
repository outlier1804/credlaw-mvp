'use client';

import { useState } from 'react';
import { Loader2, CheckCircle, Mail, PenTool, FileText, Send, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MailingModalProps {
    isOpen: boolean;
    onClose: () => void;
    clientName: string;
    violationType: string;
}

export function MailingModal({ isOpen, onClose, clientName, violationType }: MailingModalProps) {
    const [step, setStep] = useState<'IDLE' | 'DRAFTING' | 'SENDING_SIGNATURE' | 'COMPLETED'>('IDLE');

    if (!isOpen) return null;

    const startProcess = async () => {
        setStep('DRAFTING');
        // Simulate AI Drafting
        await new Promise(resolve => setTimeout(resolve, 2000));
        setStep('SENDING_SIGNATURE');
        // Simulate DocuSign dispatch
        await new Promise(resolve => setTimeout(resolve, 2000));
        setStep('COMPLETED');
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
            <div className="w-full max-w-md rounded-xl border border-border bg-card p-6 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold">Generate & Mail</h3>
                    <button onClick={onClose}><X className="h-4 w-4" /></button>
                </div>

                <div className="space-y-6">
                    {/* Steps Visualization */}
                    <div className="relative flex justify-between">
                        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-muted -z-10"></div>

                        {/* Step 1: Draft */}
                        <div className="flex flex-col items-center gap-2 bg-card px-2">
                            <div className={cn(
                                "h-8 w-8 rounded-full flex items-center justify-center transition-colors",
                                step === 'IDLE' ? "bg-muted text-muted-foreground" : "bg-primary text-primary-foreground"
                            )}>
                                {step === 'DRAFTING' ? <Loader2 className="h-4 w-4 animate-spin" /> : <FileText className="h-4 w-4" />}
                            </div>
                            <span className="text-xs font-medium">Draft</span>
                        </div>

                        {/* Step 2: Sign */}
                        <div className="flex flex-col items-center gap-2 bg-card px-2">
                            <div className={cn(
                                "h-8 w-8 rounded-full flex items-center justify-center transition-colors",
                                ['IDLE', 'DRAFTING'].includes(step) ? "bg-muted text-muted-foreground" : "bg-primary text-primary-foreground"
                            )}>
                                {step === 'SENDING_SIGNATURE' ? <Loader2 className="h-4 w-4 animate-spin" /> : <PenTool className="h-4 w-4" />}
                            </div>
                            <span className="text-xs font-medium">e-Sign</span>
                        </div>

                        {/* Step 3: Mail */}
                        <div className="flex flex-col items-center gap-2 bg-card px-2">
                            <div className={cn(
                                "h-8 w-8 rounded-full flex items-center justify-center transition-colors",
                                step === 'COMPLETED' ? "bg-green-500 text-white" : "bg-muted text-muted-foreground"
                            )}>
                                {step === 'COMPLETED' ? <CheckCircle className="h-4 w-4" /> : <Mail className="h-4 w-4" />}
                            </div>
                            <span className="text-xs font-medium">Mail</span>
                        </div>
                    </div>

                    {/* Status Text based on Flow */}
                    <div className="text-center py-4">
                        {step === 'IDLE' && (
                            <p className="text-muted-foreground">Ready to generate <strong>{violationType}</strong> complaint for {clientName}.</p>
                        )}
                        {step === 'DRAFTING' && (
                            <p className="text-primary animate-pulse">AI is analyzing violations and drafting facts...</p>
                        )}
                        {step === 'SENDING_SIGNATURE' && (
                            <p className="text-primary animate-pulse">Sending to DocuSign for client signature...</p>
                        )}
                        {step === 'COMPLETED' && (
                            <div className="space-y-1">
                                <p className="text-green-500 font-medium">Success!</p>
                                <p className="text-xs text-muted-foreground">Envelope Sent. Once signed, PostGrid will mail it.</p>
                            </div>
                        )}
                    </div>

                    {/* Actions */}
                    <div className="flex justify-end gap-2">
                        {step === 'IDLE' ? (
                            <button
                                onClick={startProcess}
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                            >
                                <Send className="mr-2 h-4 w-4" />
                                Start Workflow
                            </button>
                        ) : step === 'COMPLETED' ? (
                            <button
                                onClick={onClose}
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium border border-input bg-background hover:bg-accent h-10 px-4 py-2 w-full"
                            >
                                Close
                            </button>
                        ) : (
                            <button disabled className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium bg-muted text-muted-foreground h-10 px-4 py-2 w-full opacity-50 cursor-not-allowed">
                                Processing...
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
