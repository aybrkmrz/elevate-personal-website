
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { cn } from "@/lib/utils"
import { supabase } from "@/lib/supabaseClient"

const formSchema = z.object({
  email: z.string().email({
    message: "Lütfen geçerli bir e-posta adresi girin.",
  }),
})

interface NewsletterFormProps {
  className?: string;
}

export function NewsletterForm({ className }: NewsletterFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      const { error } = await supabase
        .from("newsletter_subscriptions")
        .insert({ email: data.email });

      if (error) {
        if (error.code === "23505") { // Unique constraint violation
          toast.info("Bu e-posta adresi zaten kayıtlı.");
        } else if (error.code === '42P01') { // Table does not exist
             toast.error("Bülten abonelikleri özelliği henüz aktif değil.", {
                description: "Lütfen daha sonra tekrar deneyin."
            });
             console.error("newsletter_subscriptions table does not exist.");
        }
        else {
          throw error;
        }
      } else {
        toast.success("Abone olundu!", {
          description: "Bültenimize abone olduğunuz için teşekkürler.",
        });
        form.reset();
      }
    } catch (error) {
      console.error("Subscription error:", error);
      toast.error("Abonelik sırasında bir hata oluştu.", {
        description: "Lütfen daha sonra tekrar deneyin.",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={cn("sm:flex sm:gap-2 items-start", className)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex-grow">
              <FormControl>
                <Input placeholder="E-postanızı girin" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={form.formState.isSubmitting} className="mt-2 sm:mt-0 w-full sm:w-auto shrink-0">
          {form.formState.isSubmitting ? "Gönderiliyor..." : "Abone Ol"}
        </Button>
      </form>
    </Form>
  )
}
