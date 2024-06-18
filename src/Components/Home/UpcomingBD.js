import React from 'react';
import { Link } from 'react-router-dom';
import './UpcomingBD.css';

const calculateDaysUntilBirthday = (birthday) => {
  const today = new Date();
  const nextBirthday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());
  
  if (nextBirthday < today) {
    nextBirthday.setFullYear(today.getFullYear() + 1);
  }

  const diff = nextBirthday - today;
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
};

const UpcomingBD = ({ members }) => {
  const today = new Date();

  const membersWithAgeAndDaysUntil = members.map(member => {
    const birthDate = new Date(member.birthDate);
    const age = today.getFullYear() - birthDate.getFullYear();
    const daysUntil = calculateDaysUntilBirthday(birthDate);
    return { ...member, age, daysUntil };
  });

  const sortedMembers = membersWithAgeAndDaysUntil.sort((a, b) => a.daysUntil - b.daysUntil);

  return (
    <div className="upcoming-bd-container">
      <h2>Upcoming Birthdays</h2>
      <table className="upcoming-bd-table">
        <thead>
          <tr>
            <th className="days-until">Days Until</th>
            <th className="name">Name</th>
            <th className="age">Age</th>
            <th className="birthday">Birthday</th>
          </tr>
        </thead>
        <tbody>
          {sortedMembers.slice(0, 4).map((member, index) => (
            <tr key={index}>
              <td className="days-until">{member.daysUntil}</td>
              <td className="name">{member.firstName} {member.lastName}</td>
              <td className="age">{member.age}</td>
              <td className="birthday">{new Date(member.birthDate).toLocaleDateString()}</td>
            </tr>
          ))}
          <tr className="view-all-row">
            <td colSpan="4" className="view-all-cell">
              <Link to="/member-list" className="view-all-link">View All Members</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UpcomingBD;
