
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">About FitFlex</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          We're more than just a gym; we're a community dedicated to helping you achieve your best self.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center">
        <motion.div 
          className="md:col-span-2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
            alt="Head Trainer"
            className="rounded-lg shadow-lg object-cover w-full h-full aspect-[3/4]"
          />
        </motion.div>
        <motion.div 
          className="md:col-span-3"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-primary mb-4">A Message From Our Head Trainer</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              "My journey into fitness started from a simple desire: to feel stronger and more confident in my own skin. I quickly discovered that fitness is not just about physical strength, but about mental resilience, discipline, and the power of a supportive community."
            </p>
            <p>
              "At FitFlex, I've built the kind of place I always wanted to train in—a welcoming, motivating environment where everyone, regardless of their starting point, feels empowered. My approach is personal. I take the time to understand your unique goals, challenges, and lifestyle to create a plan that not only delivers results but is also sustainable and enjoyable."
            </p>
            <p>
              "I'm not just your trainer; I'm your partner in this journey. Let's work together to unlock your true potential and build a healthier, happier you."
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
