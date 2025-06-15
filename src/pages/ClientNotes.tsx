
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabaseClient';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Notebook } from 'lucide-react';

const fetchNotes = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error("Kullanıcı bulunamadı.");

    const { data, error } = await supabase
        .from('notes')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
};

const ClientNotes = () => {
    const { data: notes, isLoading, error } = useQuery({
        queryKey: ['clientNotes'],
        queryFn: fetchNotes
    });

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-3xl font-bold">Notlarım</h1>
                <p className="text-muted-foreground">Sizin için alınan özel notlar ve ilerleme takibiniz.</p>
            </div>
             {isLoading && <p>Notlar yükleniyor...</p>}
             {error && <p className="text-destructive">Notlar yüklenirken bir hata oluştu. Lütfen yöneticinizle iletişime geçin.</p>}
             {notes && notes.length > 0 ? (
                <div className="grid gap-6">
                    {notes.map((note: any) => (
                        <Card key={note.id}>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Notebook className="h-5 w-5 text-primary" />
                                    <span>{note.note_title}</span>
                                </CardTitle>
                                <CardDescription>
                                    Oluşturulma Tarihi: {new Date(note.created_at).toLocaleDateString('tr-TR')}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground whitespace-pre-wrap">{note.note_content}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            ) : (
                 !isLoading && <div className="text-center py-20">
                    <p className="text-muted-foreground">Henüz sizin için alınmış bir not bulunmuyor.</p>
                </div>
            )}
        </div>
    );
};

export default ClientNotes;
