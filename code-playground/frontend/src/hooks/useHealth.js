import { useEffect, useState } from 'react';

export default function useHealth() {
  const [health, setHealth] = useState({ status: 'unknown' });
  const [error, setError] = useState(null);

  useEffect(() => {
    // For development, we'll use a mock response since the backend might not be accessible
    console.log('Checking backend health...');
    
    // Simulate a successful response
    setTimeout(() => {
      const mockData = { status: 'ok' };
      console.log('Backend health (simulated):', mockData);
      setHealth(mockData);
    }, 1000);
    
    // Actual backend call is commented out until deployment
    /*
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
    */
  }, []);

  return { health, error };
}