
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

interface Booking {
  name: string;
  email: string;
  goal: string;
  date: string;
}

const AdminBookings = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    const storedBookings = localStorage.getItem("bookings");
    if (storedBookings) {
      try {
        const parsedBookings = JSON.parse(storedBookings);
        if (Array.isArray(parsedBookings)) {
          setBookings(parsedBookings);
        }
      } catch (error) {
        console.error("Failed to parse bookings from localStorage", error);
        setBookings([]);
      }
    }
  }, []);

  return (
    <div className="container mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary">Oluşturulan Randevular</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Aşağıda oluşturulan tüm seans randevularının bir listesi bulunmaktadır.
        </p>
      </div>
      <div className="rounded-lg border">
        {bookings.length > 0 ? (
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
              {bookings.map((booking, index) => (
                <TableRow key={index}>
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
