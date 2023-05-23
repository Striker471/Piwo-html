import React from 'react';
import Property from './Property';

const PropertiesList = ({propertyList, searchField, searchValue}) => {
  const listOfPropertiesJSX = propertyList
    .filter(it => String(it[searchField]).toLowerCase().includes(searchValue.toLowerCase()))
    .map(it => <Property key={it.id} property={it} />);
    
  return <div>{listOfPropertiesJSX}</div>;
};

export default PropertiesList;
