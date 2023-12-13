// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayData from './DisplayData';

function App() {
  const [data, setData] = useState(null);
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0]; // format as "yyyy-mm-dd"
  });

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
      .then(response => {
        console.log(response);
        setData(response.data);
      })
      .catch(error => console.error('Error:', error));
  }, [date]); // dependency array includes date

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  return (
    <div>
      <h1>NASA Picture of the Day</h1>
      <input type="date" value={date} onChange={handleDateChange} />
      <DisplayData data={data} />
    </div>
  );
}

export default App;
