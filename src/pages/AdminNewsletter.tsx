
import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";
import { tr } from "date-fns/locale";
import { supabase } from "@/lib/supabaseClient";
import { toast } from "sonner";

interface Subscription {
  id: number;
  email: string;
  created_at: string;
}

const AdminNewsletter = () => {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubscriptions = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("newsletter_subscriptions")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching subscriptions:", error);
         if (error.code === '42P01') {
             toast.info("Bülten abonelikleri tablosu henüz oluşturulmamış.", {
                description: "Başlamak için Supabase projenizde 'newsletter_subscriptions' adında bir tablo oluşturun."
            })
        } else {
            toast.error("Abonelikler yüklenirken bir hata oluştu.", {
              description: error.message,
            });
        }
        setSubscriptions([]);
      } else {
        setSubscriptions(data || []);
      }
      setLoading(false);
    };

    fetchSubscriptions();
  }, []);

  return (
    <div>
      <div className="mb-8">
        <div>
          <h1 className="text-3xl font-bold">Bülten Abonelikleri</h1>
          <p className="text-muted-foreground">
            Aşağıda bültene abone olan kullanıcıların e-posta listesi bulunmaktadır.
          </p>
        </div>
      </div>
      <div className="rounded-lg border">
        {loading ? (
          <p className="p-8 text-center text-muted-foreground">Abonelikler yükleniyor...</p>
        ) : subscriptions.length > 0 ? (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>E-posta</TableHead>
                <TableHead>Abonelik Tarihi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {subscriptions.map((sub) => (
                <TableRow key={sub.id}>
                  <TableCell className="font-medium">{sub.email}</TableCell>
                  <TableCell>{format(new Date(sub.created_at), "PPP p", { locale: tr })}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <p className="p-8 text-center text-muted-foreground">Henüz bülten abonesi yok.</p>
        )}
      </div>
    </div>
  );
};

export default AdminNewsletter;
