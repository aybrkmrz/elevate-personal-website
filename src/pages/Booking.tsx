
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { format } from "date-fns";
import { tr } from "date-fns/locale";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { motion } from "framer-motion";

const bookingFormSchema = z.object({
  name: z.string().min(2, { message: "İsim en az 2 karakter olmalıdır." }),
  email: z.string().email({ message: "Lütfen geçerli bir e-posta adresi girin." }),
  goal: z.string().min(10, { message: "Antrenman hedefiniz en az 10 karakter uzunluğunda olmalıdır." }),
  date: z.date({
    required_error: "Seans için bir tarih gereklidir.",
  }),
});

type BookingFormValues = z.infer<typeof bookingFormSchema>;

const defaultValues: Partial<BookingFormValues> = {
  name: "",
  email: "",
  goal: "",
};

const Booking = () => {
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues,
  });

  function onSubmit(data: BookingFormValues) {
    console.log(data);
    
    const existingBookings = JSON.parse(
      localStorage.getItem("bookings") || "[]"
    );
    const newBookings = [...existingBookings, data];
    localStorage.setItem("bookings", JSON.stringify(newBookings));

    toast.success("Rezervasyon Onaylandı!", {
      description: `Seansınız ${format(data.date, "PPP", { locale: tr })} için planlandı. Yakında sizinle iletişime geçeceğiz.`,
    });
    form.reset(defaultValues);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary">Seansınızı Ayarlayın</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Daha sağlıklı bir siz olmak için ilk adımı atın. Kişisel antrenman seansınızı aşağıdan planlayın.
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tam Adınız</FormLabel>
                <FormControl>
                  <Input placeholder="Adınız Soyadınız" {...field} />
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
                <FormLabel>E-posta Adresiniz</FormLabel>
                <FormControl>
                  <Input placeholder="ornek@eposta.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="goal"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Antrenman Hedefiniz</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="ör., 10 kilo vermek, maratona hazırlanmak, kas kütlesi kazanmak..."
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Tercih Edilen Tarih</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {field.value ? (
                          format(field.value, "PPP", { locale: tr })
                        ) : (
                          <span>Bir tarih seçin</span>
                        )}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date < new Date(new Date().toDateString())
                      }
                      initialFocus
                      locale={tr}
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" size="lg" className="w-full">
            Seansı Planla
          </Button>
        </form>
      </Form>
    </motion.div>
  );
};

export default Booking;
