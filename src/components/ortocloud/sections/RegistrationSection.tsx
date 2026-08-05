import { useState, type ChangeEvent, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

export default function RegistrationSection() {
  const [formData, setFormData] = useState({ name: "", clinic: "", email: "", phone: "", password: "", confirmPassword: "" });
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => setFormData((previous) => ({ ...previous, [event.target.name]: event.target.value }));
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) { toast({ title: "Greška", description: "Lozinke se ne podudaraju.", variant: "destructive" }); return; }
    toast({ title: "Uspešno!", description: "Vaš zahtev za registraciju je poslat. Kontaktiraćemo vas uskoro." });
  };
  return <section id="registracija" className="py-20 lg:py-32 bg-background"><div className="container mx-auto px-4 lg:px-8"><div className="max-w-2xl mx-auto"><div className="bg-card rounded-2xl shadow-medium border-2 border-accent/30 p-8 lg:p-12 animate-fade-in">
    <div className="text-center mb-10"><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Još uvek nemate nalog?</h2><p className="text-muted-foreground">Otvaranje naloga je besplatno i traje manje od minuta.</p></div>
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6"><div className="space-y-2"><Label htmlFor="name">Ime i prezime</Label><Input id="name" name="name" placeholder="Vaše ime i prezime" value={formData.name} onChange={handleChange} required /></div><div className="space-y-2"><Label htmlFor="clinic">Naziv Ordinacije</Label><Input id="clinic" name="clinic" placeholder="Naziv vaše ordinacije" value={formData.clinic} onChange={handleChange} required /></div></div>
      <div className="grid md:grid-cols-2 gap-6"><div className="space-y-2"><Label htmlFor="email">Email Adresa</Label><Input id="email" name="email" type="email" placeholder="vas@email.com" value={formData.email} onChange={handleChange} required /></div><div className="space-y-2"><Label htmlFor="phone">Telefon</Label><Input id="phone" name="phone" type="tel" placeholder="+381 6X XXX XXX" value={formData.phone} onChange={handleChange} required /></div></div>
      <div className="grid md:grid-cols-2 gap-6"><div className="space-y-2"><Label htmlFor="password">Željena lozinka</Label><Input id="password" name="password" type="password" placeholder="••••••••" value={formData.password} onChange={handleChange} required minLength={8} /></div><div className="space-y-2"><Label htmlFor="confirmPassword">Ponovite željenu lozinku</Label><Input id="confirmPassword" name="confirmPassword" type="password" placeholder="••••••••" value={formData.confirmPassword} onChange={handleChange} required minLength={8} /></div></div>
      <Button type="submit" size="xl" className="w-full">Otvorite nalog</Button>
    </form>
  </div></div></div></section>;
}
