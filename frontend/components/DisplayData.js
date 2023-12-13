// DisplayData.js
import React from 'react';

function DisplayData({ data }) {
  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h1>{data.title}</h1>
      <img src={data.url} alt={data.title} />
      <p>{data.explanation}</p>
    </div>
  );
}

export default DisplayData;
