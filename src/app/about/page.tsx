import Navbar from "@/components/Navbar";
import SectionHeading from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { brand, features } from "@/lib/site-content";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="section-padding relative overflow-hidden border-b bg-muted/40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.12),transparent_32%),radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.12),transparent_36%)]" />
        <div className="container-wide relative space-y-12">
          <SectionHeading
            eyebrow="About Us"
            title="Designed for Authentic Valparai Experiences"
            description={`${brand.name} creates polished local trips with trusted support, transparent pricing, and flexible planning for families, couples, and groups.`}
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item) => (
              <Card
                key={item.title}
                className="group rounded-2xl border-border/60 bg-background/85 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <CardContent className="space-y-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
