
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion, Variants } from 'framer-motion';
import { Target, ShieldCheck, Users } from 'lucide-react';

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Why Choose FitFlex?</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">We provide the tools and support you need to succeed on your fitness journey.</p>
        </div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div variants={fadeIn}>
            <Card className="text-center h-full bg-secondary border-secondary hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <div className="mx-auto bg-primary/20 text-primary p-4 rounded-full w-fit">
                  <Target size={32} />
                </div>
                <CardTitle className="mt-4">Personalized Plans</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Custom-tailored workout and nutrition plans to fit your unique goals and lifestyle.</p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeIn}>
            <Card className="text-center h-full bg-secondary border-secondary hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <div className="mx-auto bg-primary/20 text-primary p-4 rounded-full w-fit">
                  <ShieldCheck size={32} />
                </div>
                <CardTitle className="mt-4">Expert Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Certified and experienced trainers dedicated to your success and safety.</p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeIn}>
            <Card className="text-center h-full bg-secondary border-secondary hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <div className="mx-auto bg-primary/20 text-primary p-4 rounded-full w-fit">
                  <Users size={32} />
                </div>
                <CardTitle className="mt-4">Supportive Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Join a community of like-minded individuals to stay motivated and inspired.</p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

