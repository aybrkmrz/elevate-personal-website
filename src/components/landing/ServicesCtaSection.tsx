
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

export const ServicesCtaSection = () => {
  return (
    <section className="py-16 sm:py-20">
      <motion.div 
        className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center bg-secondary rounded-lg p-8 md:p-12"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
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
    </section>
  );
};
