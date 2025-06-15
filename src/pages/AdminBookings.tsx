
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
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabaseClient";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

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

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error("Çıkış yaparken bir hata oluştu", { description: error.message });
    } else {
      toast.success("Başarıyla çıkış yapıldı.");
      navigate("/login");
    }
  };

  return (
    <div className="container mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary">Oluşturulan Randevular</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Aşağıda oluşturulan tüm seans randevularının bir listesi bulunmaktadır.
          </p>
        </div>
        <Button onClick={handleLogout} variant="destructive">Çıkış Yap</Button>
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
