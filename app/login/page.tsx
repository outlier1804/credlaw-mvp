'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Shield, Key, ArrowRight, Loader2, Lock } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function LoginPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [activeTab, setActiveTab] = useState<'client' | 'agency' | 'attorney' | 'admin'>('client');
    const [email, setEmail] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Redirect based on active tab
        // In a real app, this would be determined by the user's role in the DB
        switch (activeTab) {
            case 'admin':
                router.push('/admin');
                break;
            case 'agency':
                router.push('/agency');
                break;
            case 'attorney':
                router.push('/attorney');
                break;
            default:
                router.push('/client');
        }
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-background">

            {/* Left Side - Visual & Branding */}
            <div className="hidden md:flex flex-col justify-between w-1/2 lg:w-2/5 bg-zinc-900 text-white p-12 relative overflow-hidden">
                <div className="z-10">
                    <Link href="/" className="flex items-center gap-2 font-bold text-2xl tracking-tighter">
                        <Shield className="h-8 w-8 text-primary" />
                        <span>CredLaw</span>
                    </Link>
                </div>

                <div className="z-10 relative">
                    <h2 className="text-4xl font-bold mb-6 leading-tight">
                        Justice for your <br />
                        Credit Report.
                    </h2>
                    <p className="text-zinc-400 text-lg max-w-md">
                        The only platform that turns credit repair disputes into federal lawsuits. Automatically.
                    </p>
                </div>

                <div className="z-10 text-xs text-zinc-500">
                    © {new Date().getFullYear()} CredLaw Inc.
                </div>

                {/* Abstract Background Shapes */}
                <div className="absolute top-[-20%] right-[-20%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-3xl"></div>
            </div>

            {/* Right Side - Login Form */}
            <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-12">
                <div className="w-full max-w-md space-y-8">

                    {/* Header (Mobile Logo) */}
                    <div className="md:hidden flex justify-center mb-8">
                        <Link href="/" className="flex items-center gap-2 font-bold text-2xl tracking-tighter">
                            <Shield className="h-8 w-8 text-primary" />
                            <span>CredLaw</span>
                        </Link>
                    </div>

                    <div className="text-center">
                        <h1 className="text-2xl font-bold tracking-tight">Welcome back</h1>
                        <p className="text-muted-foreground mt-2">Sign in to your dashboard to continue.</p>
                    </div>

                    {/* Role Toggles */}
                    <div className="grid grid-cols-4 bg-muted p-1 rounded-lg">
                        {['client', 'agency', 'attorney', 'admin'].map((role) => (
                            <button
                                key={role}
                                onClick={() => setActiveTab(role as any)}
                                className={cn(
                                    "text-xs font-medium py-2 rounded-md transition-all capitalize",
                                    activeTab === role ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                {role}
                            </button>
                        ))}
                    </div>

                    {/* Form */}
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email">
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder={activeTab === 'admin' ? "admin@credlaw.com" : "name@example.com"}
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="password">
                                    Password
                                </label>
                                <a href="#" className="text-xs text-primary hover:underline">Forgot password?</a>
                            </div>
                            <input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="inline-flex w-full items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Accessing {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Portal...
                                </>
                            ) : (
                                <>
                                    Sign In <ArrowRight className="ml-2 h-4 w-4" />
                                </>
                            )}
                        </button>
                    </form>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-muted" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                            Google
                        </button>
                        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                            Apple
                        </button>
                    </div>

                    <p className="px-8 text-center text-xs text-muted-foreground">
                        By clicking continue, you agree to our{" "}
                        <Link href="#" className="underline underline-offset-4 hover:text-primary">
                            Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="#" className="underline underline-offset-4 hover:text-primary">
                            Privacy Policy
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
}
