import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-girl.png";

const Hero = () => {
  const locations = ["Beograd", "Novi Sad", "Pančevo"];

  return (
    <section className="min-h-screen pt-20 bg-background relative overflow-x-hidden flex flex-col">
      {/* Stripe clip wrapper: contains stripes to Hero only (extends up for behind-nav), no layout impact */}
      <div
        className="absolute -top-20 left-0 right-0 bottom-0 overflow-hidden pointer-events-none z-0 hidden lg:block"
        aria-hidden
      >
        {/* Diagonal stripes - purely decorative, absolutely positioned */}
        <div
          className="absolute top-[-20%] right-0 w-[70%] xl:w-[60%] 2xl:w-[48%] h-[110%]"
          style={{
            transform: "rotate(-18deg)",
            transformOrigin: "top right",
          }}
        >
          <div
            className="absolute top-0 right-0 w-[25%] h-full opacity-95"
            style={{ backgroundColor: "#F0A511" }}
          />
          <div
            className="absolute top-0 right-[25%] w-[25%] h-full opacity-95"
            style={{ backgroundColor: "#F28722" }}
          />
          <div className="absolute top-0 right-[50%] w-[25%] h-full opacity-95 bg-primary" />
          <div
            className="absolute top-0 right-[75%] w-[12.5%] h-full opacity-95"
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
                Najpreciznija 2D i 3D dijagnostika
              </motion.h1>

              <motion.p
                className="text-base md:text-md text-muted-foreground max-w-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Minimalno zračenje.
                <br />
                Rezultati dostupni odmah na OrtoCloud platformi.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {locations.map((location) => (
                <Button
                  key={location}
                  type="button"
                  variant="default"
                  size="lg"
                >
                  {location}
                </Button>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end items-end h-full"
          >
            <div className="relative">
              <motion.img
                src={typeof heroImage === "string" ? heroImage : heroImage.src}
                alt="Dental professional holding X-ray tablet"
                className="relative z-10 max-w-full h-auto object-contain mt-6"
                style={{ maxHeight: "calc(100vh - 200px)" }}
              />
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
