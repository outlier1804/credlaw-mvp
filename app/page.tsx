import Link from "next/link"
import { Shield, Gavel, FileText, CheckCircle, ArrowRight, Star } from "lucide-react"

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
              Now with AI-Powered Litigation
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
              Credit Repair that <br /> Ends in a Lawsuit.
            </h1>
            <p className="mx-auto max-w-[700px] text-lg md:text-xl text-muted-foreground mb-10">
              Don't just dispute. <strong>Litigate.</strong> CredLaw analyzes your credit report for violations (FCRA, FDCPA), auto-drafts demand letters, and connects you with attorneys to sue for up to $1,000 per violation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup" className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
                Audit My Report Free <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="#how-it-works" className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
                How Analysis Works
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
              <h2 className="text-3xl font-bold tracking-tight mb-4">Turn Violations into Compensation</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Most credit repair is just "letters". We build a legal case for every inaccurate item on your report.</p>
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
