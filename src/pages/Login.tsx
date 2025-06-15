
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { supabase } from "@/lib/supabaseClient";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const formSchema = z.object({
  email: z.string().email({ message: "Lütfen geçerli bir e-posta adresi girin." }),
  password: z.string().min(6, { message: "Şifre en az 6 karakter olmalıdır." }),
});

const Login = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { data: loginData, error } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password,
    });

    if (error) {
      if (error.message === 'Email not confirmed') {
        toast.error("E-posta adresiniz doğrulanmamış", {
          description: "Lütfen e-posta kutunuzu kontrol edin ve hesabınızı doğrulayın.",
        });
      } else {
        toast.error("Giriş başarısız oldu", {
          description: "Lütfen e-posta ve şifrenizi kontrol edin.",
        });
      }
    } else if (loginData.user) {
      // After sign-in, user data can sometimes be stale.
      // We'll refresh the session to get the latest user metadata.
      await supabase.auth.refreshSession();
      const { data: { session } } = await supabase.auth.getSession();

      if (!session) {
        toast.error("Oturum bilgileri alınamadı. Lütfen tekrar deneyin.");
        return;
      }

      toast.success("Başarıyla giriş yapıldı!");
      const role = session.user.user_metadata?.role;
      if (role === 'admin') {
        // Force a full page reload to ensure all components get the new session data
        window.location.assign("/admin");
      } else if (role === 'client') {
        navigate("/client/dashboard");
      } else {
        // Rolü olmayan veya tanımsız rolü olanlar anasayfaya yönlendirilir.
        navigate("/");
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto max-w-sm px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary">Giriş Yap</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Devam etmek için lütfen giriş yapın.
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-posta</FormLabel>
                <FormControl>
                  <Input placeholder="ornek@eposta.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Şifre</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" size="lg" className="w-full">
            Giriş Yap
          </Button>
        </form>
      </Form>
      <p className="mt-8 text-center text-sm text-muted-foreground">
        Hesabınız yok mu?{' '}
        <Link to="/register" className="underline underline-offset-4 hover:text-primary">
          Kayıt Olun
        </Link>
      </p>
    </motion.div>
  );
};

export default Login;
