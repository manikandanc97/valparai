import Navbar from "@/components/Navbar";
import BookingForm from "@/components/BookingForm";
import SectionHeading from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { brand, contactItems } from "@/lib/site-content";
import { Mail, MessageCircle, Phone } from "lucide-react";

export default function ContactPage() {
  const contactIcons = [Phone, MessageCircle, Mail];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="section-padding border-b bg-muted/30">
        <div className="container-wide">
          <div className="grid items-start gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Contact"
                title="Plan Your Valparai Trip"
                description="Reach us directly by phone, WhatsApp, or email. Share your travel plan and we will help you finalize the best route."
                center={false}
              />

              <div className="rounded-3xl border border-border/60 bg-background/70 p-4 shadow-sm backdrop-blur sm:p-5">
                <div className="mb-4 flex items-center justify-between rounded-2xl border border-dashed border-primary/30 bg-primary/5 px-4 py-3">
                  <p className="text-sm font-medium text-foreground">Fastest response on WhatsApp</p>
                  <a
                    href={brand.whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    Chat Now
                  </a>
                </div>

                <div className="flex flex-col gap-4 sm:gap-5">
                  {contactItems.map((item, idx) => {
                    const Icon = contactIcons[idx];

                    return (
                      <Card
                        key={item.title}
                        className="group relative overflow-hidden rounded-2xl border-border/50 bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                      >
                        <CardContent className="flex items-center justify-between gap-4 p-5 sm:p-6">
                          <div className="flex items-center gap-5">
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                              <Icon className="h-6 w-6" strokeWidth={2.2} />
                            </div>
                            <div className="space-y-1.5">
                              <p className="text-base font-bold text-foreground">{item.title}</p>
                              <p className="text-sm font-medium text-muted-foreground">{item.value}</p>
                            </div>
                          </div>
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            className="flex h-10 items-center justify-center rounded-full bg-muted/80 px-5 text-sm font-semibold tracking-wide text-foreground transition-all duration-300 hover:scale-105 hover:bg-foreground hover:text-background"
                          >
                            Open
                          </a>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>

            <BookingForm />
          </div>
        </div>
      </section>
    </main>
  );
}
