import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../../App.css'
import axios from 'axios';

const BlackStripDesktop = () => {
  const [email, setEmail] = useState('');

  const handleJoinClick = async () => {
    if (email) {
      // console.log("Email handled")
      try {
        const response = await axios.post('https://gtufwoeebaq3pvjve4k2qj4bd40ktyqt.lambda-url.ap-south-1.on.aws/api/ios-users', {
          email
        });
  
        if (response.status === 200) { // Check for successful status code (200)
          alert('Thank You. You will be notified');
          setEmail(''); // Clear the email input after successful submission
        } else {
          alert('Registration Failed. Please Try Again');
          // Handle the error, like showing an error message to the user
        }
      } catch (error) {
        console.error('Error submitting email:', error);
        alert('Please enter a valid email address.');
        // Handle network errors or other unexpected issues
      }
      setEmail(''); // Clear the email input after successful submission (optional)
    } else {
      alert('Please enter your email address.');
    }
  };

  return (
    <section style={{ backgroundColor: 'black', padding: '1rem', justifyContent: 'center', alignItems: 'center' }}>
      <p style={{ color: 'white', textAlign: 'center', fontSize: '1.5rem' }}>
      iOS app is launching soon,<br/>
      Join the mail list to stay on top<br/>
      </p>
      <div style={{
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  marginTop: '1rem', 
                  marginBottom: '1rem',
                  marginLeft: '10rem',
                  marginRight: '10rem',

      }}>
        <div style={{flex: 3, marginRight: '10rem'}}>
            <input
            type="email"
            id="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              borderRadius: 30,
              height: '2.5rem',
              width: '100%',
              paddingLeft: '1rem',
            }}
          />
        </div>
        <div style={{}}>
            <button onClick={handleJoinClick}>
                <span>Join Now</span>
                <FontAwesomeIcon icon={faArrowRight} style={{marginLeft: '1rem'}}/>
            </button>
        </div>
      </div>
    </section>
  );
};

export default BlackStripDesktop;
