import patientPhone from "@/assets/home/ortocloud-phone.webp";
import OrtoCloudPlatforms from "@/components/OrtoCloudPlatforms";

export default function DownloadSection() {
  return (
    <section id="preuzmi" className="odc-download" aria-labelledby="odc-download-title">
      <div className="odc-container odc-download__layout">
        <div className="odc-download__copy"><p className="odc-eyebrow">Pristup sa svih uređaja</p><h2 id="odc-download-title">OrtoCloud uvek sa Vama.</h2><p>Preuzmite aplikaciju i pristupite svojim snimcima bilo kada i bilo gde.</p><OrtoCloudPlatforms /></div>
        <div className="odc-download__visual"><img src={patientPhone.src} alt="OrtoCloud aplikacija na mobilnom telefonu" loading="lazy" decoding="async" /></div>
        <p className="odc-download__aside">Vaša<br />dijagnostika<br />u pokretu.</p>
      </div>
    </section>
  );
}
