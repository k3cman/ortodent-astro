import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Cloud, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/logo.png";
import { VersionLink } from "@/components/v1/VersionContext";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = [
    { name: "Cenovnik", href: "/cenovnik", isRoute: true },
    { name: "Informacije", href: "/informacije", isRoute: true },
    { name: "Za stomatologe", href: "/za-doktore", isRoute: true },
    { name: "Lokacije", href: "/lokacije", isRoute: true },
    { name: "Kontakt", href: "/kontakt", isRoute: true },
  ];

  const uslugeItems = [
    { name: "2D Snimanje", href: "/usluge/2d" },
    { name: "3D Snimanje", href: "/usluge/3d" },
    { name: "Kefalometrija", href: "/usluge/kefalometrija" },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/30"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <VersionLink to="/" className="flex items-center gap-2">
          <img
            src={typeof logo === "string" ? logo : logo.src}
            alt="logo"
            className="h-10"
          />
        </VersionLink>

        {/* Navigation - Desktop */}
        <nav className="hidden lg:flex items-center gap-8">
          {/* Usluge Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-semibold">
                Usluge
                <ChevronDown className="w-4 h-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="w-48 bg-card border border-border shadow-raised"
            >
              {uslugeItems.map((item) => (
                <DropdownMenuItem key={item.name} asChild>
                  <VersionLink
                    to={item.href}
                    className="cursor-pointer hover:bg-muted hover:text-foreground"
                  >
                    {item.name}
                  </VersionLink>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {navItems.map((item) => (
            <VersionLink
              key={item.name}
              to={item.href}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-[15px] font-semibold"
            >
              {item.name}
            </VersionLink>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <Button variant="default" size="sm" className="rounded-full" asChild>
            <VersionLink to="/ortocloud">
              <Cloud className="w-4 h-4" />
              OrtoCloud
            </VersionLink>
          </Button>
          {/* Mobile menu toggle */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-background border-t border-border/30"
        >
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-4">
            <VersionLink
              to="/usluge/2d"
              className="text-foreground hover:text-secondary transition-colors text-sm font-semibold py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Usluge
            </VersionLink>
            {navItems.map((item) => (
              <VersionLink
                key={item.name}
                to={item.href}
                className="text-foreground hover:text-secondary transition-colors text-sm font-semibold py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </VersionLink>
            ))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
