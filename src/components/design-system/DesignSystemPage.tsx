import { ArrowRight, CalendarDays, CheckCircle2, Clock3, Cloud, Mail, MapPin, ScanFace, ScanLine, ShieldCheck, UsersRound } from "lucide-react";
import logo from "@/assets/logo.png";
import heroImage from "@/assets/home/hero-clinician.webp";
import cloudImage from "@/assets/home/ortocloud-phone.webp";
import cbctImage from "@/assets/home/cbct-patient.webp";
import TokenSwatch from "@/components/design-system/TokenSwatch";
import SpecimenSection from "@/components/design-system/SpecimenSection";
import { SiteLink } from "@/components/site/SiteLink";
import { homeContent } from "@/content/home";
import { KEFALOGRAM_SRC, ORTOPANTOMOGRAM_SRC } from "@/content/usluge/images";
import Footer from "@/components/site/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/site/ui/tabs";

const colors = [
  ["Primary / Magenta", "--od-magenta", "#D51155"], ["Magenta Dark", "--od-magenta-dark", "#A11346"], ["Magenta Light", "--od-magenta-light", "#FBE7EE"], ["Dark / Text", "--od-graphite", "#1A1A1A"],
  ["Gray 700", "--od-gray-700", "#333333"], ["Gray 500", "--od-gray-500", "#686868"], ["Gray 300", "--od-gray-300", "#E5E5E5"], ["Off White", "--od-off-white", "#FAFAFA"],
] as const;

const cards = [
  [ORTOPANTOMOGRAM_SRC, "2D snimanja", "Panoramski i retroalveolarni snimci za brzu, pouzdanu i sigurnu dijagnozu.", "/usluge/2d"],
  [cbctImage.src, "3D snimanja / CBCT", "CBCT volumni snimci visoke rezolucije za precizno planiranje lečenja.", "/usluge/3d"],
  [KEFALOGRAM_SRC, "Kefalometrijske analize", "Detaljne analize za ortodontsko planiranje i praćenje rasta.", "/usluge/kefalometrija"],
] as const;

export default function DesignSystemPage() {
  return (
    <main className="oc-ds">
      <div className="oc-ds__shell">
        <header className="oc-ds__header">
          <SiteLink to="/" className="oc-logo"><img src={logo.src} alt="OrtoDent" /></SiteLink>
          <div><h1>DIZAJN SISTEM</h1><p>Verzija 1.1 — Septembar 2026</p></div>
        </header>

        <div className="oc-ds__grid">
          <div className="oc-ds__column">
            <SpecimenSection number="01" title="Boje"><div className="oc-swatches">{colors.map(([name, token, value]) => <TokenSwatch key={name} name={name} token={token} value={value} />)}</div></SpecimenSection>

            <SpecimenSection number="02" title="Tipografija">
              <div className="oc-type-specimen">
                <div><strong style={{ fontSize: 44 }}>Aa</strong><p className="oc-type-specimen__display">Precizna 2D i<br />3D dijagnostika<span className="oc-dot">.</span></p></div>
                <div className="oc-type-specimen__meta"><strong>Inter Variable</strong><span>H1 / 56–68px / 500</span><span>H2 / 40–48px / 500</span><span>H3 / 20–28px / 600</span><span>Body Large / 18–20px / 400</span><span>Body / 16–17px / 400</span><span>Small / 12–14px / 500</span></div>
                <p className="oc-type-specimen__alphabet">ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />abcdefghijklmnopqrstuvwxyz<br />0123456789 @#$%&amp;*()</p>
              </div>
            </SpecimenSection>

            <SpecimenSection number="03" title="Ikone"><div className="oc-icon-row"><ScanLine /><ScanFace /><CalendarDays /><Clock3 /><UsersRound /><ShieldCheck /><Cloud /><MapPin /><Mail /><CheckCircle2 /><ArrowRight /></div></SpecimenSection>

            <SpecimenSection number="04" title="Komponente">
              <div className="oc-component-grid">
                <div><h3>Buttons</h3><div className="oc-component-stack"><SiteLink className="oc-button oc-button--primary" to="/lokacije">Pronađite centar <ArrowRight /></SiteLink><SiteLink className="oc-text-link" to="/usluge/2d">Pogledajte usluge <ArrowRight /></SiteLink></div></div>
                <div><h3>Inputs</h3><div className="oc-ds-field"><label htmlFor="ds-email">Email adresa</label><input id="ds-email" className="oc-ds-input" placeholder="Unesite email" /></div><div className="oc-ds-field"><label htmlFor="ds-password">Lozinka</label><input id="ds-password" className="oc-ds-input" placeholder="Unesite lozinku" type="password" /></div></div>
                <div style={{ gridColumn: "1 / -1" }}><h3>Badges / labels</h3><div className="oc-component-stack"><span className="oc-ds-badge">2D dijagnostika</span><span className="oc-ds-badge">3D dijagnostika</span><span className="oc-ds-badge">OrtoCloud</span></div></div>
                <div style={{ gridColumn: "1 / -1" }}><h3>Tabs / nav / divider</h3><Tabs defaultValue="2d" className="oc-ds-tabs"><TabsList><TabsTrigger value="2d">2D snimanja</TabsTrigger><TabsTrigger value="3d">3D snimanja</TabsTrigger><TabsTrigger value="kefalo">Kefalometrija</TabsTrigger><TabsTrigger value="cloud">OrtoCloud</TabsTrigger></TabsList><TabsContent value="2d">Panoramski i retroalveolarni snimci.</TabsContent><TabsContent value="3d">CBCT snimanja visoke rezolucije.</TabsContent><TabsContent value="kefalo">Precizne kefalometrijske analize.</TabsContent><TabsContent value="cloud">Bezbedan pristup digitalnim rezultatima.</TabsContent></Tabs><div className="oc-ds-divider" /></div>
              </div>
            </SpecimenSection>

            <SpecimenSection number="05" title="Kartice"><div className="oc-ds-card-row">{cards.map(([image, title, description, href]) => <article className="oc-ds-card" key={title}><img src={image} alt="" loading="lazy" decoding="async" /><div><h3>{title}</h3><p>{description}</p><SiteLink to={href}>Saznajte više →</SiteLink></div></article>)}</div></SpecimenSection>
          </div>

          <div className="oc-ds__column">
            <SpecimenSection number="06" title="Hero layout">
              <div className="oc-ds-hero"><img src={heroImage.src} alt="" loading="lazy" decoding="async" /><div className="oc-ds-hero__copy"><h2>Precizna 2D i<br />3D dijagnostika<span className="oc-dot">.</span></h2><p>13 centara. Bez zakazivanja.<br />Rezultati dostupni putem OrtoClouda.</p><SiteLink className="oc-button oc-button--primary" to="/lokacije">Pronađite najbliži centar <ArrowRight /></SiteLink></div></div>
            </SpecimenSection>

            <SpecimenSection number="07" title="Info strip (features)"><div className="oc-ds-info"><div><CalendarDays /><span><strong>Bez zakazivanja</strong><small>Dođite direktno u najbliži centar.</small></span></div><div><Clock3 /><span><strong>5–15 min</strong><small>Prosečno trajanje snimanja.</small></span></div><div><UsersRound /><span><strong>Bez posebne pripreme</strong><small>Za većinu snimanja priprema nije potrebna.</small></span></div></div></SpecimenSection>

            <SpecimenSection number="08" title="Statistike"><div className="oc-ds-stats"><div><strong>13</strong><small>centara</small></div><div><strong>500K+</strong><small>snimaka</small></div><div><strong>17</strong><small>godina iskustva</small></div></div></SpecimenSection>

            <SpecimenSection number="09" title="Testimonial card"><div className="oc-ds-review"><blockquote>“{homeContent.reviews[0][1]}”<footer><strong>{homeContent.reviews[0][0]}</strong><br /><small>Verifikovana kopija iz produkcionog sadržaja</small></footer></blockquote></div></SpecimenSection>

            <SpecimenSection number="10" title="OrtoCloud promo"><div className="oc-ds-hero"><img src={cloudImage.src} alt="" loading="lazy" decoding="async" /><div className="oc-ds-hero__copy" style={{ marginLeft: "auto" }}><h2>Vaši snimci,<br /><span className="oc-dot">uvek dostupni!</span></h2><p>Pristupite svojim snimcima bilo kada i bilo gde.</p><SiteLink className="oc-button oc-button--primary" to="/ortocloud">Više o OrtoCloudu <Cloud /></SiteLink></div></div></SpecimenSection>

            <SpecimenSection number="11" title="Footer"><div className="oc-ds-footer-preview"><Footer /></div></SpecimenSection>

            <SpecimenSection number="12" title="Spacing & grid"><div className="oc-ds-rules"><div><strong>Grid</strong>12 kolona, fluid gutter 20–48px, max-width 1280px.</div><div><strong>Section rhythm</strong>72–128px između glavnih celina.</div></div><div className="oc-ds-scale" style={{ marginTop: 22 }}>{[4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 112, 128].map((value) => <div key={value}><i style={{ width: value, height: Math.max(4, value / 5) }} /><span>{value}px</span></div>)}</div></SpecimenSection>

            <SpecimenSection number="13" title="Radius"><div className="oc-ds-scale oc-ds-radius">{[8, 10, 14, 18].map((value) => <div key={value}><i style={{ borderRadius: value }} /><span>{value}px</span></div>)}</div></SpecimenSection>

            <SpecimenSection number="14" title="Shadows"><div className="oc-ds-scale oc-ds-shadows"><div style={{ boxShadow: "var(--od-shadow-sm)" }}><strong>sm</strong><span>Diskretno odvajanje</span></div><div style={{ boxShadow: "var(--od-shadow-md)" }}><strong>md</strong><span>Samo za overlay i meni</span></div></div></SpecimenSection>

            <SpecimenSection number="15" title="Smernice upotrebe"><div className="oc-ds-guidelines"><p>Magenta je akcenat za akcije, ikone i aktivna stanja — ne za cele naslove.</p><p>Fotografije ostaju prirodne, svetle i medicinski relevantne.</p><p>H1/H2 su umerene težine; H3 i labele nose funkcionalnu hijerarhiju.</p><p>Interakcije imaju vidljiv fokus i najmanje 44px dodirnu zonu.</p><p>Struktura se gradi razmakom i linijama; senke su izuzetak.</p><p>Sadržaj je vidljiv i bez JavaScript animacija.</p></div></SpecimenSection>

            <SpecimenSection number="16" title="Page intro patterns"><div className="oc-ds-guidelines"><p><strong>Editorial</strong><br />Eyebrow, veliki monohromatski H1, uvodni tekst i medij.</p><p><strong>Utility</strong><br />Centriran naslov i kratko objašnjenje za informacije, cenovnik i forme.</p><p><strong>Location</strong><br />Breadcrumb, naziv područja ili centra, adresa i jedna grupa akcija.</p><p><strong>Rule</strong><br />Samo tačka, kratka fraza ili aktivno stanje dobija magentu.</p></div></SpecimenSection>

            <SpecimenSection number="17" title="Forms & notices"><div className="oc-component-grid"><div><h3>Polje forme</h3><div className="oc-ds-field"><label htmlFor="ds-name">Ime i prezime</label><input id="ds-name" className="oc-ds-input" placeholder="Vaše ime i prezime" /></div></div><div><h3>Info surface</h3><div className="oc-ds-rules"><div><strong>Bez zakazivanja</strong>Neutralna ili svetlo-roze površina, bez dekorativne senke.</div></div></div></div></SpecimenSection>
          </div>
        </div>
      </div>
    </main>
  );
}
