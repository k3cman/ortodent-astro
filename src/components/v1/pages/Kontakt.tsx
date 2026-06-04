import { useState } from "react";
import { VersionLink } from "@/components/v1/VersionContext";
import { motion } from "framer-motion";
import { Facebook, Instagram, Mail, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const WRITING_AS_OPTIONS = ["Stomatologa", "Pacijenta"] as const;

const socialLinks = [
  {
    href: "#",
    label: "Instagram",
    icon: Instagram,
  },
  {
    href: "#",
    label: "Facebook",
    icon: Facebook,
  },
] as const;

const Kontakt = () => {
  const { toast } = useToast();
  const [writingAs, setWritingAs] = useState<string>("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!writingAs) {
      toast({
        title: "Izaberite u kojem svojstvu pišete",
        description: "Molimo izaberite Stomatologa ili Pacijenta.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Poruka poslata!",
      description: "Odgovorićemo vam u najkraćem roku.",
    });
    setWritingAs("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-28 md:pt-32">
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mb-10 md:mb-12 lg:mb-14"
            >
              <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                Kontakt
              </h1>
            </motion.div>

            <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
              {/* Left column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="space-y-8"
              >
                <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-[2.25rem] lg:leading-snug">
                  Tu smo da odgovorimo na Vaša pitanja, pružimo dodatne
                  informacije i podržimo Vas u korišćenju naših usluga.
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  Ostanite informisani o svim novostima i promenama u radu naših
                  centara putem naših zvaničnih profila.
                </p>
                <div>
                  <p className="mb-3 text-sm font-semibold text-foreground">
                    Pratite nas
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map(({ href, label, icon: Icon }) => (
                      <a
                        key={label}
                        href={href}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary hover:bg-primary/5 hover:text-primary"
                        aria-label={label}
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right column — form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="soft-card p-6 md:p-8"
              >
                <h2 className="mb-6 text-xl font-bold text-foreground">
                  Pošaljite nam poruku
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label className="text-sm text-foreground">
                      Pišem u svojstvu <span className="text-primary">*</span>
                    </Label>
                    <Select value={writingAs} onValueChange={setWritingAs}>
                      <SelectTrigger className="h-11">
                        <SelectValue placeholder="Izaberite..." />
                      </SelectTrigger>
                      <SelectContent>
                        {WRITING_AS_OPTIONS.map((opt) => (
                          <SelectItem key={opt} value={opt}>
                            {opt}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm text-foreground">
                      Email <span className="text-primary">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="vas@email.rs"
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-sm text-foreground"
                    >
                      Poruka <span className="text-primary">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Vaša poruka..."
                      className="min-h-[160px] resize-y"
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="glow"
                    size="lg"
                    className="w-full gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Pošalji
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="w-full text-center py-10 md:py-12">
          <div className="container mx-auto px-6">
            <p className="rounded-xl border border-primary/15 bg-primary/5 p-6 text-sm leading-relaxed text-foreground">
              Potrebne su Vam informacije o radnom vremenu ili direktan kontakt
              sa centrom? Sve brojeve telefona i adrese po gradovima možete
              pronaći na stranici{" "}
              <VersionLink
                to="/lokacije"
                className="font-medium text-primary hover:underline"
              >
                Lokacije
              </VersionLink>
              .
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

import { withVersion } from "@/components/v1/withVersion";

export default withVersion(Kontakt);
