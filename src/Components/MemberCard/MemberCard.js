// src/components/membercard/MemberCard.js
import React from 'react';
import './MemberCard.css';

const MemberCard = ({ member, age }) => {
  return (
    <div className="member-card">
      <h2>{member.firstName} {member.lastName}</h2>
      <p>Birth Date: {member.birthDate} ({age})</p>
      <p>Country: {member.country}</p>
      <p>City: {member.city}</p>
    </div>
  );
};

export default MemberCard;
