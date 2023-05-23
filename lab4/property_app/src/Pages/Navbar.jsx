import React from 'react';

const Navbar = ({searchField, searchValue, setSearchField, setSearchValue, sortByPrice, darkMode, toggleDarkMode}) => (
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
);

export default Navbar;
