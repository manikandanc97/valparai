"use client";

import { useState } from "react";
import {
  User,
  Phone,
  Map,
  Users as UsersIcon,
  Calendar as CalendarIcon,
  Send,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import {
  tourPackages,
  budgetPricing,
  package3DayPricing,
  package2DayAthirapalliPricing,
} from "@/lib/tour-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PillBadge from "@/components/shared/pill-badge";

const BookingForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    package: "",
    adults: "0",
    kids: "0",
    date: undefined as Date | undefined,
    message: "",
  });

  // Exact pricing lookup
  const selectedPkg = tourPackages.find((p) => p.title === formData.package);
  const adultsCount = parseInt(formData.adults) || 0;
  const kidsCount = parseInt(formData.kids) || 0;
  const totalPeople = adultsCount + kidsCount;

  const pricingMap =
    selectedPkg?.id === "package-2day-budget"
      ? budgetPricing
      : selectedPkg?.id === "package-3day"
        ? package3DayPricing
        : selectedPkg?.id === "package-2day-athirapalli"
          ? package2DayAthirapalliPricing
          : null;

  let pricePerPerson = 0;
  if (selectedPkg && pricingMap) {
    pricePerPerson =
      pricingMap[totalPeople] ??
      pricingMap[
        Object.keys(pricingMap)
          .map(Number)
          .sort((a, b) => a - b)
          .at(-1)!
      ] ??
      0;
  } else if (selectedPkg) {
    pricePerPerson =
      parseInt(selectedPkg.priceText.replace(/[^\d]/g, ""), 10) || 0;
  }

  const totalPrice = pricePerPerson * totalPeople;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Create WhatsApp message
    const dateStr = formData.date ? format(formData.date, "PPP") : "Flexible";
    const whatsappMessage = encodeURIComponent(
      `*New Booking Request - Valparai Wanderer*\n\n` +
        `*Name:* ${formData.name}\n` +
        `*Phone:* ${formData.phone}\n` +
        `*Package:* ${formData.package}\n` +
        `*Adults:* ${formData.adults || "0"}\n` +
        `*Kids:* ${formData.kids || "0"}\n` +
        `*Date:* ${dateStr}\n` +
        `*Message:* ${formData.message || "None"}`,
    );

    // Send to WhatsApp
    window.open(`https://wa.me/917904199605?text=${whatsappMessage}`, "_blank");

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({
        name: "",
        phone: "",
        package: "",
        adults: "1",
        kids: "0",
        date: undefined,
        message: "",
      });
      setTimeout(() => setSuccess(false), 3000);
    }, 1000);
  };

  return (
    <Card
      id="booking-form"
      className="overflow-hidden rounded-3xl border-border/60 shadow-lg"
    >
      <CardHeader className="bg-muted/10 px-8 py-6 border-b">
        <div className="mb-4">
          <PillBadge color="gold">Reservation</PillBadge>
        </div>
        <CardTitle className="text-3xl font-bold tracking-tight text-foreground">
          Book your trip
        </CardTitle>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          Submit your details and our team will confirm on WhatsApp.
        </p>
      </CardHeader>
      <CardContent className="px-8 py-6">
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2 text-sm flex flex-col">
              <span className="text-muted-foreground font-medium">
                Full Name <span className="text-red-500 ml-0.5">*</span>
              </span>
              <div className="relative">
                <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  required
                  placeholder="Your Name"
                  className="h-10 rounded-md pl-9"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="space-y-2 text-sm flex flex-col">
              <span className="text-muted-foreground font-medium">
                Phone Number <span className="text-red-500 ml-0.5">*</span>
              </span>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  required
                  placeholder="+91 Phone"
                  className="h-10 rounded-md pl-9"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          <div className="space-y-2 text-sm flex flex-col">
            <span className="text-muted-foreground font-medium">
              Package <span className="text-red-500 ml-0.5">*</span>
            </span>
            <div className="relative">
              <Map className="absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Select
                value={formData.package}
                onValueChange={(val) =>
                  setFormData({ ...formData, package: val || "" })
                }
              >
                <SelectTrigger className="h-10 w-full rounded-md pl-9">
                  <SelectValue placeholder="Choose package" />
                </SelectTrigger>
                <SelectContent>
                  {tourPackages.map((pkg) => (
                    <SelectItem key={pkg.id} value={pkg.title}>
                      {pkg.title}
                    </SelectItem>
                  ))}
                  <SelectItem value="Custom Tour">
                    Custom Tailored Tour
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2 text-sm flex flex-col">
              <span className="text-muted-foreground font-medium">
                Adults <span className="text-red-500 ml-0.5">*</span>
              </span>
              <div className="relative">
                <UsersIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="number"
                  min="1"
                  placeholder="Adults"
                  className="h-10 rounded-md pl-9"
                  value={formData.adults}
                  onChange={(e) =>
                    setFormData({ ...formData, adults: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="space-y-2 text-sm flex flex-col">
              <span className="text-muted-foreground font-medium">
                Kids <span className="text-red-500 ml-0.5">*</span>
              </span>
              <div className="relative">
                <UsersIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="number"
                  min="0"
                  placeholder="Kids"
                  className="h-10 rounded-md pl-9"
                  value={formData.kids}
                  onChange={(e) =>
                    setFormData({ ...formData, kids: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="space-y-2 text-sm flex flex-col">
              <span className="text-muted-foreground font-medium">
                Travel Date <span className="text-red-500 ml-0.5">*</span>
              </span>
              <Popover>
                <PopoverTrigger
                  className={cn(
                    "flex h-10 w-full items-center rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-9 relative text-left font-normal",
                    !formData.date && "text-muted-foreground",
                  )}
                >
                  <CalendarIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  {formData.date ? (
                    format(formData.date, "PPP")
                  ) : (
                    <span>dd-mm-yyyy</span>
                  )}
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={formData.date}
                    onSelect={(date) => setFormData({ ...formData, date })}
                    disabled={(date) => {
                      const today = new Date();
                      today.setHours(0, 0, 0, 0);
                      return date < today;
                    }}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {selectedPkg && pricePerPerson > 0 && totalPeople > 0 && (
            <div className="rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/5 p-4 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                    Estimated Price
                  </p>
                  <p className="text-2xl font-black text-foreground">
                    ₹{totalPrice.toLocaleString()}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-medium text-muted-foreground">
                    ₹{pricePerPerson.toLocaleString()} / person
                  </p>
                  <p className="text-xs font-medium text-muted-foreground">
                    For {totalPeople} {totalPeople === 1 ? "Person" : "People"}
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="space-y-2 text-sm flex flex-col">
            <span className="text-muted-foreground font-medium">
              Special Requests
            </span>
            <Textarea
              placeholder="Anything else you'd like us to know?"
              rows={4}
              className="rounded-md"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="mt-2 h-11 rounded-md"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" /> Processing...
              </>
            ) : success ? (
              <>
                <CheckCircle2 className="h-4 w-4" /> Request Sent
              </>
            ) : (
              <>
                <Send className="h-4 w-4" /> Confirm Booking
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default BookingForm;
