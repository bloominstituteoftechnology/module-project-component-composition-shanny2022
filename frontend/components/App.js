// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayData from './DisplayData';
import styled from 'styled-components';

const AppContainer = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #f5f5f5;
`;

const Title = styled.h1`
  color: #333;
`;

const DatePicker = styled.input`
  margin: 20px 0;
  padding: 10px;
`;

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
    <AppContainer>
      <Title>NASA Picture of the Day</Title>
      <DatePicker type="date" value={date} onChange={handleDateChange} />
      <DisplayData data={data} />
    </AppContainer>
  );
}

export default App;
