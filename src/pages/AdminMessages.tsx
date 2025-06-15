
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

interface Message {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

const AdminMessages = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("messages")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching messages:", error);
        if (error.code === '42P01') {
             toast.info("Mesajlar tablosu henüz oluşturulmamış.", {
                description: "Başlamak için Supabase projenizde 'messages' adında bir tablo oluşturun."
            })
        } else {
            toast.error("Mesajlar yüklenirken bir hata oluştu.", {
              description: error.message,
            });
        }
        setMessages([]);
      } else {
        setMessages(data || []);
      }
      setLoading(false);
    };

    fetchMessages();
  }, []);

  return (
    <div>
      <div className="mb-8">
        <div>
          <h1 className="text-3xl font-bold">Gelen Mesajlar</h1>
          <p className="text-muted-foreground">
            Aşağıda web sitesi iletişim formundan gelen mesajların listesi bulunmaktadır.
          </p>
        </div>
      </div>
      <div className="rounded-lg border">
        {loading ? (
          <p className="p-8 text-center text-muted-foreground">Mesajlar yükleniyor...</p>
        ) : messages.length > 0 ? (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>İsim</TableHead>
                <TableHead>E-posta</TableHead>
                <TableHead>Mesaj</TableHead>
                <TableHead>Gönderim Tarihi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {messages.map((msg) => (
                <TableRow key={msg.id}>
                  <TableCell className="font-medium">{msg.name}</TableCell>
                  <TableCell>{msg.email}</TableCell>
                  <TableCell><p className="max-w-xs truncate" title={msg.message}>{msg.message}</p></TableCell>
                  <TableCell>{format(new Date(msg.created_at), "PPP p", { locale: tr })}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <p className="p-8 text-center text-muted-foreground">Henüz gönderilmiş bir mesaj yok.</p>
        )}
      </div>
    </div>
  );
};

export default AdminMessages;
