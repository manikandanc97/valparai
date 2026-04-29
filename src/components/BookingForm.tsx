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
    people: "",
    date: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Create WhatsApp message
    const whatsappMessage = encodeURIComponent(
      `*New Booking Request - Valparai Wanderer*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Package:* ${formData.package}\n` +
      `*Guests:* ${formData.people}\n` +
      `*Date:* ${formData.date || "Flexible"}\n` +
      `*Message:* ${formData.message || "None"}`
    );

    // Send to WhatsApp
    window.open(`https://wa.me/917904199605?text=${whatsappMessage}`, "_blank");

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({ name: "", phone: "", package: "", people: "", date: "", message: "" });
      setTimeout(() => setSuccess(false), 3000);
    }, 1000);
  };

  return (
    <Card className="rounded-2xl border-border/70 py-0 shadow-sm">
      <CardHeader className="border-b bg-muted/30 px-6 py-6">
        <Badge className="mb-3 w-fit bg-[#D4AF37] text-[#1A3021]">Reservation</Badge>
        <CardTitle className="text-2xl font-semibold text-foreground">Book your trip</CardTitle>
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
                <Input required placeholder="Your Name" className="h-10 rounded-md pl-9" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              </div>
            </label>
            <label className="space-y-2 text-sm">
              <span className="text-muted-foreground">Phone Number</span>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input required placeholder="+91 Phone" className="h-10 rounded-md pl-9" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
              </div>
            </label>
          </div>

          <label className="space-y-2 text-sm">
            <span className="text-muted-foreground">Package</span>
            <div className="relative">
              <Map className="absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Select value={formData.package} onValueChange={(val) => setFormData({ ...formData, package: val || "" })}>
                <SelectTrigger className="h-10 w-full rounded-md pl-9">
                  <SelectValue placeholder="Choose package" />
                </SelectTrigger>
                <SelectContent>
                  {tourPackages.map((pkg) => (
                    <SelectItem key={pkg.id} value={pkg.title}>{pkg.title}</SelectItem>
                  ))}
                  <SelectItem value="Custom Tour">Custom Tailored Tour</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </label>

          <div className="grid gap-5 md:grid-cols-2">
            <label className="space-y-2 text-sm">
              <span className="text-muted-foreground">Guests</span>
              <div className="relative">
                <UsersIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input type="number" min="1" placeholder="People" className="h-10 rounded-md pl-9" value={formData.people} onChange={(e) => setFormData({ ...formData, people: e.target.value })} />
              </div>
            </label>
            <label className="space-y-2 text-sm">
              <span className="text-muted-foreground">Travel Date</span>
              <div className="relative">
                <CalendarIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input type="date" className="h-10 rounded-md pl-9" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
              </div>
            </label>
          </div>

          <label className="space-y-2 text-sm">
            <span className="text-muted-foreground">Special Requests</span>
            <Textarea placeholder="Anything else you'd like us to know?" rows={4} className="rounded-md" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
          </label>

          <Button type="submit" disabled={loading} className="mt-2 h-11 rounded-md bg-[#1A3021] hover:bg-[#132619]">
            {loading ? (
              <><Loader2 className="h-4 w-4 animate-spin" /> Processing...</>
            ) : success ? (
              <><CheckCircle2 className="h-4 w-4" /> Request Sent</>
            ) : (
              <><Send className="h-4 w-4" /> Confirm Booking</>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default BookingForm;
