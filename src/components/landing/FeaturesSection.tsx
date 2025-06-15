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
          <h2 className="text-3xl md:text-4xl font-bold">Neden Bizi Seçmelisiniz?</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">Fitness yolculuğunuzda başarılı olmanız için gereken araçları ve desteği sağlıyoruz.</p>
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
                <CardTitle className="mt-4">Kişiselleştirilmiş Planlar</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Benzersiz hedeflerinize ve yaşam tarzınıza uygun, özel olarak hazırlanmış antrenman ve beslenme planları.</p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeIn}>
            <Card className="text-center h-full bg-secondary border-secondary hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <div className="mx-auto bg-primary/20 text-primary p-4 rounded-full w-fit">
                  <ShieldCheck size={32} />
                </div>
                <CardTitle className="mt-4">Uzman Rehberliği</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Başarınıza ve güvenliğinize adanmış, sertifikalı ve deneyimli antrenörler.</p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeIn}>
            <Card className="text-center h-full bg-secondary border-secondary hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <div className="mx-auto bg-primary/20 text-primary p-4 rounded-full w-fit">
                  <Users size={32} />
                </div>
                <CardTitle className="mt-4">Destekleyici Topluluk</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Motive olmak ve ilham almak için benzer düşünen bireylerden oluşan bir topluluğa katılın.</p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
