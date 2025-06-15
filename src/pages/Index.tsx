
import { HeroSection } from '@/components/landing/HeroSection';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { ProgramsSection } from '@/components/landing/ProgramsSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { CtaSection } from '@/components/landing/CtaSection';
import { NewsletterSection } from '@/components/landing/NewsletterSection';

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
  const handleScrollToPrograms = () => {
    document.getElementById('programs-pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col">
      <HeroSection handleScrollToPrograms={handleScrollToPrograms} />
      <FeaturesSection />
      <ProgramsSection programs={programs} />
      <TestimonialsSection />
      <NewsletterSection />
      <CtaSection />
    </div>
  );
};

export default Index;
