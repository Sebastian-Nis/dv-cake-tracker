// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import NewMember from './components/newmember/NewMember';
import MemberList from './components/memberlist/MemberList';
import Header from './components/header/Header';
import { database } from './firebase/config';
import { ref, set, push, onValue } from 'firebase/database';

const App = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const dbRef = ref(database, 'members');
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        console.log('Fetched members:', data); // Debugging log
        const membersArray = Object.keys(data).map(key => ({ id: key, ...data[key] }));
        setMembers(membersArray);
      } else {
        console.log('No data available');
      }
    });
  }, []);

  const addMember = async (member) => {
    console.log('Adding member:', member); // Debugging log
    const memberExists = members.some(existingMember =>
      existingMember.firstName === member.firstName &&
      existingMember.lastName === member.lastName &&
      existingMember.country === member.country &&
      existingMember.city === member.city
    );

    if (memberExists) {
      alert('Member with the same first name, last name, and location already exists.');
      return;
    }

    const birthDate = new Date(member.birthDate);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear(); // Use let here
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    if (age < 18) {
      alert('Member must be at least 18 years old.');
      return;
    }

    try {
      const newMemberRef = push(ref(database, 'members'));
      const newMemberKey = newMemberRef.key;
      await set(newMemberRef, member);
      console.log('Member added successfully:', member); // Debugging log
      setMembers([...members, { id: newMemberKey, ...member }]);
    } catch (error) {
      console.error('Error adding member:', error); // Debugging log
    }
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-member" element={<NewMember addMember={addMember} />} />
          <Route path="/member-list" element={<MemberList members={members} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
