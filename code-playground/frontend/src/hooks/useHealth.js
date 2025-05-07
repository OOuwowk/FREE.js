import { useEffect, useState } from 'react';

export default function useHealth() {
  const [health, setHealth] = useState({ status: 'unknown' });
  const [error, setError] = useState(null);

  useEffect(() => {
    // Use localhost for development
    const backendUrl = 'http://localhost:12003/health';
    
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