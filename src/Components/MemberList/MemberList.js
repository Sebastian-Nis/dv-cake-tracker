import React, { useState } from 'react';
import MemberCard from '../membercard/MemberCard';
import './MemberList.css';

const MemberList = ({ members }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [ageSortOrder, setAgeSortOrder] = useState('asc');
  const [nameSortOrder, setNameSortOrder] = useState('asc');
  const [countrySortOrder, setCountrySortOrder] = useState('asc');
  const [citySortOrder, setCitySortOrder] = useState('asc');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSortChange = (option) => {
    if (option === 'age') {
      setAgeSortOrder(ageSortOrder === 'asc' ? 'desc' : 'asc');
      setSortOption(ageSortOrder === 'asc' ? 'ageAsc' : 'ageDesc');
    } else if (option === 'name') {
      setNameSortOrder(nameSortOrder === 'asc' ? 'desc' : 'asc');
      setSortOption(nameSortOrder === 'asc' ? 'nameAsc' : 'nameDesc');
    } else if (option === 'country') {
      setCountrySortOrder(countrySortOrder === 'asc' ? 'desc' : 'asc');
      setSortOption(countrySortOrder === 'asc' ? 'countryAsc' : 'countryDesc');
    } else if (option === 'city') {
      setCitySortOrder(citySortOrder === 'asc' ? 'desc' : 'asc');
      setSortOption(citySortOrder === 'asc' ? 'cityAsc' : 'cityDesc');
    }
  };

  const filteredMembers = members.filter(member => {
    const fullName = `${member.firstName} ${member.lastName}`.toLowerCase();
    return fullName.includes(searchQuery.toLowerCase());
  });

  const sortedMembers = [...filteredMembers].sort((a, b) => {
    if (sortOption === 'ageAsc') {
      return new Date(a.birthDate) - new Date(b.birthDate);
    } else if (sortOption === 'ageDesc') {
      return new Date(b.birthDate) - new Date(a.birthDate);
    } else if (sortOption === 'nameAsc') {
      return `${a.firstName} ${a.lastName}`.localeCompare(`${b.firstName} ${b.lastName}`);
    } else if (sortOption === 'nameDesc') {
      return `${b.firstName} ${b.lastName}`.localeCompare(`${a.firstName} ${a.lastName}`);
    } else if (sortOption === 'countryAsc') {
      return a.country?.localeCompare(b.country);
    } else if (sortOption === 'countryDesc') {
      return b.country?.localeCompare(a.country);
    } else if (sortOption === 'cityAsc') {
      return a.city?.localeCompare(b.city);
    } else if (sortOption === 'cityDesc') {
      return b.city?.localeCompare(a.city);
    } else {
      return 0;
    }
  });

  return (
    <div className="member-list-container">
      <div className="search-filter-bar">
        <input
          type="text"
          placeholder="Search members"
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-bar"
        />
        <div className="filter-buttons">
          <button onClick={() => handleSortChange('name')}>Name <i className="fi fi-rr-sort-alt"></i></button>
          <button onClick={() => handleSortChange('age')}>Age <i className="fi fi-rr-sort-alt"></i></button>
          <button onClick={() => handleSortChange('country')}>Country <i className="fi fi-rr-sort-alt"></i></button>
          <button onClick={() => handleSortChange('city')}>City <i className="fi fi-rr-sort-alt"></i></button>
        </div>
      </div>
      <div className="member-list">
        {sortedMembers.map(member => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default MemberList;
