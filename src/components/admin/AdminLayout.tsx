
import { supabase } from '@/lib/supabaseClient';
import { LogOut, BookMarked, MessageSquare, Mail, Dumbbell, LayoutDashboard } from 'lucide-react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';

const AdminLayout = () => {
  const navigate = useNavigate();

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
    <div className="min-h-screen w-full bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-60 flex-col border-r bg-background sm:flex">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link to="/admin" className="flex items-center gap-2 font-semibold">
              <Dumbbell className="h-6 w-6" />
              <span className="">Admin Paneli</span>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <NavLink
                to="/admin"
                end
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                    isActive && 'bg-muted text-primary'
                  }`
                }
              >
                <LayoutDashboard className="h-4 w-4" />
                Genel Bakış
              </NavLink>
              <NavLink
                to="/admin/bookings"
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                    isActive && 'bg-muted text-primary'
                  }`
                }
              >
                <BookMarked className="h-4 w-4" />
                Randevular
              </NavLink>
              <NavLink
                to="/admin/messages"
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                    isActive && 'bg-muted text-primary'
                  }`
                }
              >
                <MessageSquare className="h-4 w-4" />
                Gelen Mesajlar
              </NavLink>
              <NavLink
                to="/admin/newsletter"
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                    isActive && 'bg-muted text-primary'
                  }`
                }
              >
                <Mail className="h-4 w-4" />
                Bülten Aboneleri
              </NavLink>
            </nav>
          </div>
          <div className="mt-auto p-4">
            <Button variant="ghost" className="w-full justify-start gap-2" onClick={handleLogout}>
              <LogOut className="h-4 w-4" />
              Çıkış Yap
            </Button>
          </div>
        </div>
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-60">
        <main className="flex-1 p-4 sm:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
