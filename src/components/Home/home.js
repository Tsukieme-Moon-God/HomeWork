import React, { useEffect, useState } from "react";
import './home.css'

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://swapi.dev/api/planets/1/");
        const json = await response.json();
        console.log(json.name);
        setData(json);
      } catch (error) {
        console.error(`Обнаружена ошибка:`, error);
      }
    };
    fetchData();
  }, []);

  
  const { name, diameter, climate, population } = data;

  return (
    <div className="container">
      <h1>Главная страница</h1>
      <ul className="planet-details"> 
        <li>
          <strong>Name: </strong>
          {name}
        </li>
        <li>
          <strong>Diameter: </strong>
          {diameter}
        </li>
        <li>
          <strong>Climate: </strong>
          {climate}
        </li>
        <li>
          <strong>Population: </strong>
          {population}
        </li></ul>
    </div>
  );
}

export default Home;

/*
useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
*/
