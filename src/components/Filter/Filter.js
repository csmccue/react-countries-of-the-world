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
      </select>
    </>
  );
}
