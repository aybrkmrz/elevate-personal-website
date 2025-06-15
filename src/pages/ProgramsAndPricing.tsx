
import { motion, Variants } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const programs = [
  {
    title: 'Beginner Boost',
    price: '$99/mo',
    duration: '4-Week Foundation',
    description: 'Perfect for those new to fitness. Build a strong foundation and learn proper techniques.',
    features: ['Initial fitness assessment', '2 personalized workouts/week', 'Basic nutrition guide', 'Weekly check-ins'],
  },
  {
    title: 'Fat Loss Fusion',
    price: '$149/mo',
    duration: '8-Week Intensity',
    description: 'A high-intensity program designed to maximize fat burn and improve metabolic rate.',
    features: ['Metabolic testing', '4 HIIT workouts/week', 'Customized meal plan', 'Bi-weekly progress tracking'],
  },
  {
    title: 'Muscle Gain Matrix',
    price: '$199/mo',
    duration: '12-Week Transformation',
    description: 'Sculpt your physique with this intensive strength training and muscle-building program.',
    features: ['Strength assessment', '5 strength workouts/week', 'Macro-based nutrition plan', 'Body composition analysis'],
  },
];

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

const ProgramsAndPricing = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">Programs & Pricing</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Choose the plan that's right for you and let's start your transformation.
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
            <Card className="flex flex-col w-full bg-secondary border-secondary hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
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
                  <Link to="/contact">Get Started</Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProgramsAndPricing;
