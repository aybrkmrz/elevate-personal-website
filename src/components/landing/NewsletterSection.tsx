
import { Mail } from "lucide-react";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

export const NewsletterSection = () => {
  return (
    <section id="newsletter" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <Mail className="mx-auto h-12 w-12 text-primary" />
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
          Bültenimize Abone Olun
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          En son fitness ipuçlarını, haberleri ve özel teklifleri doğrudan gelen kutunuza alın.
        </p>
        <div className="mt-8 max-w-md mx-auto">
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
};
