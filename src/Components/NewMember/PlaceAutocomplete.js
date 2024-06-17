// src/components/autocomplete/PlaceAutocomplete.js
import React, { useState, useEffect, useRef } from 'react';
import { useMapsLibrary } from '@vis.gl/react-google-maps';

const PlaceAutocomplete = ({ onPlaceSelect }) => {
  const [placeAutocomplete, setPlaceAutocomplete] = useState(null);
  const inputRef = useRef(null);
  const places = useMapsLibrary('places');

  useEffect(() => {
    if (!places || !inputRef.current) return;

    const options = {
      fields: ['address_components', 'geometry'],
    };

    setPlaceAutocomplete(new places.Autocomplete(inputRef.current, options));
  }, [places]);

  useEffect(() => {
    if (!placeAutocomplete) return;

    placeAutocomplete.addListener('place_changed', () => {
      const place = placeAutocomplete.getPlace();
      const addressComponents = place.address_components;
      let city = '';
      let country = '';

      for (const component of addressComponents) {
        const types = component.types;
        if (types.includes('locality') || types.includes('administrative_area_level_2')) {
          city = component.long_name;
        }
        if (types.includes('country')) {
          country = component.long_name;
        }
      }

      onPlaceSelect({ city, country });
    });
  }, [onPlaceSelect, placeAutocomplete]);

  return (
    <div className="autocomplete-container">
      <input ref={inputRef} placeholder="Enter a location" />
    </div>
  );
};

export default PlaceAutocomplete;
