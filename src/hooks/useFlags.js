import { useEffect, useState } from 'react';
import { fetchFlags } from '../services/flags';

export function useBlogs() {
  const [flags, setFlags] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchFlags();
      setFlags(data);
    }
    fetchData();
  }, []);

  return { flags };
}