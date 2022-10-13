import { useEffect, useState } from 'react';
import { fetchFlags } from '../services/flags';

export function useFlags() {
  const [flags, setFlags] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchFlags();
        setFlags(data);
      } catch (e) {
        alert('Something went wrong');
      }
    }
    fetchData();
  }, []);

  return { flags };
}