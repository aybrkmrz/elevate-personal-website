
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

interface Booking {
  id: number;
  name: string;
  email: string;
  goal: string;
  date: string;
}

const AdminBookings = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("bookings")
        .select("*")
        .order("date", { ascending: false });

      if (error) {
        console.error("Error fetching bookings:", error);
        toast.error("Randevular yüklenirken bir hata oluştu.", {
          description: "Veritabanı bağlantınızı veya 'bookings' tablo adını kontrol edin.",
        });
        setBookings([]);
      } else {
        setBookings(data || []);
      }
      setLoading(false);
    };

    fetchBookings();
  }, []);

  return (
    <div>
      <div className="mb-8">
        <div>
          <h1 className="text-3xl font-bold">Oluşturulan Randevular</h1>
          <p className="text-muted-foreground">
            Aşağıda oluşturulan tüm seans randevularının bir listesi bulunmaktadır.
          </p>
        </div>
      </div>
      <div className="rounded-lg border">
        {loading ? (
          <p className="p-8 text-center text-muted-foreground">Randevular yükleniyor...</p>
        ) : bookings.length > 0 ? (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>İsim</TableHead>
                <TableHead>E-posta</TableHead>
                <TableHead>Hedef</TableHead>
                <TableHead>Tarih</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell className="font-medium">{booking.name}</TableCell>
                  <TableCell>{booking.email}</TableCell>
                  <TableCell>{booking.goal}</TableCell>
                  <TableCell>{format(new Date(booking.date), "PPP", { locale: tr })}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <p className="p-8 text-center text-muted-foreground">Henüz randevu oluşturulmamış.</p>
        )}
      </div>
    </div>
  );
};

export default AdminBookings;
