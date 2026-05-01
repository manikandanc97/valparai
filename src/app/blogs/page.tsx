import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Construction, Newspaper } from "lucide-react";

export default function BlogsPage() {
  return (
    <main className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden py-20">
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="container-wide relative z-10 flex flex-col items-center text-center">
        <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-primary/5 text-primary">
          <Newspaper className="h-12 w-12" />
        </div>

        <div className="mb-6 flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
          <Construction className="h-4 w-4" />
          <span>Coming Soon</span>
        </div>

        <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
          Our Travel Blog is <br />
          <span className="text-primary">Under Development</span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground">
          We&apos;re busy writing stories about the mist-covered mountains, tea estates, 
          and hidden waterfalls of Valparai. Stay tuned for travel guides, tips, 
          and authentic local experiences.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg" className="h-12 rounded-xl px-8">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-12 rounded-xl px-8">
            <Link href="/packages">
              Explore Packages
            </Link>
          </Button>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            { title: "Travel Guides", icon: "🗺️" },
            { title: "Local Stories", icon: "📖" },
            { title: "Photography", icon: "📸" },
          ].map((item, idx) => (
            <div 
              key={idx}
              className="flex items-center gap-4 rounded-2xl border bg-card/50 p-6 backdrop-blur-sm"
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="font-semibold text-foreground">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
