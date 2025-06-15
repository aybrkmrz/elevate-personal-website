
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Notebook } from "lucide-react";
import { Link } from "react-router-dom";

const ClientDashboard = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Genel Bakış</h1>
        <p className="text-muted-foreground">Danışan paneline hoş geldiniz. Size özel içerikler burada.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
         <Link to="/client/programs">
            <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl">
                        <FileText className="text-primary"/>
                        <span>Programlarım</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Size özel olarak hazırlanan antrenman ve beslenme programlarınıza buradan ulaşabilirsiniz.</p>
                </CardContent>
            </Card>
         </Link>
         <Link to="/client/notes">
            <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl">
                        <Notebook className="text-primary"/>
                        <span>Notlar</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Sizin için alınan özel notları ve ilerleme takibinizi buradan görüntüleyebilirsiniz.</p>
                </CardContent>
            </Card>
         </Link>
      </div>
    </div>
  );
};
export default ClientDashboard;
