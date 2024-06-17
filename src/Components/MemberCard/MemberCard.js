// src/components/membercard/MemberCard.js
import React from 'react';
import './MemberCard.css';

const MemberCard = ({ member }) => {
  return (
    <div className="member-card">
      <h2>{member.firstName} {member.lastName}</h2>
      <p>Birth Date: {member.birthDate}</p>
      <p>Country: {member.country}</p>
      <p>City: {member.city}</p>
    </div>
  );
};

export default MemberCard;
