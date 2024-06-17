// src/components/newmember/PlaceAutocomplete.js
import React, { useState } from 'react';
import { GeoapifyGeocoderAutocomplete, GeoapifyContext } from '@geoapify/react-geocoder-autocomplete';
import '@geoapify/geocoder-autocomplete/styles/minimal.css';

const PlaceAutocomplete = ({ onPlaceSelect }) => {
  const [value, setValue] = useState('');

  const handlePlaceSelect = (value) => {
    const addressComponents = value.properties;
    let city = '';
    let country = '';

    if (addressComponents.city) {
      city = addressComponents.city;
    }
    if (addressComponents.country) {
      country = addressComponents.country;
    }

    onPlaceSelect({ city, country });
  };

  return (
    <GeoapifyContext apiKey="EUJxsgwDRHR8CSnpIYgk">
      <GeoapifyGeocoderAutocomplete
        placeholder="Enter address here"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeSelect={handlePlaceSelect}
      />
    </GeoapifyContext>
  );
};

export default PlaceAutocomplete;
