
import { supabase } from '@/lib/supabaseClient';
import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Session } from '@supabase/supabase-js';

const ProtectedRoute = ({ allowedRoles }: { allowedRoles?: string[] }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
      setLoading(false);
    };

    getSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div>Yükleniyor...</div>
      </div>
    );
  }

  if (!session) {
    return <Navigate to="/login" replace />;
  }
  
  const userRole = session.user.user_metadata?.role;
  console.log("User role from metadata:", userRole);
  console.log("Current session object:", session);


  if (allowedRoles && (!userRole || !allowedRoles.includes(userRole))) {
    // Kullanıcının rolü yetersizse anasayfaya yönlendir.
    // Gelecekte burası bir "Yetkisiz Erişim" sayfasına yönlendirebilir.
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
