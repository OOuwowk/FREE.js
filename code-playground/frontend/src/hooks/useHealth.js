import { useEffect, useState } from 'react';

export default function useHealth() {
  const [health, setHealth] = useState({ status: 'unknown' });
  const [error, setError] = useState(null);

  useEffect(() => {
    // Use the public URL for the backend
    const backendUrl = 'https://work-2-vrwslohksisiqstv.prod-runtime.all-hands.dev/health';
    
    fetch(backendUrl)
      .then(r => r.json())
      .then(data => {
        console.log('Backend health:', data);
        setHealth(data);
      })
      .catch(err => {
        console.error('Backend health check failed:', err);
        setError(err.message);
      });
  }, []);

  return { health, error };
}