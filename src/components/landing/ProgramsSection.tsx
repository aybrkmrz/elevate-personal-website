import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { motion, Variants } from 'framer-motion';
import { Check, ArrowRight, Dumbbell } from 'lucide-react';

interface Program {
  title: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
}

interface ProgramsSectionProps {
  programs: Program[];
}

const fadeInStagger: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeInOut',
    },
  }),
};

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

export const ProgramsSection = ({ programs }: ProgramsSectionProps) => {
  return (
    <section id="programs-pricing" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Programlar ve Fiyatlandırma</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Size uygun planı seçin ve dönüşümünüze başlayalım.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              custom={index}
              variants={fadeInStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex"
            >
              <Card className="flex flex-col w-full bg-background border-border hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <CardTitle className="text-2xl">{program.title}</CardTitle>
                  <CardDescription>{program.duration}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                  <p className="text-4xl font-bold text-primary">{program.price}</p>
                  <p className="text-muted-foreground flex-grow">{program.description}</p>
                  <ul className="space-y-2 pt-4">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link to="/contact">Hemen Başla</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="relative max-w-4xl mx-auto text-center mt-20 md:mt-28"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.div 
            className="absolute top-1/2 -left-24 -translate-y-1/2 hidden lg:block"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Dumbbell className="h-16 w-16 text-primary/20" />
          </motion.div>
          <motion.div 
            className="absolute top-1/3 -right-24 -translate-y-1/2 hidden lg:block"
            animate={{ y: [0, 15, 0], rotate: -45 }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Dumbbell className="h-12 w-12 text-primary/20" />
          </motion.div>
          
          <h2 className="text-2xl md:text-3xl font-bold">Daha Fazlasını Keşfedin</h2>
          <p className="mt-3 max-w-xl mx-auto text-muted-foreground">
            Tüm dijital programlarımı ve birebir koçluk hizmetlerimi görmek için hizmetler sayfasını ziyaret edin.
          </p>
          <div className="mt-6">
            <Button size="lg" asChild>
              <Link to="/services">
                Tüm Hizmetleri Gör <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
