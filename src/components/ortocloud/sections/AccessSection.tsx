import { AlertCircle, Briefcase, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AccessSection() {
  return <section id="nalog" className="py-20 lg:py-32 bg-secondary"><div className="container mx-auto px-4 lg:px-8">
    <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">Kako pristupiti OrtoCloudu?</h2></div>
    <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
      <div className="bg-card rounded-2xl p-8 shadow-soft animate-fade-in"><div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-6"><User className="w-7 h-7 text-accent-foreground" /></div><h3 className="text-2xl font-semibold text-foreground mb-4">Za Pacijente<span className="block text-base font-normal text-muted-foreground mt-1">(Automatski Pristup)</span></h3><div className="bg-accent/10 border border-accent/30 rounded-xl p-4 mb-6 flex items-start gap-3"><AlertCircle className="w-5 h-5 text-accent-foreground flex-shrink-0 mt-0.5" /><p className="text-sm text-foreground font-medium">Važna napomena: Ne morate sami kreirati nalog.</p></div><p className="text-muted-foreground leading-relaxed">Vaš nalog se automatski kreira prilikom snimanja u našem centru. Pristupne podatke (korisničko ime i lozinku) dobijate odmah putem e-maila ili SMS-a. Jednostavno se ulogujte i Vaši snimci su tu.</p></div>
      <div className="bg-card rounded-2xl p-8 shadow-soft animate-fade-in" style={{ animationDelay: "0.1s" }}><div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-6"><Briefcase className="w-7 h-7 text-accent-foreground" /></div><h3 className="text-2xl font-semibold text-foreground mb-4">Za Stomatologe<span className="block text-base font-normal text-muted-foreground mt-1">(Partnerstvo)</span></h3><p className="text-muted-foreground leading-relaxed mb-6">Želite pristup snimcima Vaših pacijenata? Ordinacije mogu otvoriti partnerski nalog kako bi svi snimci njihovih pacijenata stizali direktno u njihov digitalni karton.</p><Button size="lg">Registruj Ordinaciju</Button></div>
    </div>
  </div></section>;
}
