import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "tanja macura",
      content:
        "Sve preporuke,ljubazno osoblje i vrhunski kvalitet usluge👍",
      rating: 5,
    },
    {
      name: "Vera Nikolić",
      content:
        "Very nice, clean and quick. The staff is polite and friendly. They are connected to the local dentists via app and they can send them files digitally.",
      rating: 5,
    },
    {
      name: "Nemanja Pantelić",
      content: "Pa uz ovakve ljude i ovakvu uslugu, ne boli ni zub, a kamo li novčanik, za svaku pohvalu!",
      rating: 5,
    },
    {
      name: "Nebojša Stojanović",
      content:
        "Profesionalno,ljubazno.Pišem najiskrenije kao pacijent.Snimak odmah gotov i poslato stomatologu.Svaka čast.Čistoća na visokom nivou.",
      rating: 5,
    },
    {
      name: "Trivun Mijailovic",
      content:
        "Brzo, efikasno, jednostavno, nema cekanja puno, ordinacije cista, lepa, komforna, prezadovoljan sam uslugom sve najbolje u daljem radu i poslovanju",
      rating: 5,
    },
    {
      name: "Mina",
      content: "Ljubazni, stručni i što je najbitnije kvalitetan snimak.",
      rating: 5,
    },
    {
      name: "Zorica",
      content: "professionan staff, quick service, safety measures in place",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-muted relative overflow-hidden">
      {/* Diagonal accent */}
      <div 
        className="absolute -top-10 -left-10 w-40 h-[110%] bg-secondary/5"
        style={{ transform: 'rotate(-10deg)' }}
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Šta kažu naši <span className="text-primary">korisnici</span>
          </h2>
          <div className="w-16 h-1 gradient-accent-line mx-auto rounded-full" />
        </motion.div>

        {/* Testimonial Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative px-1 md:px-12"
        >
          <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={`${testimonial.name}-${index}`}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div className="accent-card p-8 relative group hover:shadow-raised transition-shadow duration-300 h-full flex flex-col">
                    {/* Quote Icon */}
                    <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Quote className="w-10 h-10 text-secondary" />
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-foreground text-sm leading-relaxed mb-6">
                      "{testimonial.content}"
                    </p>

                    {/* Author */}
                    <div className="pt-4 border-t border-border/50 mt-auto">
                      <p className="font-bold text-foreground text-sm">
                        {testimonial.name}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:inline-flex -left-2 bg-card" />
            <CarouselNext className="hidden md:inline-flex -right-2 bg-card" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
