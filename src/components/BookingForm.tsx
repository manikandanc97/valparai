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
import { tourPackages } from "@/lib/tour-data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BookingForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    package: "",
    adults: "",
    kids: "",
    date: undefined as Date | undefined,
    message: "",
  });

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
        adults: "",
        kids: "",
        date: undefined,
        message: "",
      });
      setTimeout(() => setSuccess(false), 3000);
    }, 1000);
  };

  return (
    <Card className="rounded-2xl border-border/70 py-0 shadow-sm">
      <CardHeader className="border-b bg-muted/30 px-6 py-6">
        <Badge className="mb-3 w-fit bg-[#D4AF37] text-[#1A3021]">
          Reservation
        </Badge>
        <CardTitle className="text-2xl font-semibold text-foreground">
          Book your trip
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Submit your details and our team will confirm on WhatsApp.
        </p>
      </CardHeader>
      <CardContent className="px-6 py-6">
        <form onSubmit={handleSubmit} className="grid gap-5">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="space-y-2 text-sm">
              <span className="text-muted-foreground">Full Name</span>
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
            </label>
            <label className="space-y-2 text-sm">
              <span className="text-muted-foreground">Phone Number</span>
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
            </label>
          </div>

          <label className="space-y-2 text-sm">
            <span className="text-muted-foreground">Package</span>
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
          </label>

          <div className="grid gap-5 md:grid-cols-3">
            <label className="space-y-2 text-sm">
              <span className="text-muted-foreground">Adults</span>
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
            </label>
            <label className="space-y-2 text-sm">
              <span className="text-muted-foreground">Kids</span>
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
            </label>
            <div className="space-y-2 text-sm flex flex-col">
              <span className="text-muted-foreground font-medium">
                Travel Date
              </span>
              <Popover>
                <PopoverTrigger
                  className={cn(
                    "inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 h-10 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground w-full justify-start text-left font-normal px-4 py-2 pl-9 relative",
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

          <label className="space-y-2 text-sm">
            <span className="text-muted-foreground">Special Requests</span>
            <Textarea
              placeholder="Anything else you'd like us to know?"
              rows={4}
              className="rounded-md"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </label>

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
