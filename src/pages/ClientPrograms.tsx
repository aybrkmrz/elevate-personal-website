
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabaseClient';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Download, FileText, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

const fetchPrograms = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error("Kullanıcı bulunamadı.");

    const { data, error } = await supabase
        .from('programs')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
};

const ClientPrograms = () => {
    const { data: programs, isLoading, error } = useQuery({
        queryKey: ['clientPrograms'],
        queryFn: fetchPrograms
    });

    const getProgramIcon = (type: string) => {
        if (type === 'antrenman') {
            return <FileText className="h-5 w-5 text-primary" />;
        }
        if (type === 'beslenme') {
            return <Utensils className="h-5 w-5 text-primary" />;
        }
        return <FileText className="h-5 w-5 text-primary" />;
    };

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-3xl font-bold">Programlarım</h1>
                <p className="text-muted-foreground">Size özel olarak hazırlanan antrenman ve beslenme programlarınız.</p>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Tüm Programlar</CardTitle>
                </CardHeader>
                <CardContent>
                    {isLoading && <p>Yükleniyor...</p>}
                    {error && <p className="text-destructive">Programlar yüklenirken bir hata oluştu. Lütfen yöneticinizle iletişime geçin.</p>}
                    {programs && programs.length > 0 ? (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Program Adı</TableHead>
                                    <TableHead>Türü</TableHead>
                                    <TableHead>Başlangıç Tarihi</TableHead>
                                    <TableHead>Bitiş Tarihi</TableHead>
                                    <TableHead className="text-right">İndir</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {programs.map((program: any) => (
                                    <TableRow key={program.id}>
                                        <TableCell className="font-medium flex items-center gap-2">
                                            {getProgramIcon(program.program_type)}
                                            {program.program_name}
                                        </TableCell>
                                        <TableCell className="capitalize">{program.program_type}</TableCell>
                                        <TableCell>{new Date(program.start_date).toLocaleDateString('tr-TR')}</TableCell>
                                        <TableCell>{new Date(program.end_date).toLocaleDateString('tr-TR')}</TableCell>
                                        <TableCell className="text-right">
                                            <Button asChild variant="ghost" size="icon" disabled={!program.file_url}>
                                                <a href={program.file_url} target="_blank" rel="noreferrer">
                                                    <Download className="h-4 w-4" />
                                                </a>
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    ) : (
                        !isLoading && <div className="text-center py-10">
                            <p className="text-muted-foreground">Henüz size atanmış bir program bulunmuyor.</p>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
};

export default ClientPrograms;
