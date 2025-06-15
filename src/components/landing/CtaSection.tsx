
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion, Variants } from 'framer-motion';

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

export const CtaSection = () => {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.8 }}>
          <h2 className="text-3xl md:text-4xl font-bold">Dönüşümünüze Başlamaya Hazır mısınız?</h2>
          <p className="mt-4 max-w-2xl mx-auto opacity-90">
            Kendinizin en iyi versiyonu olmak için bir gün daha beklemeyin. Gelecekteki siz size teşekkür edecek.
          </p>
          <div className="mt-8">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/booking">Randevu Alın</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
