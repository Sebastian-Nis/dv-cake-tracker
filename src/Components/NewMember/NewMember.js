// src/components/newmember/NewMember.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PlaceAutocomplete from './PlaceAutocomplete';
import './NewMember.css';

const NewMember = ({ addMember }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const navigate = useNavigate();

  const handlePlaceSelect = ({ city, country }) => {
    setCity(city);
    setCountry(country);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMember = { firstName, lastName, birthDate, country, city };
    console.log('Form submitted with:', newMember); // Debugging log
    addMember(newMember);
    navigate('/member-list');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First Name"
        required
      />
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last Name"
        required
      />
      <input
        type="date"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
        placeholder="Birth Date"
        required
      />
      <PlaceAutocomplete onPlaceSelect={handlePlaceSelect} />
      <input
        type="text"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        placeholder="Country"
        required
        readOnly
      />
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="City"
        required
        readOnly
      />
      <div className='button-container'>
      <button type="submit">Add Member 🎂</button>
      </div>
    </form>
  );
};

export default NewMember;
