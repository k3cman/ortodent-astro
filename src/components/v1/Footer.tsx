import { motion } from "framer-motion";
import { Facebook, Instagram, Mail } from "lucide-react";
import logo from "@/assets/logo.png";
import { MAIN_NAV, USLUGE_NAV } from "@/content/nav";
import { VersionLink, useVersion } from "@/components/v1/VersionContext";
import { vPath } from "@/lib/paths";

const Footer = () => {
  const version = useVersion();

  return (
    <footer className="bg-charcoal text-primary-foreground relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 gradient-accent-line" />

      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <VersionLink to="/" className="inline-flex items-center gap-2">
              <img
                src={typeof logo === "string" ? logo : logo.src}
                alt="logo"
                className="h-10"
              />
            </VersionLink>
            <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs">
              Lider u dentalnoj radiologiji sa preko 17 godina iskustva.
              Najsavremenija tehnologija za Vašu dijagnostiku.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="font-bold text-lg">Brzi Linkovi</h4>
            <ul className="space-y-3">
              {MAIN_NAV.map((link) => (
                <li key={link.name}>
                  <VersionLink
                    to={link.path}
                    className="text-primary-foreground/60 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </VersionLink>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="font-bold text-lg">Usluge</h4>
            <ul className="space-y-3">
              {USLUGE_NAV.map((service) => (
                <li key={service.name}>
                  <VersionLink
                    to={service.path}
                    className="text-primary-foreground/60 hover:text-accent transition-colors text-sm"
                  >
                    {service.name}
                  </VersionLink>
                </li>
              ))}
              <li>
                <a
                  href={`${vPath(version, "/")}#ortocloud`}
                  className="text-primary-foreground/60 hover:text-accent transition-colors text-sm"
                >
                  OrtoCloud
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 py-6">
          <p className="text-center text-sm text-primary-foreground/40">
            © 2026 OrtoDent. Sva prava zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
