import React, { useState } from 'react';
import validator from 'validator';
import './App.css';

const App = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1
      })
    ) {
      setErrorMessage("Strong Password");
    } else {
      setErrorMessage("Weak Password");
    }
  };

  return (
    <div >
      <h1>Checking Password Strength</h1>
      <span>Enter Password: </span>
      <input
        type="text"
        onChange={(e) => validate(e.target.value)}
      />
      <br />
      {errorMessage !== '' && (
        <span
          style={{
            fontWeight: 'bold',
            color: errorMessage === "Strong Password" ? 'green' : 'red'
          }}
        >
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default App;
