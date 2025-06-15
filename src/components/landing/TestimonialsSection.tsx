
import { Card, CardContent } from '@/components/ui/card';
import { motion, Variants } from 'framer-motion';

const testimonials = [
  { name: 'Jane D.', initial: 'JD', text: "FitFlex changed my life. The personalized approach made all the difference. I'm stronger and more confident than ever!" },
  { name: 'Alex S.', initial: 'AS', text: "The trainers are top-notch and the community is so motivating. I've crushed goals I never thought were possible." },
  { name: 'Maria K.', initial: 'MK', text: "I've tried other programs, but nothing compares to FitFlex. The results speak for themselves. Highly recommended!" }
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
          <h2 className="text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">Real people, real results. See how we've helped others transform their lives.</p>
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
                      <p className="text-sm text-muted-foreground">Client</p>
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

