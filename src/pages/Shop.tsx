
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { motion, Variants } from 'framer-motion';
import { useToast } from "@/hooks/use-toast";

const products = [
  {
    id: 'prod_1',
    name: '4-Week Shred Plan',
    description: 'An intensive 4-week workout plan to help you shred fat and build lean muscle.',
    price: '$29.99',
    image: '/lovable-uploads/b8c6b1c0-2f70-41bc-8574-2179b1955871.png'
  },
  {
    id: 'prod_2',
    name: 'Vegan Muscle Diet Guide',
    description: 'A comprehensive guide to building muscle on a vegan diet, complete with meal plans and recipes.',
    price: '$19.99',
    image: '/lovable-uploads/b8c6b1c0-2f70-41bc-8574-2179b1955871.png'
  },
  {
    id: 'prod_3',
    name: 'Home Workout Essentials',
    description: 'No gym? No problem. This plan gives you effective workouts you can do from home with minimal equipment.',
    price: '$24.99',
    image: '/lovable-uploads/b8c6b1c0-2f70-41bc-8574-2179b1955871.png'
  }
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
      description: "Payment integration is not yet configured. Follow the next steps to enable Stripe.",
    });
  };

  return (
    <div className="bg-background">
      <div className="container mx-auto py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-white">Our Shop</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Purchase our expertly crafted workout plans and diet guides to accelerate your fitness journey.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {products.map((product, index) => (
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
                        <Button className="w-full" onClick={handleBuyNow}>Buy Now</Button>
                    </CardFooter>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
