import { useState, type ChangeEvent, type FormEvent } from "react";
import { Building2, Check } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export default function RegistrationSection() {
  const [formData, setFormData] = useState({ name: "", clinic: "", email: "", phone: "", password: "", confirmPassword: "" });
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => setFormData((previous) => ({ ...previous, [event.target.name]: event.target.value }));
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) { toast({ title: "Greška", description: "Lozinke se ne podudaraju.", variant: "destructive" }); return; }
    toast({ title: "Uspešno!", description: "Vaš zahtev za registraciju je poslat. Kontaktiraćemo vas uskoro." });
  };

  return (
    <section id="registracija" className="odc-registration" aria-labelledby="odc-registration-title">
      <div className="odc-container odc-registration__layout">
        <div className="odc-registration__copy">
          <p className="odc-eyebrow">Registracija ordinacije</p><h2 id="odc-registration-title">Otvorite OrtoCloud nalog.</h2><p>Otvaranje naloga je besplatno i traje manje od minuta.</p>
          <ul><li><Check aria-hidden="true" />Brzi i jednostavni koraci</li><li><Check aria-hidden="true" />Sigurna registracija</li><li><Check aria-hidden="true" />Odmah spremni za rad</li></ul>
          <Building2 className="odc-registration__illustration" aria-hidden="true" />
        </div>
        <form className="odc-registration__form" onSubmit={handleSubmit}>
          <div className="odc-form-field"><label htmlFor="oc-registration-name">Ime i prezime</label><input id="oc-registration-name" name="name" placeholder="Vaše ime i prezime" value={formData.name} onChange={handleChange} required /></div>
          <div className="odc-form-field"><label htmlFor="oc-registration-clinic">Naziv ordinacije</label><input id="oc-registration-clinic" name="clinic" placeholder="Naziv vaše ordinacije" value={formData.clinic} onChange={handleChange} required /></div>
          <div className="odc-form-field"><label htmlFor="oc-registration-email">Email adresa</label><input id="oc-registration-email" name="email" type="email" placeholder="vas@email.com" value={formData.email} onChange={handleChange} required /></div>
          <div className="odc-form-field"><label htmlFor="oc-registration-phone">Telefon</label><input id="oc-registration-phone" name="phone" type="tel" placeholder="+381 6X XXX XXX" value={formData.phone} onChange={handleChange} required /></div>
          <div className="odc-form-field"><label htmlFor="oc-registration-password">Lozinka</label><input id="oc-registration-password" name="password" type="password" placeholder="Unesite lozinku" value={formData.password} onChange={handleChange} required minLength={8} /></div>
          <div className="odc-form-field"><label htmlFor="oc-registration-confirm">Potvrda lozinke</label><input id="oc-registration-confirm" name="confirmPassword" type="password" placeholder="Ponovite lozinku" value={formData.confirmPassword} onChange={handleChange} required minLength={8} /></div>
          <button className="odc-button odc-button--primary odc-registration__submit" type="submit">Otvorite nalog</button>
        </form>
      </div>
    </section>
  );
}
