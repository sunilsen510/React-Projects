import { useEffect, useState } from 'react';

export default function useLoader(minLoadingTime = 1000) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const loadData = new Promise((resolve) => setTimeout(resolve, minLoadingTime));
    const minTimer = new Promise((resolve) => setTimeout(resolve, minLoadingTime));

    Promise.all([loadData, minTimer]).then(() => setLoading(false));
  }, [minLoadingTime]);

  return loading;
}