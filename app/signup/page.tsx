'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Shield, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function SignupPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        agreeToTerms: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call for signup
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Redirect to Onboarding Wizard
        // This is the "Audit My Report" flow
        router.push('/client/onboarding');
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-background">

            {/* Left Side - Value Proposition */}
            <div className="hidden md:flex flex-col justify-between w-1/2 lg:w-2/5 bg-primary text-primary-foreground p-12 relative overflow-hidden">
                <div className="z-10">
                    <Link href="/" className="flex items-center gap-2 font-bold text-2xl tracking-tighter">
                        <Shield className="h-8 w-8 text-white" />
                        <span>CredLaw</span>
                    </Link>
                </div>

                <div className="z-10 relative space-y-6">
                    <h2 className="text-4xl font-bold leading-tight">
                        See what your credit report is hiding.
                    </h2>
                    <ul className="space-y-4 text-lg">
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-6 w-6 shrink-0 mt-0.5" />
                            <span>Instant FCRA Violation Scan</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-6 w-6 shrink-0 mt-0.5" />
                            <span>See Potential Cash Settlement Value</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-6 w-6 shrink-0 mt-0.5" />
                            <span>Identify "Delete-able" Errors</span>
                        </li>
                    </ul>
                </div>

                <div className="z-10 text-xs opacity-70">
                    © {new Date().getFullYear()} CredLaw Inc.
                </div>

                {/* Abstract Background Shapes */}
                <div className="absolute top-[-20%] right-[-20%] w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-black/10 rounded-full blur-3xl"></div>
            </div>

            {/* Right Side - Signup Form */}
            <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-12">
                <div className="w-full max-w-md space-y-8">

                    {/* Mobile Header */}
                    <div className="md:hidden flex justify-center mb-8">
                        <Link href="/" className="flex items-center gap-2 font-bold text-2xl tracking-tighter">
                            <Shield className="h-8 w-8 text-primary" />
                            <span>CredLaw</span>
                        </Link>
                    </div>

                    <div className="text-center">
                        <h1 className="text-2xl font-bold tracking-tight">Create your free account</h1>
                        <p className="text-muted-foreground mt-2">No credit card required for initial audit.</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSignup} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium leading-none" htmlFor="firstName">First Name</label>
                                <input
                                    id="firstName"
                                    type="text"
                                    placeholder="Jane"
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium leading-none" htmlFor="lastName">Last Name</label>
                                <input
                                    id="lastName"
                                    type="text"
                                    placeholder="Doe"
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none" htmlFor="email">Email Address</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="name@example.com"
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none" htmlFor="password">Password</label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Create a strong password"
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                minLength={8}
                            />
                            <p className="text-[10px] text-muted-foreground">Must be at least 8 characters.</p>
                        </div>

                        <div className="flex items-center space-x-2 pt-2">
                            <input
                                type="checkbox"
                                id="agreeToTerms"
                                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                                checked={formData.agreeToTerms}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="agreeToTerms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted-foreground">
                                I agree to the <Link href="#" className="underline hover:text-primary">Terms of Service</Link> & <Link href="#" className="underline hover:text-primary">Privacy Policy</Link>
                            </label>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="inline-flex w-full items-center justify-center rounded-md text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-11 py-2 mt-4"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Creating Account...
                                </>
                            ) : (
                                <>
                                    Get My Free Audit <ArrowRight className="ml-2 h-4 w-4" />
                                </>
                            )}
                        </button>
                    </form>

                    <p className="text-center text-sm text-muted-foreground mt-6">
                        Already have an account?{" "}
                        <Link href="/login" className="font-semibold text-primary hover:underline">
                            Log in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
