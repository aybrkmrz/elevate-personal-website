
import { supabase } from '@/lib/supabaseClient';
import { LogOut, User, Dumbbell, LayoutDashboard, Notebook, FileText } from 'lucide-react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { User as SupabaseUser } from '@supabase/supabase-js';

const ClientLayout = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<SupabaseUser | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    }
    getUser();
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
  
  const navLinks = [
    { to: '/client/dashboard', label: 'Genel Bakış', icon: LayoutDashboard },
    { to: '/client/programs', label: 'Programlarım', icon: FileText },
    { to: '/client/notes', label: 'Notlarım', icon: Notebook },
  ];

  return (
    <div className="min-h-screen w-full bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-60 flex-col border-r bg-background sm:flex">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link to="/" className="flex items-center gap-2 font-semibold">
              <Dumbbell className="h-6 w-6 text-primary" />
              <span>Danışan Paneli</span>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              {navLinks.map(link => (
                 <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === '/client/dashboard'}
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                        isActive && 'bg-muted text-primary'
                      }`
                    }
                  >
                    <link.icon className="h-4 w-4" />
                    {link.label}
                  </NavLink>
              ))}
            </nav>
          </div>
          <div className="mt-auto p-4">
             <div className="mb-4 border-t pt-4">
                <div className="flex items-center gap-3">
                    <User className="h-8 w-8 rounded-full bg-muted text-muted-foreground p-1"/>
                    <div>
                        <p className="text-sm font-medium leading-none">{user?.user_metadata?.full_name}</p>
                        <p className="text-xs leading-none text-muted-foreground">{user?.email}</p>
                    </div>
                </div>
            </div>
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

export default ClientLayout;

