
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabaseClient";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { BookMarked, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { tr } from "date-fns/locale";

interface Booking {
  id: number;
  name: string;
  date: string;
}

interface Message {
  id: number;
  name: string;
  created_at: string;
}

interface Subscription {
  id: number;
  email: string;
  created_at: string;
}

const fetchDashboardData = async () => {
  const bookingsPromise = supabase.from("bookings").select("id, name, date", { count: "exact" }).order("date", { ascending: false }).limit(3);
  const messagesPromise = supabase.from("messages").select("id, name, created_at", { count: "exact" }).order("created_at", { ascending: false }).limit(3);
  const subscriptionsPromise = supabase.from("newsletter_subscriptions").select("id, email, created_at", { count: "exact" }).order("created_at", { ascending: false }).limit(3);

  const [
    { data: bookings, count: bookingsCount, error: bookingsError },
    { data: messages, count: messagesCount, error: messagesError },
    { data: subscriptions, count: subscriptionsCount, error: subscriptionsError },
  ] = await Promise.all([bookingsPromise, messagesPromise, subscriptionsPromise]);

  if (bookingsError) console.error("Bookings Error:", bookingsError.message);
  if (messagesError) console.error("Messages Error:", messagesError.message);
  if (subscriptionsError) console.error("Subscriptions Error:", subscriptionsError.message);

  return {
    bookings: { data: bookings || [], count: bookingsCount ?? 0 },
    messages: { data: messages || [], count: messagesCount ?? 0 },
    subscriptions: { data: subscriptions || [], count: subscriptionsCount ?? 0 },
  };
};

const AdminDashboard = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["dashboardData"],
    queryFn: fetchDashboardData,
  });

  const renderSkeletonCard = () => (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <Skeleton className="h-4 w-1/3" />
        <Skeleton className="h-4 w-4" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-8 w-1/4 mb-4" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
      </CardContent>
      <CardFooter>
          <Skeleton className="h-9 w-full" />
      </CardFooter>
    </Card>
  );

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Genel Bakış</h1>
        <p className="text-muted-foreground">Admin paneline hoş geldiniz. İşte son durum.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {isLoading ? (
          <>
            {renderSkeletonCard()}
            {renderSkeletonCard()}
            {renderSkeletonCard()}
          </>
        ) : (
          <>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Toplam Randevu</CardTitle>
                <BookMarked className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{data?.bookings.count}</div>
                <p className="text-xs text-muted-foreground mt-1">Son 3 randevu</p>
                <div className="mt-4 space-y-2 text-sm">
                  {data?.bookings.data.map((b: Booking) => (
                    <div key={b.id} className="flex justify-between items-center">
                      <span>{b.name}</span>
                      <span className="text-muted-foreground">{format(new Date(b.date), "dd MMM", { locale: tr })}</span>
                    </div>
                  ))}
                   {data?.bookings.data.length === 0 && <p className="text-sm text-muted-foreground">Henüz randevu yok.</p>}
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild size="sm" className="w-full">
                    <Link to="/admin/bookings">Tümünü Görüntüle</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Gelen Mesajlar</CardTitle>
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{data?.messages.count}</div>
                <p className="text-xs text-muted-foreground mt-1">Son 3 mesaj</p>
                <div className="mt-4 space-y-2 text-sm">
                  {data?.messages.data.map((m: Message) => (
                     <div key={m.id} className="flex justify-between items-center">
                      <span>{m.name}</span>
                      <span className="text-muted-foreground">{format(new Date(m.created_at), "dd MMM", { locale: tr })}</span>
                    </div>
                  ))}
                  {data?.messages.data.length === 0 && <p className="text-sm text-muted-foreground">Henüz mesaj yok.</p>}
                </div>
              </CardContent>
               <CardFooter>
                <Button asChild size="sm" className="w-full">
                    <Link to="/admin/messages">Tümünü Görüntüle</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Bülten Aboneleri</CardTitle>
                <Mail className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{data?.subscriptions.count}</div>
                 <p className="text-xs text-muted-foreground mt-1">Son 3 abone</p>
                 <div className="mt-4 space-y-2 text-sm">
                  {data?.subscriptions.data.map((s: Subscription) => (
                     <div key={s.id} className="flex justify-between items-center truncate">
                      <span className="truncate" title={s.email}>{s.email}</span>
                      <span className="text-muted-foreground flex-shrink-0">{format(new Date(s.created_at), "dd MMM", { locale: tr })}</span>
                    </div>
                  ))}
                  {data?.subscriptions.data.length === 0 && <p className="text-sm text-muted-foreground">Henüz abone yok.</p>}
                </div>
              </CardContent>
               <CardFooter>
                <Button asChild size="sm" className="w-full">
                    <Link to="/admin/newsletter">Tümünü Görüntüle</Link>
                </Button>
              </CardFooter>
            </Card>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
