import React, { useState, useEffect } from 'react';
import UserContext from './Pages/UserContext';
import Login from './Pages/Login';
import Navbar from './Pages/Navbar';
import PropertiesList from './Pages/PropertiesList';
import useLocalStorage from './Data/useLocalStorage';
import './App.css'; 

const App = () => {
  const users = [
    { email: "Robak@gmail.com", password: "haslo123", firstName: "Andrzej", lastName: "Tadek" },
    { email: "Ponczek@gmail.com", password: "password", firstName: "Robert", lastName: "Bąk" },
    { email: "Papryka@gmail.com", password: "haslo", firstName: "Jonasz", lastName: "Pąk" },
  ];

  const [user, setUser] = useLocalStorage('user', null);
  const [propertyList, setPropertyList] = useState([]);
  const [searchField, setSearchField] = useState('city');
  const [searchValue, setSearchValue] = useState('');
  const [isSortedAsc, setIsSortedAsc] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetch('./data/properties.json')
      .then(response => response.json())
      .then(data => setPropertyList(data));
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  const sortByPrice = () => {
    const sortedList = [...propertyList].sort((a, b) => isSortedAsc ? a.price - b.price : b.price - a.price);
    setPropertyList(sortedList);
    setIsSortedAsc(!isSortedAsc);
  };

  const toggleDarkMode = () => setDarkMode(mode => !mode);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={user}>
      <div className="App">
        <Login users={users} onLogin={setUser} />
        {user && <button onClick={handleLogout}>Logout</button>}
        <Navbar 
          searchField={searchField} 
          searchValue={searchValue}
          setSearchField={setSearchField} 
          setSearchValue={setSearchValue}
          sortByPrice={sortByPrice}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <PropertiesList propertyList={propertyList} searchField={searchField} searchValue={searchValue} />
      </div>
    </UserContext.Provider>
  );
}

export default App;

