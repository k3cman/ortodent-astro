import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-girl.png";
import { VersionLink } from "@/components/v1/VersionContext";

const Hero = () => {
  const locations = ["BEOGRAD", "NOVI SAD", "PANČEVO"];

  return (
    <section className="pt-20 pb-0 bg-background min-h-screen">
      <div className="mx-4 md:mx-6 lg:mx-8 h-[calc(100vh-5rem)] bg-muted/40 border border-border/60 rounded-3xl relative overflow-hidden flex flex-col">
        {/* Stripe clip wrapper: contains stripes to Hero only (extends up for behind-nav), no layout impact */}
        <div
          className="absolute -top-20 left-0 right-0 bottom-0 overflow-hidden pointer-events-none z-0 hidden lg:block"
          aria-hidden
        >
          {/* Diagonal stripes - purely decorative, absolutely positioned */}
          <div
            className="absolute top-[-35%] -right-[2%] w-[82%] xl:w-[70%] 2xl:w-[56%] h-[150%]"
            style={{
              transform: "rotate(-18deg)",
              transformOrigin: "top right",
            }}
          >
            <div
              className="absolute top-0 right-0 w-[34%] h-full opacity-95"
              style={{ backgroundColor: "#F0A511" }}
            />
            <div
              className="absolute top-0 right-[34%] w-[26%] h-full opacity-95"
              style={{ backgroundColor: "#F28722" }}
            />
            <div className="absolute top-0 right-[60%] w-[24%] h-full opacity-95 bg-primary" />
            <div
              className="absolute top-0 right-[84%] w-[16%] h-full opacity-95"
              style={{ backgroundColor: "#952862" }}
            />
          </div>
        </div>

        {/* Mobile diagonal bg */}
        <div className="absolute top-0 right-0 w-full h-[40%] z-0 lg:hidden">
          <div
            className="absolute -top-[30%] -right-[30%] w-[120%] h-[200%] bg-secondary opacity-20"
            style={{ transform: "rotate(-20deg)" }}
          />
        </div>

        {/* Subtle dot grid texture */}
        <div
          className="absolute inset-y-0 left-0 w-full lg:w-[58%] pointer-events-none z-0 opacity-[0.3]"
          style={{
            backgroundImage: "radial-gradient(#D12B5E 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            maskImage:
              "linear-gradient(to right, black 0%, black 65%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, black 0%, black 65%, transparent 100%)",
          }}
          aria-hidden
        />

        {/* Main Hero Content */}
        <div className="container mx-auto px-6 flex-1 flex items-center relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.h1
                  className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Najpreciznija <span className="text-primary">2D</span> i{" "}
                  <span className="text-primary">3D</span> dijagnostika
                </motion.h1>

                {/* <motion.p
                className="text-base md:text-md text-muted-foreground max-w-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Rezultati dostupni odmah na OrtoCloud platformi.
              </motion.p> */}
              </div>

              <motion.div
                className="flex flex-col items-start gap-4 w-fit"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <p className="text-xs uppercase  text-muted-foreground font-semibold mt-4 flex">
                  Odaberi lokaciju:
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  {locations.map((location) => (
                    <Button
                      key={location}
                      variant="outline"
                      size="xl"
                      asChild
                      roundness="sm"
                    >
                      <VersionLink to="/lokacije">{location}</VersionLink>
                    </Button>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative flex justify-center lg:justify-end items-end h-full"
            >
              <div className="relative mt-32">
                <motion.img
                  src={heroImage}
                  alt="Dental professional holding X-ray tablet"
                  className="relative z-10 max-w-full h-auto object-contain"
                  style={{ maxHeight: "calc(100vh - 200px)" }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
