import { Cloud, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import { SiteLink } from "@/components/site/SiteLink";

export default function Footer() {
  return (
    <footer className="oc-footer">
      <div className="oc-container">
        <div className="oc-footer__grid">
          <div className="oc-footer__brand">
            <SiteLink to="/" className="oc-logo oc-logo--dark"><img src={logo.src} alt="OrtoDent" /></SiteLink>
            <p>Lider u dentalnoj radiologiji sa preko 17 godina iskustva. Najsavremenija tehnologija za Vašu dijagnostiku.</p>
            <SiteLink to="/lokacije" className="oc-footer__contact"><MapPin /> Beograd · Novi Sad · Pančevo</SiteLink>
          </div>
          <div><h2>Brzi linkovi</h2><nav><SiteLink to="/lokacije">Lokacije</SiteLink><SiteLink to="/cenovnik">Cenovnik</SiteLink><SiteLink to="/za-doktore">Za stomatologe</SiteLink><SiteLink to="/informacije">Informacije</SiteLink><SiteLink to="/kontakt">Kontakt</SiteLink></nav></div>
          <div><h2>Usluge</h2><nav><SiteLink to="/usluge/2d">2D snimanja</SiteLink><SiteLink to="/usluge/3d">3D CBCT</SiteLink><SiteLink to="/usluge/kefalometrija">Kefalometrija</SiteLink><SiteLink to="/ortocloud">OrtoCloud</SiteLink></nav></div>
          <div className="oc-footer__cloud"><h2>OrtoCloud</h2><p>Digitalna platforma za moderne ordinacije.</p><SiteLink to="/ortocloud">Saznajte više <Cloud /></SiteLink><a href="mailto:info@ortodent.rs"><Mail /> info@ortodent.rs</a><SiteLink to="/kontakt">Kontaktirajte nas</SiteLink></div>
        </div>
        <div className="oc-footer__bottom"><span>© 2026 OrtoDent. Sva prava zadržana.</span><span>Dentalna radiologija u 13 centara</span></div>
      </div>
    </footer>
  );
}
