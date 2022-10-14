export default function Filter({ continent, setContinent }) {
  return (
    <>
      <p>Filter by Continent</p>
      <select
        className="option"
        value={continent}
        onChange={(e) => {
          setContinent(e.target.value);
        }}>
        <option value ="all">All</option>
        <option value ="Europe">Europe</option>
        <option value ="Asia">Asia</option>
        <option value ="North America">North America</option>
        <option value ="South America">South America</option>
        <option value ="Oceania">Oceania</option>
        <option value ="Africa">Africa</option>
        <option value ="Antarctica">Antarctica</option>
      </select>
    </>
  );
}
