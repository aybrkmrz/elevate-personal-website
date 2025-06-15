
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16"
    >
      <h1 className="text-4xl font-bold text-center mb-8">About FitFlex</h1>
      <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
        This is the about page. Content about our mission, values, and expert trainers will be added here soon.
      </p>
    </motion.div>
  );
};

export default About;
