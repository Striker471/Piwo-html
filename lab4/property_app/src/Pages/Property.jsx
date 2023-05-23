import React from 'react';

const Property = ({property}) => (
  <p>
    {property.city}, ilość pokoi: {property.bedrooms}, {property.description}, cena: {property.price} PLN
  </p>
);

export default Property;
