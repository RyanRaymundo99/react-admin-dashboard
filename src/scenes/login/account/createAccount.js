// RegistrationForm.js
import React, { useState } from 'react';
import { auth } from './api/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpf, setCpf] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState(null);

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      // Set user role to 'basic' in Firestore
      // You need to implement this part
      console.log('User registered successfully:', user);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleRegistration}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <input type="text" placeholder="Brazilian CPF" value={cpf} onChange={(e) => setCpf(e.target.value)} required />
        <input type="tel" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
        <button type="submit">Register</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default RegistrationForm;
