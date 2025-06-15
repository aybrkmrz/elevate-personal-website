
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { motion, Variants } from 'framer-motion';
import { Target, ShieldCheck, Users, Check } from 'lucide-react';

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

const Index = () => {
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

  const handleScrollToPrograms = () => {
    document.getElementById('programs-pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
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

      {/* Features Section */}
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

      {/* Programs & Pricing Section */}
      <section id="programs-pricing" className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Programs & Pricing</h2>
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
                      <Link to="/contact">Get Started</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">Real people, real results. See how we've helped others transform their lives.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Jane D.', initial: 'JD' },
              { name: 'Alex S.', initial: 'AS' },
              { name: 'Maria S.', initial: 'MS' }
            ].map((client, i) => (
              <motion.div 
                key={i} 
                custom={i}
                variants={testimonialVariants}
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, amount: 0.5 }}>
                <Card className="bg-background border-border h-full">
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground italic">"FitFlex changed my life. The personalized approach made all the difference. I'm stronger and more confident than ever!"</p>
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

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.8 }}>
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Start Your Transformation?</h2>
            <p className="mt-4 max-w-2xl mx-auto opacity-90">
              Don't wait another day to start working towards the best version of yourself. Your future self will thank you.
            </p>
            <div className="mt-8">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Join FitFlex Today</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
