import Link from "next/link"
import { Shield, Gavel, FileText, CheckCircle, ArrowRight, Star, Plus, Minus } from "lucide-react"
import { LandingChatbot } from "@/components/landing-chatbot";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
            <Shield className="h-6 w-6 text-primary" />
            <span>CredLaw</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
            <Link href="#features" className="hover:text-primary transition-colors">Features</Link>
            <Link href="#pricing" className="hover:text-primary transition-colors">Pricing</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium hover:underline">Login</Link>
            <Link href="/signup" className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground shadow transition-colors hover:bg-primary/90">
              Start Repair
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              New: AI Arbitration Scanner
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-br from-green-400 to-green-700 bg-clip-text text-transparent">
              Turn Robocalls into <br /> $1,000 Lawsuits.
            </h1>
            <p className="mx-auto max-w-[700px] text-lg md:text-xl text-muted-foreground mb-10">
              Don't just hang up. <strong>Trap them.</strong> Use our AI Burner Number to record debt collectors. We transcribe the call, detect illegal threats (FDCPA), and auto-generate a lawsuit to get you paid.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup" className="inline-flex h-12 items-center justify-center rounded-md bg-green-600 px-8 text-sm font-bold text-white shadow transition-all hover:bg-green-700 hover:scale-105">
                Calculate My Claim Value 💸 <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="#how-it-works" className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
                How Call Trapping Works
              </Link>
            </div>
          </div>

          {/* Background Gradient Blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
        </section>

        {/* Feature Grid */}
        <section id="features" className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">The "Reclaim Method" Engine</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">We don't send generic letters. We identify "Procedural Negligence" and leverage it for deletions and settlement checks.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Gavel className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">AI Violation Engine</h3>
                <p className="text-muted-foreground">Scans specifically for Hinkle, Norman, and Saunders violations that force deletions or trigger lawsuits.</p>
              </div>
              <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
                <div className="h-12 w-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                  <FileText className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">Auto-Generated Lawsuits</h3>
                <p className="text-muted-foreground">Push a button to generate ready-to-file Federal Complaints when bureaus refuse to investigate.</p>
              </div>
              <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
                <div className="h-12 w-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">Proof of Harm Locker</h3>
                <p className="text-muted-foreground">Securely store denial letters and high-interest notices to establish standing for damages.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-secondary/10">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "Is this legal?", a: "Yes. The FDCPA (Fair Debt Collection Practices Act) is a federal law that protects you from harassment. We simply help you enforce your rights." },
                { q: "Do I have to go to court?", a: "Rarely. most cases settle out of court once the debt collector realizes we have evidence (call recordings) of their violation." },
                { q: "How much does it cost?", a: "0$. We take a success fee only if you win. If we don't recover money for you, you pay nothing." },
                { q: "How does the 'Predator Trap' work?", a: "We give you a unique phone number. You forward your calls to it. Our AI records and transcribes everything to find violations." }
              ].map((faq, i) => (
                <div key={i} className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-lg mb-2 flex items-center justify-between">
                    {faq.q}
                  </h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof / Stats */}
        <section className="py-20 border-y border-border">
          <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h4 className="text-4xl font-bold text-primary mb-2">$4.2M</h4>
              <p className="text-sm font-medium text-muted-foreground">In Deleted Debt</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-primary mb-2">18,500+</h4>
              <p className="text-sm font-medium text-muted-foreground">Violations Found</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-primary mb-2">$850k</h4>
              <p className="text-sm font-medium text-muted-foreground">Settlements Won</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-primary mb-2">4.9/5</h4>
              <p className="text-sm font-medium text-muted-foreground flex items-center justify-center gap-1">
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" /> Client Rating
              </p>
            </div>
          </div>
        </section>

        {/* Floating Chatbot */}
        <LandingChatbot />
      </main>

      <footer className="py-10 border-t border-border">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-bold tracking-tighter">
            <Shield className="h-5 w-5 text-primary" />
            <span>CredLaw</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CredLaw Inc. Built for Justice.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground">Terms</Link>
            <Link href="#" className="hover:text-foreground">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
