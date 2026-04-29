"use client";

import { useState } from "react";
import { User, Phone, Map, Users as UsersIcon, Calendar as CalendarIcon, MessageSquare, Send, Loader2, CheckCircle2 } from "lucide-react";
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
    <div className="bg-card rounded-[3rem] p-10 sm:p-16 shadow-premium border border-slate-100 dark:border-white/5 relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent via-primary to-accent opacity-50" />
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="text-center space-y-5">
          <Badge className="bg-primary/5 text-primary border-primary/10 px-6 py-2 rounded-full font-black text-[10px] uppercase tracking-[0.2em] shadow-sm">
            Reservation
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-black text-primary-dark tracking-tighter">Secure Your <span className="text-gradient">Tour</span></h2>
          <p className="text-slate-500 font-medium text-lg max-w-lg mx-auto leading-relaxed">Fill in the details below and our experts will contact you via WhatsApp to finalize your custom itinerary.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Full Name</label>
              <div className="relative group/input">
                <User className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 transition-colors group-focus-within/input:text-primary" />
                <Input
                  required
                  placeholder="Your Name"
                  className="pl-14 h-16 bg-secondary-subtle border-none rounded-2xl font-bold text-primary focus:ring-2 focus:ring-primary shadow-sm"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Phone Number</label>
              <div className="relative group/input">
                <Phone className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 transition-colors group-focus-within/input:text-primary" />
                <Input
                  required
                  placeholder="+91 Phone"
                  className="pl-14 h-16 bg-secondary-subtle border-none rounded-2xl font-bold text-primary focus:ring-2 focus:ring-primary shadow-sm"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Select Adventure</label>
            <div className="relative group/input">
              <Map className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 z-10" />
              <Select value={formData.package} onValueChange={(val) => setFormData({ ...formData, package: val || "" })}>
                <SelectTrigger className="pl-14 h-16 bg-secondary-subtle border-none rounded-2xl font-black text-primary focus:ring-2 focus:ring-primary shadow-sm">
                  <SelectValue placeholder="Choose your adventure" />
                </SelectTrigger>
                <SelectContent className="rounded-2xl border-none shadow-premium p-2">
                  {tourPackages.map((pkg) => (
                    <SelectItem key={pkg.id} value={pkg.title} className="font-bold rounded-xl focus:bg-primary/5">{pkg.title}</SelectItem>
                  ))}
                  <SelectItem value="Custom Tour" className="font-bold rounded-xl focus:bg-primary/5">Custom Tailored Tour</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Total Guests</label>
              <div className="relative group/input">
                <UsersIcon className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 transition-colors group-focus-within/input:text-primary" />
                <Input
                  type="number"
                  min="1"
                  placeholder="People"
                  className="pl-14 h-16 bg-secondary-subtle border-none rounded-2xl font-bold text-primary focus:ring-2 focus:ring-primary shadow-sm"
                  value={formData.people}
                  onChange={(e) => setFormData({ ...formData, people: e.target.value })}
                />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Travel Date</label>
              <div className="relative group/input">
                <CalendarIcon className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 transition-colors group-focus-within/input:text-primary" />
                <Input
                  type="date"
                  className="pl-14 h-16 bg-secondary-subtle border-none rounded-2xl font-bold text-primary focus:ring-2 focus:ring-primary shadow-sm"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Special Requests</label>
            <Textarea
              placeholder="Anything else you'd like us to know?"
              rows={4}
              className="bg-secondary-subtle p-6 border-none rounded-3xl font-bold text-primary focus:ring-2 focus:ring-primary shadow-sm resize-none"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full h-20 rounded-3xl bg-primary hover:bg-primary-dark font-black text-white text-xl shadow-premium transition-all gap-4 btn-premium"
          >
            {loading ? (
              <><Loader2 className="h-7 w-7 animate-spin" /> Processing...</>
            ) : success ? (
              <><CheckCircle2 className="h-7 w-7 text-accent" /> Request Sent Successfully!</>
            ) : (
              <><Send className="h-7 w-7" /> Confirm Booking Request</>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
