import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Layout, CheckCircle2, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-body overflow-x-hidden">
      {/* Header */}
      <nav className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">T</div>
          <span className="text-xl font-headline font-bold">Tasko</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login">
            <Button variant="ghost" className="font-semibold text-sm">Sign in</Button>
          </Link>
          <Link href="/signup">
            <Button className="rounded-xl font-bold px-6 shadow-lg shadow-primary/20">Get Started</Button>
          </Link>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-6 pt-2  text-center flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tight max-w-4xl leading-[1.1]">
          Modern project management for <span className="text-primary">efficient teams.</span>
        </h1>
        <p className="mt-8 text-xl text-muted-foreground max-w-2xl leading-relaxed">
          Help your team stay aligned, productive, and focused on what matters. Minimal design for maximum impact.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link href="/signup">
            <Button size="lg" className="h-14 px-8 rounded-2xl text-lg font-bold gap-2 shadow-xl shadow-primary/25">
              Start your project <ArrowRight size={20} />
            </Button>
          </Link>
        </div>

        {/* Mockup Preview */}
        {/* <div className="mt-24 relative w-full max-w-5xl group">
        </div>  */}
      </section>

      {/* Features */}
      <section className="bg-secondary/30 py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-headline font-bold mb-4">Everything you need to deliver</h2>
            <p className="text-muted-foreground text-lg">Powerful features wrapped in a minimal, intuitive interface.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border-none hover:translate-y-[-4px] transition-transform">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <Layout size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Kanban & List Views</h3>
              <p className="text-muted-foreground">Visualize your workflow exactly how you want. Switch between modes instantly.</p>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border-none hover:translate-y-[-4px] transition-transform">
              <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-6">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Task Management</h3>
              <p className="text-muted-foreground">Detailed task tracking with priority badges, due dates, and rich assignments.</p>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border-none hover:translate-y-[-4px] transition-transform">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Lightning Fast</h3>
              <p className="text-muted-foreground">Built for speed. No bloat, no lag. Just you and your work in perfect flow.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}