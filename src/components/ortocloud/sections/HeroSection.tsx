import { Button } from "@/components/ui/button";
import heroMockup from "@/assets/ortocloud/hero-mockup.png";

export default function HeroSection() {
  const imageSrc = typeof heroMockup === "string" ? heroMockup : heroMockup.src;
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 gradient-glow pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-accent/10 rounded-full blur-2xl animate-pulse-glow pointer-events-none" style={{ animationDelay: "1s" }} />
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground animate-fade-in">
                Vaša dijagnostika.<br /><span className="text-foreground">Trenutna. Sigurna.</span><br /><span className="text-muted-foreground">Bilo gde.</span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Napredna platforma za arhiviranje, pregled i deljenje dentalnih snimaka. Povezujemo stomatologe, pacijente i radiološke centre u jedan klik.
              </p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}><Button size="xl" className="shadow-medium">Registracija</Button></div>
          </div>
          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative z-10 animate-float"><img src={imageSrc} alt="OrtoCloud platforma na MacBook i iPhone uređajima" className="w-full h-auto rounded-2xl shadow-glow" /></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent/30 rounded-full blur-2xl" />
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-accent/20 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
