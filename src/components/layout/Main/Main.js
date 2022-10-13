// import './Main.css';
import FlagCard from '../../FlagCard/FlagCard';
import { useFlags } from '../../../hooks/useFlags';
import Filter from '../../Filter/Filter';

export default function Main() {
  const { continent, setContinent, filterCountries } = useFlags();
  return (
    <main>
      Hello there!
      <Filter continent={continent} setContinent={setContinent}/>
      <div>
        {filterCountries().map((flag) => (
          <FlagCard key={flag.id} {...flag} />
        ))}
      </div>
    </main>
  );
}
