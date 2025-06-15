
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, Variants } from 'framer-motion';
import { useToast } from "@/hooks/use-toast";

const dijitalProgramlar = [
  {
    id: 'digital_1',
    name: 'Erkekler için Tam Vücut Antrenman Planı (4 Hafta)',
    description: 'Başlangıç ve orta seviyeler için güçlü, yağsız bir vücut oluşturmaya yönelik kapsamlı PDF tabanlı bir plan.',
    price: '₺599.99',
    image: '/lovable-uploads/b8c6b1c0-2f70-41bc-8574-2179b1955871.png',
    buttonText: 'İndir',
  },
  {
    id: 'digital_2',
    name: 'Kas Gelişimi için Beslenme Rehberi',
    description: 'Kas büyümenizi ve toparlanmanızı desteklemek için örnek öğünler ve ipuçları içeren dengeli bir makro besin planı.',
    price: '₺399.99',
    image: '/lovable-uploads/b8c6b1c0-2f70-41bc-8574-2179b1955871.png',
    buttonText: 'İndir',
  },
  {
    id: 'digital_3',
    name: 'Karın Kası Güçlendirici (7 Günlük)',
    description: 'Sadece bir haftada karın gücü ve güçlü bir merkez bölgesi geliştirmek için odaklanmış kısa bir program.',
    price: '₺249.99',
    image: '/lovable-uploads/b8c6b1c0-2f70-41bc-8574-2179b1955871.png',
    buttonText: 'İndir',
  },
  {
    id: 'digital_4',
    name: 'Vücut Yeniden Yapılandırma Paketi',
    description: 'Eş zamanlı yağ yakımı ve kas kazanımı için eksiksiz antrenman ve diyet planı.',
    price: '₺899.99',
    image: '/lovable-uploads/b8c6b1c0-2f70-41bc-8574-2179b1955871.png',
    buttonText: 'İndir',
  },
];

const koclukHizmetleri = [
  {
    id: 'coaching_1',
    name: 'Birebir Online Danışmanlık (30 dk)',
    description: 'Hedeflerinizi değerlendirmek ve uzman rehberliği sağlamak için kişiselleştirilmiş 30 dakikalık bir Zoom seansı.',
    price: '₺1200.00',
    image: '/lovable-uploads/b8c6b1c0-2f70-41bc-8574-2179b1955871.png',
    buttonText: 'Randevu Al',
  },
  {
    id: 'coaching_2',
    name: 'Kişiye Özel Antrenman ve Beslenme Planı',
    description: 'Kişisel değerlendirme formunu doldurduktan sonra 48 saat içinde size özel olarak hazırlanan bir plan.',
    price: '₺2500.00',
    image: '/lovable-uploads/b8c6b1c0-2f70-41bc-8574-2179b1955871.png',
    buttonText: 'Hemen Başla',
  },
  {
    id: 'coaching_3',
    name: 'Aylık Koçluk Paketi',
    description: 'Sizi yolda tutmak için haftalık kontroller, WhatsApp desteği ve program güncellemeleri.',
    price: '₺4500.00/ay',
    image: '/lovable-uploads/b8c6b1c0-2f70-41bc-8574-2179b1955871.png',
    buttonText: 'Hemen Başla',
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

const Services = () => {
  const { toast } = useToast();

  const handleBuyNow = () => {
    toast({
      title: "Yakında!",
      description: "Ödeme entegrasyonu henüz yapılandırılmadı. Bu bir yer tutucu eylemdir.",
    });
  };

  return (
    <div className="bg-background">
      <div className="container mx-auto py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-white">Hizmetler ve Programlar</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Kaslı ve yağsız bir vücut inşa etmenize yardımcı olacak dijital programlar ve koçluk hizmetleri.
          </p>
        </div>

        <Tabs defaultValue="dijital-programlar" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
            <TabsTrigger value="dijital-programlar">Dijital Programlar</TabsTrigger>
            <TabsTrigger value="kocluk-hizmetleri">Koçluk Hizmetleri</TabsTrigger>
          </TabsList>

          <TabsContent value="dijital-programlar">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-stretch">
              {dijitalProgramlar.map((product, index) => (
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

          <TabsContent value="kocluk-hizmetleri">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {koclukHizmetleri.map((service, index) => (
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

export default Services;
