export default function Footer() {
  return <footer className="py-12 bg-primary text-primary-foreground"><div className="container mx-auto px-4 lg:px-8"><div className="flex flex-col md:flex-row items-center justify-between gap-6">
    <div className="text-2xl font-bold">OrtoCloud</div>
    <div className="flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/70"><a href="#home" className="hover:text-primary-foreground transition-colors">Početna</a><a href="#funkcije" className="hover:text-primary-foreground transition-colors">Funkcije</a><a href="#preuzmi" className="hover:text-primary-foreground transition-colors">Preuzmi</a><a href="#kontakt" className="hover:text-primary-foreground transition-colors">Kontakt</a></div>
    <div className="text-sm text-primary-foreground/50">© {new Date().getFullYear()} OrtoCloud. Sva prava zadržana.</div>
  </div></div></footer>;
}
