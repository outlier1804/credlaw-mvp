'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
    CheckCircle2,
    Loader2,
    Shield,
    ArrowRight,
    FileText,
    Search,
    AlertTriangle,
    Lock
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useConfetti } from '@/lib/hooks/use-confetti'; // We'll mock this for now or remove if not needed

export default function OnboardingPage() {
    const router = useRouter();
    const [step, setStep] = useState<'connect' | 'analyzing' | 'results'>('connect');
    const [provider, setProvider] = useState<'smartcredit' | 'identityiq' | null>(null);
    const [progress, setProgress] = useState(0);

    const handleConnect = (selectedProvider: 'smartcredit' | 'identityiq') => {
        setProvider(selectedProvider);
        setStep('analyzing');
        simulateAnalysis();
    };

    const simulateAnalysis = () => {
        let currentProgress = 0;
        const interval = setInterval(() => {
            currentProgress += Math.random() * 15;
            if (currentProgress > 100) {
                currentProgress = 100;
                clearInterval(interval);
                setTimeout(() => setStep('results'), 800);
            }
            setProgress(Math.min(currentProgress, 100));
        }, 600);
    };

    const handleFinish = () => {
        router.push('/client');
    };

    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">

            {/* Navigation / Progress Indicator */}
            <div className="w-full max-w-3xl mb-12">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2 font-bold text-xl">
                        <Shield className="h-6 w-6 text-primary" />
                        <span>CredLaw</span>
                        <span className="text-muted-foreground font-normal mx-2">/</span>
                        <span className="text-sm font-medium text-muted-foreground">Initial Audit</span>
                    </div>
                </div>
                <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                    <div
                        className="h-full bg-primary transition-all duration-500 ease-out"
                        style={{ width: step === 'connect' ? '33%' : step === 'analyzing' ? `${33 + (progress * 0.33)}%` : '100%' }}
                    ></div>
                </div>
            </div>

            {/* Step 1: Connect Provider */}
            {step === 'connect' && (
                <div className="w-full max-w-md space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold tracking-tight mb-3">Let's find your violations.</h1>
                        <p className="text-muted-foreground">
                            Connect your credit monitoring service so our AI can scan your official 3-bureau report for FCRA errors.
                        </p>
                    </div>

                    <div className="grid gap-4">
                        <button
                            onClick={() => handleConnect('smartcredit')}
                            className="group relative flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary transition-all shadow-sm hover:shadow-md"
                        >
                            <div className="h-12 w-12 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold shrink-0">SC</div>
                            <div className="text-left">
                                <h3 className="font-semibold group-hover:text-primary transition-colors">SmartCredit</h3>
                                <p className="text-xs text-muted-foreground">Most popular. Detailed reports.</p>
                            </div>
                            <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                        </button>

                        <button
                            onClick={() => handleConnect('identityiq')}
                            className="group relative flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary transition-all shadow-sm hover:shadow-md"
                        >
                            <div className="h-12 w-12 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold shrink-0">IQ</div>
                            <div className="text-left">
                                <h3 className="font-semibold group-hover:text-primary transition-colors">IdentityIQ</h3>
                                <p className="text-xs text-muted-foreground">Excellent for monitoring.</p>
                            </div>
                            <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                        </button>
                    </div>

                    <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-2">
                        <Lock className="h-3 w-3" />
                        Bank-level 256-bit encryption. We never see your login.
                    </p>
                </div>
            )}

            {/* Step 2: Analysis in Progress */}
            {step === 'analyzing' && (
                <div className="w-full max-w-md text-center space-y-8 animate-in fade-in duration-500">
                    <div className="relative mx-auto w-32 h-32 flex items-center justify-center">
                        {/* Ping Animation */}
                        <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping"></div>
                        <div className="relative bg-background rounded-full p-4 border-2 border-primary">
                            <Search className="h-12 w-12 text-primary animate-pulse" />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold tracking-tight">Analyzing Report...</h2>
                        <div className="space-y-2">
                            <div className="flex justify-between text-xs font-medium text-muted-foreground px-1">
                                <span>Scanning {provider === 'smartcredit' ? 'SmartCredit' : 'IdentityIQ'}...</span>
                                <span>{Math.round(progress)}%</span>
                            </div>
                            <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-primary transition-all duration-300 ease-linear"
                                    style={{ width: `${progress}%` }}
                                ></div>
                            </div>
                        </div>
                        <div className="bg-card border border-border rounded-lg p-4 text-left space-y-2 text-sm">
                            <div className={`flex items-center gap-2 ${progress > 20 ? 'text-green-600' : 'text-muted-foreground'}`}>
                                {progress > 20 ? <CheckCircle2 className="h-4 w-4" /> : <Loader2 className="h-4 w-4 animate-spin" />}
                                Importing Personal Information
                            </div>
                            <div className={`flex items-center gap-2 ${progress > 50 ? 'text-green-600' : 'text-muted-foreground'}`}>
                                {progress > 50 ? <CheckCircle2 className="h-4 w-4" /> : progress > 20 && <Loader2 className="h-4 w-4 animate-spin" />}
                                Identifying Negative Accounts
                            </div>
                            <div className={`flex items-center gap-2 ${progress > 80 ? 'text-green-600' : 'text-muted-foreground'}`}>
                                {progress > 80 ? <CheckCircle2 className="h-4 w-4" /> : progress > 50 && <Loader2 className="h-4 w-4 animate-spin" />}
                                Checking for FCRA Violations
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Step 3: Results Summary */}
            {step === 'results' && (
                <div className="w-full max-w-xl animate-in zoom-in-95 duration-500">
                    <div className="bg-card border border-border rounded-2xl shadow-lg p-8 text-center space-y-8">
                        <div>
                            <div className="mx-auto h-16 w-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                                <AlertTriangle className="h-8 w-8 text-red-600" />
                            </div>
                            <h1 className="text-3xl font-bold tracking-tight">Analysis Complete</h1>
                            <p className="text-muted-foreground mt-2">
                                We found <span className="font-bold text-foreground">12 potential violations</span> across 3 bureaus.
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-4 border-y border-border py-6">
                            <div>
                                <p className="text-2xl font-bold text-foreground">580</p>
                                <p className="text-xs text-muted-foreground font-medium uppercase">Avg Score</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-red-600">8</p>
                                <p className="text-xs text-muted-foreground font-medium uppercase">Negative Items</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-green-600">$3.5k</p>
                                <p className="text-xs text-muted-foreground font-medium uppercase">Est. Value</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <button
                                onClick={handleFinish}
                                className="w-full inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-bold text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            >
                                Go to Dashboard <ArrowRight className="ml-2 h-4 w-4" />
                            </button>
                            <p className="text-xs text-muted-foreground">
                                By proceeding, you agree to our electronic signature consent.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
