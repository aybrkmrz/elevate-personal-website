import { Card, CardContent } from '@/components/ui/card';
import { motion, Variants } from 'framer-motion';

const testimonials = [
  { name: 'Jane D.', initial: 'JD', text: "Berkay Erel hayatımı değiştirdi. Kişiselleştirilmiş yaklaşım tüm farkı yarattı. Her zamankinden daha güçlü ve kendime daha güvenliyim!" },
  { name: 'Alex S.', initial: 'AS', text: "Eğitmenler birinci sınıf ve topluluk çok motive edici. Asla mümkün olmadığını düşündüğüm hedeflere ulaştım." },
  { name: 'Maria K.', initial: 'MK', text: "Başka programlar denedim ama hiçbiri Berkay Erel ile kıyaslanamaz. Sonuçlar ortada. Kesinlikle tavsiye ederim!" }
];

const testimonialVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeInOut',
    },
  }),
};

export const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Danışanlarımız Ne Diyor?</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">Gerçek insanlar, gerçek sonuçlar. Başkalarının hayatlarını dönüştürmelerine nasıl yardımcı olduğumuzu görün.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((client, i) => (
            <motion.div 
              key={i} 
              custom={i}
              variants={testimonialVariants}
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, amount: 0.5 }}>
              <Card className="bg-background border-border h-full">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground italic">"{client.text}"</p>
                  <div className="mt-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center font-bold text-primary">
                      {client.initial}
                    </div>
                    <div>
                      <p className="font-semibold">{client.name}</p>
                      <p className="text-sm text-muted-foreground">Danışan</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
