import { motion } from "framer-motion";
import { Cloud, Smartphone, Share2, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import tabletXray from "@/assets/internet-pristup2.jpg";

const OrtoCloudSection = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Pristup sa bilo kog uređaja",
      description: "Pregledajte snimke na telefonu, tabletu ili računaru",
    },
    {
      icon: Share2,
      title: "Lako deljenje",
      description: "Podelite snimke sa stomatologom",
    },
    {
      icon: Shield,
      title: "Sigurno čuvanje",
      description: "Vaši snimci su zaštićeni i bezbedno arhivirani",
    },
  ];

  return (
    <section
      id="ortocloud"
      className="py-20 bg-background relative overflow-hidden scroll-mt-24"
    >
      {/* Diagonal accent */}
      <div
        className="absolute -bottom-20 -right-10 w-60 h-[120%] bg-accent/5"
        style={{ transform: "rotate(-12deg)" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground">
            Vaši snimci, <span className="text-primary">uvek dostupni!</span>
          </h2>
          <div className="w-16 h-1 gradient-accent-line mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - OrtoCloud Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground text-lg max-w-lg">
              Pristupite vašim snimcima bilo kad, bilo gde.
              <br />
              Sigurno, brzo i jednostavno sa našom OrtoCloud platformom.
            </p>

            <div className="space-y-5 mb-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl border-[0.5px] border-accent/40 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-0.5 text-sm">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button variant="glow" size="lg" style={{ marginTop: "3em" }}>
              <Cloud className="w-5 h-5 mr-2" />
              Više o OrtoCloudu
            </Button>
          </motion.div>

          {/* Right - Tablet Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <motion.img
                src={tabletXray}
                alt="OrtoCloud na tabletu - dentalni snimak"
                className="w-full max-w-md rounded-xl shadow-raised"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              {/* Diagonal accent behind tablet */}
              <div
                className="absolute -top-6 -right-6 w-full h-full bg-secondary/10 rounded-xl -z-10"
                style={{ transform: "rotate(3deg)" }}
              />
              <div
                className="absolute -top-3 -right-3 w-full h-full bg-accent/10 rounded-xl -z-10"
                style={{ transform: "rotate(6deg)" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OrtoCloudSection;
