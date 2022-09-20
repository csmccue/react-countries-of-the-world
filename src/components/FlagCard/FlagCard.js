import React from 'react';

export default function FlagCard({ id, name, iso2, iso3, local_name }) {
  return (
    <div className="flag-card">
      <div className="details">
        <div className="country">{name}</div>
      </div>
      <div className="flag">
        <img src={`https://flagcdn.com/16x12/${iso2.toLowerCase()}.png`}
          srcSet={`https://flagcdn.com/32x24/${iso2.toLowerCase()}.png 2x`}
          width="16"
          height="12"
          alt="Andorra" />
      </div>
    </div>
  );
}
