
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from 'sonner';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState(localStorage.getItem('mapboxToken') || '');
  const [tokenInput, setTokenInput] = useState('');

  const handleTokenSubmit = () => {
    if (tokenInput.startsWith('pk.')) {
      localStorage.setItem('mapboxToken', tokenInput);
      setMapboxToken(tokenInput);
      toast.success("Mapbox token kaydedildi! Harita şimdi yüklenecek.");
    } else {
      toast.error("Lütfen geçerli bir Mapbox public token girin. 'pk.' ile başlamalıdır.");
    }
  };

  useEffect(() => {
    // Re-initialize map only if token exists, container is available, and map is not already initialized.
    if (mapboxToken && mapContainer.current && !map.current) {
      mapboxgl.accessToken = mapboxToken;
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [28.9784, 41.0082], // Örnek olarak İstanbul koordinatları
        zoom: 13,
      });

      new mapboxgl.Marker()
        .setLngLat([28.9784, 41.0082])
        .addTo(map.current);

      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
    }
    
    // Cleanup function to remove map instance on component unmount
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [mapboxToken]);

  if (!mapboxToken) {
    return (
      <div className="space-y-4 p-4 border rounded-lg bg-card text-card-foreground">
        <h3 className="font-semibold">Haritayı Görüntülemek için Token Gerekli</h3>
        <p className="text-sm text-muted-foreground">
          Haritayı göstermek için lütfen Mapbox Public Token'ınızı girin. Token'ınızı <a href="https://account.mapbox.com/access-tokens" target="_blank" rel="noopener noreferrer" className="underline text-primary">Mapbox hesabınızdan</a> alabilirsiniz.
        </p>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input 
            type="text"
            placeholder="pk.ey..."
            value={tokenInput}
            onChange={(e) => setTokenInput(e.target.value)}
            className="text-foreground"
          />
          <Button type="button" onClick={handleTokenSubmit}>Token'ı Kaydet</Button>
        </div>
        <p className="text-xs text-muted-foreground">
          Uygulamanızı yayınlarken, bu token'ı Supabase projenizde bir 'secret' olarak saklamanızı öneririz.
        </p>
      </div>
    );
  }

  return (
    <div ref={mapContainer} className="w-full h-96 rounded-lg shadow-lg" />
  );
};

export default Map;
