// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import NewMember from './components/NewMember/NewMember';
import MemberList from './components/MemberList/MemberList';
import { db } from './firebaseConfig';
import { collection, getDocs, addDoc } from 'firebase/firestore';

const App = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'members'));
      const membersData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMembers(membersData);
    };

    fetchData();
  }, []);

  const addMember = async (member) => {
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
    const age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    if (age < 18) {
      alert('Member must be at least 18 years old.');
      return;
    }

    const docRef = await addDoc(collection(db, 'members'), member);
    setMembers([...members, { id: docRef.id, ...member }]);
  };

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/new-member">
            <NewMember addMember={addMember} />
          </Route>
          <Route path="/member-list">
            <MemberList members={members} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
