import { useState, type ChangeEvent, type FormEvent } from "react";
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [supportForm, setSupportForm] = useState({ name: "", email: "", message: "" });
  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setSupportForm((previous) => ({ ...previous, [event.target.name]: event.target.value }));
  const handleSubmit = (event: FormEvent) => { event.preventDefault(); toast({ title: "Poruka poslata!", description: "Hvala Vam na poruci. Odgovorićemo Vam u najkraćem roku." }); setSupportForm({ name: "", email: "", message: "" }); };
  return <section id="kontakt" className="py-20 lg:py-32 bg-accent-light"><div className="container mx-auto px-4 lg:px-8"><div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
    <div className="animate-fade-in"><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Tehnička Podrška</h2><p className="text-muted-foreground mb-8">Imate poteškoća sa priliko pristupa? Pošaljite nam poruku i rešićemo problem u najkraćem roku.</p><div className="bg-card rounded-2xl shadow-medium p-6 lg:p-8"><form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2"><Label htmlFor="support-name">Ime i prezime</Label><Input id="support-name" name="name" placeholder="Vaše ime i prezime" value={supportForm.name} onChange={handleChange} required /></div>
      <div className="space-y-2"><Label htmlFor="support-email">Vaš Email</Label><Input id="support-email" name="email" type="email" placeholder="vas@email.com" value={supportForm.email} onChange={handleChange} required /></div>
      <div className="space-y-2"><Label htmlFor="support-message">Opišite problem</Label><Textarea id="support-message" name="message" placeholder="npr. zaboravljena lozinka, greška pri učitavanju..." value={supportForm.message} onChange={handleChange} required rows={5} /></div>
      <Button type="submit" size="lg" className="w-full">Pošalji</Button>
    </form></div></div>
    <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Kontakt</h2><p className="text-muted-foreground mb-8">Imate pitanja ili predlog? Tu smo da odgovorimo na sve vaše zahteve.</p><div className="bg-card rounded-2xl shadow-medium p-6 lg:p-8 space-y-6">
      <div className="flex items-start gap-4"><div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0"><Mail className="w-6 h-6 text-accent-foreground" /></div><div><h3 className="font-semibold text-foreground mb-1">Email</h3><a href="mailto:info@ortodent.rs" className="text-muted-foreground hover:text-foreground transition-colors">info@ortodent.rs</a></div></div>
      <div className="flex items-start gap-4"><div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0"><Phone className="w-6 h-6 text-accent-foreground" /></div><div><h3 className="font-semibold text-foreground mb-1">Telefon</h3><a href="tel:+3816XXXXXXX" className="text-muted-foreground hover:text-foreground transition-colors">+381 6X XXX XXX</a></div></div>
    </div></div>
  </div></div></section>;
}
