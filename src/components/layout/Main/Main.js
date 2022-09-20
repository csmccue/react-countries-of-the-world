// import './Main.css';
import FlagCard from '../../FlagCard/FlagCard';
import { useFlags } from '../../../hooks/useFlags';

export default function Main() {
  const { flags } = useFlags();
  console.log(flags);
  return (
    <main>
      Hello there!
      {flags.map((flag) => (
        <FlagCard key={flag.id} {...flag} />
      ))}
    </main>
  );
}
