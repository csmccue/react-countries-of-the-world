import { useEffect, useState } from 'react';
import { fetchFlags } from '../services/flags';

export function useFlags() {
  const [continent, setContinent] = useState([]);
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

  const filterCountries = () => {
    if (continent === 'all') {
      return flags;
    } 
    const countries2 = flags.filter((flag) => flag.continent === continent);
    return countries2;
  };


  return { flags, filterCountries, setContinent };
}