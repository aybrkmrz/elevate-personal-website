
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
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">İletişime Geçin</h1>
        <p className="text-muted-foreground mb-8">
          Bir sorunuz mu var veya fitness yolculuğunuza başlamak mı istiyorsunuz? Bize bir mesaj gönderin!
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-2xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <Textarea placeholder="Mesajınız..." rows={6} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="text-center">
            <Button type="submit" size="lg" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
            </Button>
          </div>
        </form>
      </Form>
    </motion.div>
  );
};

export default Contact;
