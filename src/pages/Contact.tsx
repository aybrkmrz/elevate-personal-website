
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { supabase } from '@/lib/supabaseClient';
import { toast } from 'sonner';
import { Mail, Phone, MapPin } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "İsim en az 2 karakter olmalıdır." }),
  email: z.string().email({ message: "Lütfen geçerli bir e-posta adresi girin." }),
  subject: z.string().optional(),
  message: z.string().min(10, { message: "Mesajınız en az 10 karakter uzunluğunda olmalıdır." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const defaultValues: Partial<ContactFormValues> = {
  name: "",
  email: "",
  subject: "",
  message: "",
};


const Contact = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Konu belirtilmişse, mesaj içeriğine ekliyoruz.
    const messageContent = data.subject 
      ? `Konu: ${data.subject}\n\n${data.message}`
      : data.message;
      
    const { error } = await supabase.from("messages").insert([
      {
        name: data.name,
        email: data.email,
        message: messageContent,
      },
    ]);

    if (error) {
      console.error("Error sending message:", error);
      toast.error("Mesaj gönderilirken bir hata oluştu.", {
        description: "Lütfen daha sonra tekrar deneyin.",
      });
    } else {
      toast.success("Mesajınız için teşekkür ederiz!", {
        description: `Size en kısa sürede geri döneceğiz.`,
      });
      form.reset(defaultValues);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">İletişime Geçin</h1>
        <p className="text-muted-foreground">
          Bir sorunuz mu var veya fitness yolculuğunuza başlamak mı istiyorsunuz? Bize bir mesaj gönderin!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-semibold mb-6">İletişim Bilgileri</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Adres</h3>
                  <a
                    href="https://maps.app.goo.gl/Y6fhubzT18iBkc8e9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Fitness Salonu, Örnek Cad. No:123, 34000, İstanbul
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Telefon</h3>
                  <p className="text-muted-foreground">+90 (555) 123 45 67</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">E-posta</h3>
                  <p className="text-muted-foreground">info@fitnessmerkezi.com</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-6">Konumumuz</h2>
            <div className="rounded-lg overflow-hidden border shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.644840428575!2d29.10350217684013!3d40.989292819087445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac927424a7375%3A0x1d5337b17228cb61!2sBarbaros%2C%20Begonya%20Sk.%20No%3A3%2C%2034746%20Ata%C5%9Fehir%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1719943374880!5m2!1str!2str"
                className="w-full h-96"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="bg-card p-8 rounded-lg border shadow-lg">
          <h2 className="text-3xl font-semibold mb-6">Bize Mesaj Gönderin</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>İsim</FormLabel>
                      <FormControl>
                        <Input placeholder="Adınız" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-posta</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="ornek@eposta.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Konu</FormLabel>
                    <FormControl>
                      <Input placeholder="Bu ne hakkında?" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mesaj</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Mesajınız..." rows={5} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="text-left">
                <Button type="submit" size="lg" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;

