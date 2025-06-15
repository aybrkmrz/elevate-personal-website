
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Sonuçları görmek ne kadar sürer?",
    answer:
      "Sonuçlar, başlangıç fitness seviyeniz, tutarlılığınız, diyetiniz ve genetiğiniz gibi bireysel faktörlere bağlı olarak değişir. Ancak, çoğu danışan tutarlı antrenman ve doğru beslenme ile 4-6 hafta içinde olumlu değişiklikler fark etmeye başlar.",
  },
  {
    question: "Online koçluk hizmeti sunuyor musunuz?",
    answer:
      "Evet, nerede olursanız olun sizi yolda tutmak için kişiselleştirilmiş antrenman planları, beslenme rehberliği ve düzenli sanal kontrolleri içeren kapsamlı online koçluk programları sunuyoruz.",
  },
  {
    question: "Diyet kısıtlamalarım varsa ne olur?",
    answer:
      "Sorun değil! Beslenme planlarımız tamamen kişiselleştirilebilir. Vejetaryen, vegan, glutensiz ve diğer alerjiler veya tercihler dahil olmak üzere çeşitli diyet ihtiyaçlarını karşılayabiliriz. İlk danışmanlık sırasında gereksinimlerinizi bize bildirmeniz yeterlidir.",
  },
  {
    question: "Ne sıklıkla antrenman yapmalıyım?",
    answer:
      "İdeal sıklık, hedeflerinize ve mevcut fitness seviyenize bağlıdır. Yeni başlayanlar için genellikle haftada 2-3 seans öneriyoruz. Daha ileri düzey danışanlar haftada 4-5 kez antrenman yapabilir. Değerlendirmeniz sırasında sizin için en iyi programı belirleyeceğiz.",
  },
  {
    question: "Ne tür bir destek bekleyebilirim?",
    answer:
      "Haftalık kontroller, hızlı sorular için e-posta veya mesajlaşma yoluyla eğitmeninize erişim ve planınızı gerektiği gibi ayarlamak için düzenli ilerleme incelemeleri yoluyla sürekli destek alacaksınız. Başarınıza bağlıyız.",
  },
];

export const FaqSection = () => {
  return (
    <section id="faq" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <HelpCircle className="mx-auto h-12 w-12 text-primary" />
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
            Sıkça Sorulan Sorular
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Sorularınız mı var? Cevaplarımız var. İşte aldığımız en yaygın sorulardan bazıları.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-left text-lg hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
