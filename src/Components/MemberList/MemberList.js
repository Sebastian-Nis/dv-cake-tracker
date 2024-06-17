// src/components/memberlist/MemberList.js
import React from 'react';
import MemberCard from '../MemberCard/MemberCard';
import './MemberList.css';

const MemberList = ({ members }) => {
  const sortedMembers = [...members].sort((a, b) => {
    const aDate = new Date(a.birthDate);
    const bDate = new Date(b.birthDate);
    const today = new Date();
    const aNextBirthday = new Date(today.getFullYear(), aDate.getMonth(), aDate.getDate());
    const bNextBirthday = new Date(today.getFullYear(), bDate.getMonth(), bDate.getDate());

    if (aNextBirthday < today) aNextBirthday.setFullYear(today.getFullYear() + 1);
    if (bNextBirthday < today) bNextBirthday.setFullYear(today.getFullYear() + 1);

    return aNextBirthday - bNextBirthday;
  });

  return (
    <div className="member-list">
      {sortedMembers.map(member => (
        <MemberCard key={member.id} member={member} />
      ))}
    </div>
  );
};

export default MemberList;
