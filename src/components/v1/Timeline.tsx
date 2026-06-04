import { motion } from "framer-motion";
import { MapPin, Camera, FileCheck, Clock } from "lucide-react";

const Timeline = () => {
  const steps = [
    {
      icon: MapPin,
      number: "1",
      title: "Poseta",
      description: "Dođite u naš centar bez zakazivanja",
    },
    {
      icon: Camera,
      number: "2",
      title: "Snimanje",
      description: "Brzo i bezbolno snimanje",
    },
    {
      icon: FileCheck,
      number: "3",
      title: "Rezultat",
      description: "Snimke dobijate odmah na OrtoCloudu",
    },
  ];

  return (
    <section className="py-20 bg-muted relative overflow-hidden">
      {/* Subtle diagonal accent */}
      <div
        className="absolute top-0 right-0 w-32 h-[110%] bg-secondary/5"
        style={{ transform: "rotate(15deg)" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Kako funkcioniše?
          </h2>
          <div className="w-16 h-1 gradient-accent-line mx-auto rounded-full" />
        </motion.div>

        {/* Timeline Steps */}
        <div className="max-w-4xl mx-auto">
          {/* Desktop: keep numbers + text in the same grid column */}
          <div className="hidden md:grid md:grid-cols-[auto_1fr_auto_1fr_auto] md:grid-rows-2 md:gap-y-6 md:items-center w-full">
            {steps[0] && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="row-start-1 col-start-1 flex items-center justify-center"
              >
                <div className="w-20 h-20 rounded-full border-2 border-secondary/30 flex items-center justify-center bg-card">
                  <span className="text-3xl font-extrabold text-secondary">
                    {steps[0].number}
                  </span>
                </div>
              </motion.div>
            )}

            {steps[1] && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="row-start-1 col-start-3 flex items-center justify-center"
              >
                <div className="w-20 h-20 rounded-full border-2 border-secondary/30 flex items-center justify-center bg-card">
                  <span className="text-3xl font-extrabold text-secondary">
                    {steps[1].number}
                  </span>
                </div>
              </motion.div>
            )}

            {steps[2] && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="row-start-1 col-start-5 flex items-center justify-center"
              >
                <div className="w-20 h-20 rounded-full border-2 border-secondary/30 flex items-center justify-center bg-card">
                  <span className="text-3xl font-extrabold text-secondary">
                    {steps[2].number}
                  </span>
                </div>
              </motion.div>
            )}

            {/* Connectors between the circles */}
            {steps[1] && (
              <div
                aria-hidden
                className="row-start-1 col-start-2 h-px w-full bg-primary/30 self-center"
              />
            )}
            {steps[2] && (
              <div
                aria-hidden
                className="row-start-1 col-start-4 h-px w-full bg-primary/30 self-center"
              />
            )}

            {/* Row 2: titles/descriptions aligned under the circles */}
            {steps[0] && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="row-start-2 col-start-1 flex flex-col items-center text-center space-y-1 justify-self-center"
              >
                <h3 className="text-xl font-bold text-foreground">
                  {steps[0].title}
                </h3>
                <p className="text-muted-foreground text-sm max-w-[200px]">
                  {steps[0].description}
                </p>
              </motion.div>
            )}

            {steps[1] && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="row-start-2 col-start-3 flex flex-col items-center text-center space-y-1 justify-self-center"
              >
                <h3 className="text-xl font-bold text-foreground">
                  {steps[1].title}
                </h3>
                <p className="text-muted-foreground text-sm max-w-[200px]">
                  {steps[1].description}
                </p>
              </motion.div>
            )}

            {steps[2] && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="row-start-2 col-start-5 flex flex-col items-center text-center space-y-1 justify-self-center"
              >
                <h3 className="text-xl font-bold text-foreground">
                  {steps[2].title}
                </h3>
                <p className="text-muted-foreground text-sm max-w-[200px]">
                  {steps[2].description}
                </p>
              </motion.div>
            )}
          </div>

          {/* Mobile: vertical connectors between circles */}
          <div className="md:hidden flex flex-col items-center gap-8">
            {steps.map((step, index) => [
              <motion.div
                key={`m-${step.number}`}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="w-20 h-20 rounded-full border-2 border-secondary/30 flex items-center justify-center bg-card">
                  <span className="text-3xl font-extrabold text-secondary">
                    {step.number}
                  </span>
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm max-w-[220px]">
                    {step.description}
                  </p>
                </div>
              </motion.div>,
              index < steps.length - 1 ? (
                <div
                  key={`ml-${step.number}`}
                  aria-hidden
                  className="h-10 w-0.5 bg-primary/30"
                />
              ) : null,
            ])}
          </div>

          {/* Time Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center mt-12"
          >
            <div className="inline-flex items-center gap-3 bg-card rounded-full px-6 py-3 border border-primary/30">
              <Clock className="w-5 h-5 text-accent" />
              <span className="font-semibold text-foreground">
                Ceo proces traje samo{" "}
                <span className="text-primary font-bold">5-15 minuta</span>
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
