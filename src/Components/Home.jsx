import React from 'react'
import SearchWeather from './SearchWeather';
import WeatheData from './WeatheData';
import { Route, Routes } from 'react-router-dom';

const Home = ({fetchData,cityName,setCityName,data}) => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <SearchWeather
              fetchData={fetchData}
              cityName={cityName}
              setCityName={setCityName}
            />
          }
        />
        <Route path="/weather" element={<WeatheData data={data} />} />
      </Routes>
    </div>
  );
}

export default Home