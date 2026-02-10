'use client';

import { useState } from 'react';
import { FileText, Check, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AgreementProps {
    agencyName: string;
    clientName: string;
    onAgree: () => void;
}

export function OnboardingAgreement({ agencyName, clientName, onAgree }: AgreementProps) {
    const [hasScrolled, setHasScrolled] = useState(false);
    const [signature, setSignature] = useState("");
    const [agreed, setAgreed] = useState(false);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
        if (scrollHeight - scrollTop <= clientHeight + 50) {
            setHasScrolled(true);
        }
    };

    const isComplete = hasScrolled && agreed && signature.trim().toLowerCase() === clientName.toLowerCase();

    return (
        <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold tracking-tight">Service Agreement</h2>
                <p className="text-muted-foreground">Please review and sign the agreement with {agencyName} to proceed.</p>
            </div>

            <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
                {/* Scrollable Contract Area */}
                <div
                    className="h-[400px] overflow-y-auto p-8 bg-muted/5 font-serif text-sm leading-relaxed text-foreground/80 space-y-4"
                    onScroll={handleScroll}
                >
                    <h3 className="font-bold text-lg text-center uppercase mb-6">Credit Repair Services Agreement</h3>
                    <p><strong>THIS AGREEMENT</strong> is made on {new Date().toLocaleDateString()} between <strong>{agencyName}</strong> ("Company") and <strong>{clientName}</strong> ("Client").</p>

                    <h4 className="font-bold uppercase text-xs mt-4">1. Services Provided</h4>
                    <p>The Company agrees to evaluate the Client's current credit reports, identify inaccurate, erroneous, or obsolete information, and prepare correspondence to credit bureaus and furnishers to dispute such items.</p>

                    <h4 className="font-bold uppercase text-xs mt-4">2. Client Obligations</h4>
                    <p>The Client agrees to provide accurate information, forward all correspondence received from credit bureaus to the Company within 5 days, and not apply for new credit during the repair process.</p>

                    <h4 className="font-bold uppercase text-xs mt-4">3. Fees and Payment</h4>
                    <p>Client agrees to pay the monthly service fee of $99.00. Work is performed in arrears. No fees are collected until services have been fully performed for the previous month.</p>

                    <h4 className="font-bold uppercase text-xs mt-4">4. Limited Power of Attorney</h4>
                    <p>Client grants Company a limited power of attorney to draft and sign correspondence on Client's behalf solely for the purpose of credit repair and dispute resolution.</p>

                    <h4 className="font-bold uppercase text-xs mt-4">5. Disclaimer</h4>
                    <p>Company does not guarantee specific results or score increases. Credit repair outcomes vary based on individual credit history and creditor responses.</p>

                    <div className="pt-8 text-center text-xs text-muted-foreground italic">
                        -- End of Agreement --
                    </div>
                </div>

                {/* Signature Area */}
                <div className="p-6 bg-background border-t border-border space-y-6">
                    {!hasScrolled && (
                        <div className="flex items-center gap-2 text-sm text-yellow-600 bg-yellow-500/10 p-3 rounded-lg">
                            <AlertCircle className="h-4 w-4" />
                            Please scroll to the bottom of the agreement to sign.
                        </div>
                    )}

                    <div className={cn("space-y-4 transition-opacity", !hasScrolled && "opacity-50 pointer-events-none")}>
                        <label className="flex items-start gap-3 cursor-pointer group">
                            <div className="relative flex items-center">
                                <input
                                    type="checkbox"
                                    className="sr-only"
                                    checked={agreed}
                                    onChange={(e) => setAgreed(e.target.checked)}
                                />
                                <div className={cn(
                                    "h-5 w-5 rounded border flex items-center justify-center transition-colors",
                                    agreed ? "bg-primary border-primary text-primary-foreground" : "border-input bg-background group-hover:border-primary"
                                )}>
                                    {agreed && <Check className="h-3 w-3" />}
                                </div>
                            </div>
                            <span className="text-sm text-muted-foreground leading-none pt-0.5">
                                I have read and agree to the terms above. I understand that I am granting a Limited Power of Attorney for credit repair purposes.
                            </span>
                        </label>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Digital Signature</label>
                            <input
                                type="text"
                                placeholder={`Type "${clientName}" to sign`}
                                value={signature}
                                onChange={(e) => setSignature(e.target.value)}
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            />
                            <p className="text-xs text-muted-foreground">Type your full legal name exactly as it appears above.</p>
                        </div>

                        <button
                            disabled={!isComplete}
                            onClick={onAgree}
                            className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        >
                            {isComplete ? <><Check className="mr-2 h-4 w-4" /> Confirm & Start Onboarding</> : "Sign to Continue"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
