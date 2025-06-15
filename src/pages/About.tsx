
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
        <h1 className="text-4xl md:text-5xl font-bold">Berkay Erel Hakkında</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Biz bir spor salonundan daha fazlasıyız; en iyi halinize ulaşmanıza yardımcı olmaya adanmış bir topluluğuz.
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
            alt="Baş Antrenör"
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
          <h2 className="text-3xl font-bold text-primary mb-4">Baş Antrenörümüzden Bir Mesaj</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              "Fitness yolculuğum basit bir arzuyla başladı: kendi bedenimde daha güçlü ve daha özgüvenli hissetmek. Kısa sürede fitness'ın sadece fiziksel güçle ilgili olmadığını, aynı zamanda zihinsel dayanıklılık, disiplin ve destekleyici bir topluluğun gücüyle ilgili olduğunu keşfettim."
            </p>
            <p>
              "Berkay Erel markası altında, her zaman antrenman yapmak istediğim türden bir yer inşa ettim — başlangıç noktası ne olursa olsun herkesin güçlendiğini hissettiği, samimi ve motive edici bir ortam. Yaklaşımım kişiseldir. Sadece sonuç veren değil, aynı zamanda sürdürülebilir ve keyifli bir plan oluşturmak için benzersiz hedeflerinizi, zorluklarınızı ve yaşam tarzınızı anlamak için zaman ayırıyorum."
            </p>
            <p>
              "Ben sadece antrenörünüz değilim; bu yolculuktaki ortağınızım. Gerçek potansiyelinizi ortaya çıkarmak ve daha sağlıklı, daha mutlu bir siz inşa etmek için birlikte çalışalım."
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
