
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dumbbell, PersonStanding, ClipboardList, Laptop, Target, Leaf, Zap, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeInStagger = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
    },
  }),
};

const specializations = [
  { icon: Dumbbell, title: 'Fonksiyonel Antrenman' },
  { icon: PersonStanding, title: 'Vücut Şekillendirme' },
  { icon: ClipboardList, title: 'Beslenme Planlama' },
  { icon: Laptop, title: 'Online Takip ve Danışmanlık' },
];

const values = [
  { icon: Target, title: 'Disiplin', description: 'Hedeflerinize ulaşmanın anahtarı tutarlılık ve kararlılıktır.' },
  { icon: Leaf, title: 'Sürdürülebilirlik', description: 'Geçici çözümler yerine, yaşam tarzınıza entegre olacak kalıcı alışkanlıklar kazandırıyoruz.' },
  { icon: Zap, title: 'Motivasyon', description: 'İçinizdeki gücü keşfetmeniz ve sınırlarınızı zorlamanız için size ilham veriyorum.' },
  { icon: TrendingUp, title: 'Kişisel Gelişim', description: 'Sadece bedeninizi değil, zihninizi de güçlendirerek en iyi versiyonunuza ulaşmanızı sağlıyoruz.' },
];

const About = () => {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-24">
        
        {/* Giriş Bölümü (Hero) */}
        <motion.section
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center text-center md:text-left"
        >
          <div className="md:col-span-2">
            <img
              src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
              alt="Berkay Erel"
              className="rounded-full aspect-square w-64 h-64 md:w-full md:h-auto object-cover mx-auto shadow-2xl"
            />
          </div>
          <div className="md:col-span-3">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Berkay Erel
            </h1>
            <p className="text-xl md:text-2xl text-primary font-semibold mt-2">Kişisel Antrenör</p>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto md:mx-0">
              “Güçlü bir vücut, disiplinli bir zihinle başlar.”
            </p>
          </div>
        </motion.section>

        {/* Hakkımda Kısmı */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4">Hakkımda</h2>
          <p className="text-muted-foreground leading-relaxed">
            6 yılı aşkın süredir bireylerin fitness hedeflerine ulaşmalarına tutkuyla yardımcı oluyorum. Benim için antrenörlük, sadece program yazmaktan çok daha fazlası; bu, bilimi, motivasyonu ve bireysel ihtiyaçları bir araya getirerek sürdürülebilir sonuçlar yaratma sanatıdır. Her danışanımın benzersiz olduğuna inanıyor ve bu yüzden tamamen kişiselleştirilmiş, bilimsel temellere dayanan ve en önemlisi keyif alacağınız antrenman ve beslenme planları oluşturuyorum.
          </p>
        </motion.section>

        {/* Uzmanlıklarım */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-12">Uzmanlıklarım</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {specializations.map((item, i) => (
              <motion.div key={item.title} custom={i} variants={fadeInStagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
                <Card className="bg-secondary/50 border-0 text-center flex flex-col items-center p-6 h-full">
                  <item.icon className="w-12 h-12 text-primary mb-4" />
                  <p className="font-semibold text-lg">{item.title}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Vizyon & Değerlerim */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">Vizyon & Değerlerim</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, i) => (
               <motion.div key={value.title} custom={i} variants={fadeInStagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
                <Card className="bg-secondary/50 border-0 p-6 flex items-start gap-6 h-full">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </Card>
               </motion.div>
            ))}
          </div>
        </section>

        {/* CTA - Harekete Geçirici Bölüm */}
        <section className="bg-secondary rounded-lg p-8 md:p-16 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold">Hedefine ulaşmak için ilk adımı at.</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Dönüşüm yolculuğunuzda size rehberlik etmeme izin verin.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/services">Bireysel Programlarımı İncele</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/booking">Online Danışmanlık Al</Link>
              </Button>
            </div>
          </motion.div>
        </section>
        
      </div>
    </div>
  );
};

export default About;
