// import './Main.css';
import FlagCard from '../../FlagCard/FlagCard';
import { useFlags } from '../../../hooks/useFlags';
import Filter from '../../Filter/Filter';

export default function Main() {
  const { flags, continent, setContinent } = useFlags();
  return (
    <main>
      Hello there!
      <Filter continent={continent} setContinent={setContinent}/>
      <div>
        {flags.map((flag) => (
          <FlagCard key={flag.id} {...flag} />
        ))}
      </div>
    </main>
  );
}
