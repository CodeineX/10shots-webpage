import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../../App.css'

const BlackStrip = () => {
  const [email, setEmail] = useState('');

  const handleJoinClick = async () => {
    if (email) {
      console.log("Email handled")
      setEmail(''); // Clear the email input after successful submission (optional)
    } else {
      alert('Please enter your email address.');
    }
  };

  return (
    <section style={{ backgroundColor: 'black', padding: '1rem' }}>
      <p style={{ color: 'white', textAlign: 'center', fontSize: '1.2rem' }}>
      iOS app is launching soon,<br/>
      Join the mail list to stay on top<br/>
      </p>
      <div>
        <div style={{flex: 1}}>
            <input
            type="email"
            id="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              borderRadius: 30,
              height: '2.5rem',
              width: '75%',
              paddingLeft: '1rem',
            }}
          />
        </div>
        <div style={{flex: 1, marginTop: '0.5rem'}}>
            <button onClick={handleJoinClick}>
                <span>Join Now</span>
                <FontAwesomeIcon icon={faArrowRight} style={{marginLeft: '1rem'}}/>
            </button>
        </div>
      </div>
    </section>
  );
};

export default BlackStrip;
