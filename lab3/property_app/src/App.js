import React, { useState, useEffect } from 'react';
import './App.css'; 

function App() {

  const listOfProperties = [
        { id: 1, city: 'Warszawa', bedrooms: 2, description: 'Przytulne mieszkanie', price: 500000 },
        { id: 2, city: 'Kraków', bedrooms: 3, description: 'Duże mieszkanie', price: 40000 },
        { id: 3, city: 'Wrocław', bedrooms: 5, description: 'Potężne mieszkanie', price: 300000 },
        { id: 4, city: 'Wrocław', bedrooms: 7, description: 'Duże mieszkanie', price: 900000 },
        { id: 5, city: 'Gdańsk', bedrooms: 2, description: 'Genialne', price: 40000 },
        { id: 6, city: 'Moskwa', bedrooms: 6, description: 'Dziwne', price: 60000 },
        { id: 7, city: 'Berlin', bedrooms: 3, description: 'Śliczne', price: 800 },
        { id: 8, city: 'Łódź', bedrooms: 3, description: 'Zwariowane', price: 123123 },
        { id: 9, city: 'Sosnowiec', bedrooms: 2, description: 'Duże mieszkanie', price: 532000 },
        { id: 10, city: 'Zamość', bedrooms: 1, description: 'Duże mieszkanie', price: 743200 },
  ];

  const [propertyList, setPropertyList] = useState(listOfProperties);
  const [searchField, setSearchField] = useState('city');
  const [searchValue, setSearchValue] = useState('');
  const [isSortedAsc, setIsSortedAsc] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);//?
  }, [darkMode]);

  const listOfPropertiesJSX = propertyList
    .filter(it => String(it[searchField]).toLowerCase().includes(searchValue.toLowerCase()))
    .map(it => (  
      <p>
        {it.city}, ilość pokoi: {it.bedrooms}, {it.description}, cena: {it.price} PLN
      </p>
    ));

  const sortByPrice = () => {
    const sortedList = [...propertyList].sort((a, b) => isSortedAsc ? a.price - b.price : b.price - a.price);
    setPropertyList(sortedList);
    setIsSortedAsc(!isSortedAsc);
  };

  const toggleDarkMode = () => setDarkMode(mode => !mode);

  return (
    <div className="App">
      <nav className="navbar">
        <ul className="menu">
          <li>Search</li>
          <li>
            <input    
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)} 
            />
          </li>
          <li>
            <select
              value={searchField}
              onChange={(e) => setSearchField(e.target.value)}
            >
              <option value="city">city</option>
              <option value="bedrooms">bedrooms</option>
              <option value="description">description</option>
            </select>
          </li>
          <li><button onClick={sortByPrice} className="menu-item"> Sort by Price </button></li>
          <li><button onClick={toggleDarkMode}>{darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</button></li>
        </ul>
      </nav>
      {listOfPropertiesJSX}
    </div>
  );
}

export default App;