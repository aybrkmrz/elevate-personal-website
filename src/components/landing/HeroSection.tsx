
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion, Variants } from 'framer-motion';

interface HeroSectionProps {
  handleScrollToPrograms: () => void;
}

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

export const HeroSection = ({ handleScrollToPrograms }: HeroSectionProps) => {
  return (
    <section className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <motion.img
        src="/lovable-uploads/b8c6b1c0-2f70-41bc-8574-2179b1955871.png"
        alt="Man working out in a gym"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="relative z-20 max-w-3xl px-4"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight">
          Unleash Your <span className="text-primary">Potential</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-xl mx-auto">
          Personalized training programs designed to help you achieve your fitness goals.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button size="lg" onClick={handleScrollToPrograms}>
            Explore Programs
          </Button>
          <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-black transition-colors" asChild>
            <Link to="/contact">Book a Consultation</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

