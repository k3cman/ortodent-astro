import patientPhone from "@/assets/home/ortocloud-phone.webp";
import OrtoCloudPlatforms from "@/components/OrtoCloudPlatforms";
import { useLocale } from "@/components/site/i18n/LocaleContext";

export default function DownloadSection() {
  const en = useLocale() === "en";
  return (
    <section id="preuzmi" className="odc-download" aria-labelledby="odc-download-title">
      <div className="odc-container odc-download__layout">
        <div className="odc-download__copy"><p className="odc-eyebrow">{en ? "Access from every device" : "Pristup sa svih uređaja"}</p><h2 id="odc-download-title">{en ? "OrtoCloud always with you." : "OrtoCloud uvek sa Vama."}</h2><p>{en ? "Download the app and access your X-rays anytime, anywhere." : "Preuzmite aplikaciju i pristupite svojim snimcima bilo kada i bilo gde."}</p><OrtoCloudPlatforms /></div>
        <div className="odc-download__visual"><img src={patientPhone.src} alt={en ? "OrtoCloud app on a mobile phone" : "OrtoCloud aplikacija na mobilnom telefonu"} loading="lazy" decoding="async" /></div>
        <p className="odc-download__aside">{en ? <>Your<br />diagnostics<br />on the go.</> : <>Vaša<br />dijagnostika<br />u pokretu.</>}</p>
      </div>
    </section>
  );
}
