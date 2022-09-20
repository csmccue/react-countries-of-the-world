import React from 'react';

export default function FlagCard({ country, iso2, continent }) {
  return (
    <div className="flag-card">
      <div className="details">
        <div className="country">{country}</div>
      </div>
      <div className="flag">
        <img src="https://flagcdn.com/16x12/ad.png"
          srcSet="https://flagcdn.com/32x24/ad.png 2x,
          https://flagcdn.com/48x36/ad.png 3x"
          width="16"
          height="12"
          alt="Andorra" />
      </div>
    </div>
  );
}
