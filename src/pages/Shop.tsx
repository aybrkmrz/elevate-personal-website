
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, Variants } from 'framer-motion';
import { useToast } from "@/hooks/use-toast";

const digitalPrograms = [
  {
    id: 'digital_1',
    name: 'Full-Body Workout Plan for Men (4 Weeks)',
    description: 'A comprehensive PDF-based plan for beginner and intermediate levels to build a strong, lean physique.',
    price: '$39.99',
    image: '/lovable-uploads/b8c6b1c0-2f70-41bc-8574-2179b1955871.png',
    buttonText: 'Download',
  },
  {
    id: 'digital_2',
    name: 'Nutrition Guide for Muscle Gain',
    description: 'A balanced macronutrient plan with sample meals and tips to fuel your muscle growth and recovery.',
    price: '$24.99',
    image: '/lovable-uploads/b8c6b1c0-2f70-41bc-8574-2179b1955871.png',
    buttonText: 'Download',
  },
  {
    id: 'digital_3',
    name: 'Core Strength Builder (7-Day)',
    description: 'A focused short program to develop abdominal strength and a powerful core in just one week.',
    price: '$14.99',
    image: '/lovable-uploads/b8c6b1c0-2f70-41bc-8574-2179b1955871.png',
    buttonText: 'Download',
  },
  {
    id: 'digital_4',
    name: 'Body Recomposition Bundle',
    description: 'The complete training and diet plan for simultaneous fat loss and muscle gain.',
    price: '$59.99',
    image: '/lovable-uploads/b8c6b1c0-2f70-41bc-8574-2179b1955871.png',
    buttonText: 'Download',
  },
];

const coachingServices = [
  {
    id: 'coaching_1',
    name: 'One-on-One Online Consultation (30 min)',
    description: 'A personalized 30-minute Zoom session to assess your goals and provide expert guidance.',
    price: '$75.00',
    image: '/lovable-uploads/b8c6b1c0-2f70-41bc-8574-2179b1955871.png',
    buttonText: 'Book Now',
  },
  {
    id: 'coaching_2',
    name: 'Custom Training & Nutrition Plan',
    description: 'A plan tailored to you, delivered within 48h after you fill out a personal assessment form.',
    price: '$149.99',
    image: '/lovable-uploads/b8c6b1c0-2f70-41bc-8574-2179b1955871.png',
    buttonText: 'Get Started',
  },
  {
    id: 'coaching_3',
    name: 'Monthly Coaching Package',
    description: 'Weekly check-ins, WhatsApp support, and program updates to keep you on track.',
    price: '$299.99/month',
    image: '/lovable-uploads/b8c6b1c0-2f70-41bc-8574-2179b1955871.png',
    buttonText: 'Get Started',
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

const Shop = () => {
  const { toast } = useToast();

  const handleBuyNow = () => {
    toast({
      title: "Coming Soon!",
      description: "Payment integration is not yet configured. This is a placeholder action.",
    });
  };

  return (
    <div className="bg-background">
      <div className="container mx-auto py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-white">Shop</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Digital programs and coaching services to help you build a lean, muscular body.
          </p>
        </div>

        <Tabs defaultValue="digital-programs" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
            <TabsTrigger value="digital-programs">Digital Programs</TabsTrigger>
            <TabsTrigger value="coaching-services">Coaching Services</TabsTrigger>
          </TabsList>

          <TabsContent value="digital-programs">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-stretch">
              {digitalPrograms.map((product, index) => (
                <motion.div
                  key={product.id}
                  custom={index}
                  variants={fadeInStagger}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="flex"
                >
                  <Card className="flex flex-col w-full bg-secondary border-border hover:border-primary transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                    <img src={product.image} alt={product.name} className="object-cover w-full h-48" />
                    <div className="p-6 flex flex-col flex-grow">
                        <CardHeader className="p-0">
                            <CardTitle className="text-white">{product.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 pt-4 flex-grow">
                            <p className="text-2xl font-bold text-primary mb-2">{product.price}</p>
                            <CardDescription>{product.description}</CardDescription>
                        </CardContent>
                        <CardFooter className="p-0 pt-6">
                            <Button className="w-full" onClick={handleBuyNow}>{product.buttonText}</Button>
                        </CardFooter>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="coaching-services">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {coachingServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  custom={index}
                  variants={fadeInStagger}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="flex"
                >
                  <Card className="flex flex-col w-full bg-secondary border-border hover:border-primary transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                    <img src={service.image} alt={service.name} className="object-cover w-full h-48" />
                    <div className="p-6 flex flex-col flex-grow">
                        <CardHeader className="p-0">
                            <CardTitle className="text-white">{service.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 pt-4 flex-grow">
                            <p className="text-2xl font-bold text-primary mb-2">{service.price}</p>
                            <CardDescription>{service.description}</CardDescription>
                        </CardContent>
                        <CardFooter className="p-0 pt-6">
                            <Button className="w-full" onClick={handleBuyNow}>{service.buttonText}</Button>
                        </CardFooter>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Shop;

