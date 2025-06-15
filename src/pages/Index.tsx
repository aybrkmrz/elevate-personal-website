
import { HeroSection } from '@/components/landing/HeroSection';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { ProgramsSection } from '@/components/landing/ProgramsSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { CtaSection } from '@/components/landing/CtaSection';
import { NewsletterSection } from '@/components/landing/NewsletterSection';
import { FaqSection } from '@/components/landing/FaqSection';

const programs = [
  {
    title: 'Başlangıç Desteği',
    price: '₺499/ay',
    duration: '4 Haftalık Temel',
    description: 'Spora yeni başlayanlar için mükemmel. Güçlü bir temel oluşturun ve doğru teknikleri öğrenin.',
    features: ['Başlangıç fitness değerlendirmesi', 'Haftada 2 kişiselleştirilmiş antrenman', 'Temel beslenme rehberi', 'Haftalık kontrol'],
  },
  {
    title: 'Yağ Yakım Odaklı',
    price: '₺749/ay',
    duration: '8 Haftalık Yoğun Program',
    description: 'Yağ yakımını en üst düzeye çıkarmak ve metabolizma hızını artırmak için tasarlanmış yüksek yoğunluklu bir program.',
    features: ['Metabolik test', 'Haftada 4 HIIT antrenmanı', 'Kişiye özel yemek planı', 'İki haftada bir ilerleme takibi'],
  },
  {
    title: 'Kas Kazanım Programı',
    price: '₺999/ay',
    duration: '12 Haftalık Dönüşüm',
    description: 'Bu yoğun güç antrenmanı ve kas geliştirme programı ile fiziğinizi şekillendirin.',
    features: ['Güç değerlendirmesi', 'Haftada 5 güç antrenmanı', 'Makro tabanlı beslenme planı', 'Vücut kompozisyon analizi'],
  },
];

const Index = () => {
  const handleScrollToPrograms = () => {
    document.getElementById('programs-pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col">
      <HeroSection handleScrollToPrograms={handleScrollToPrograms} />
      <FeaturesSection />
      <ProgramsSection programs={programs} />
      <TestimonialsSection />
      <FaqSection />
      <NewsletterSection />
      <CtaSection />
    </div>
  );
};

export default Index;
