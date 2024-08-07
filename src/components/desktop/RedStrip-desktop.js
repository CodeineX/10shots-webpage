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
    <section style={{ backgroundColor: '#D22F34', padding: '1rem', justifyContent: 'center', alignItems: 'center' }}>
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

















// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import QRBlack from '../../assets/QR-BlackBorder.png'
// import '../../App.css'
// import { faGooglePlay } from '@fortawesome/free-brands-svg-icons';

// const appLink = 'https://play.google.com/store/apps/details?id=com.meteora_10shots.app';
// // const betaTesterLink = 'https://groups.google.com/g/closed-testers-10shots';

// const RedStripDesktop = () => {
// const handleAppButtonClick = () => {
//     window.open(appLink, '_blank'); // Open link in new tab
//     };
// // const handleTesterButtonClick = () => {
// // window.open(betaTesterLink, '_blank'); // Open link in new tab
// // };
//   return (
//     <section style={{ backgroundColor: '#D22F34', padding: '1rem' }}>
//         <div style={{flex: 1, display: 'flex'}}>
//             <div style={{ flex: 2}}>
//                 <div>
//                     <div style={{flex: 2, display: 'flex'}}>
//                         <div style={{ color: 'white', textAlign: 'left', fontSize: '1.5rem', marginRight: 50}}>
//                             {/* <b>Step 1:</b> Join the beta testers group<br/><br/> */}
//                             <b> Download 10shots from Play Store </b>
//                         </div>
//                         <div>
//                             {/* <button onClick={handleTesterButtonClick}><span>Join beta testers group</span></button><br/><br/> */}
//                             <button onClick={handleAppButtonClick}><span>Download 10shots now</span></button>
//                         </div>
//                     </div>
//                 </div>
//                 {/* <div style={{ flex: 1}}>
//                     <p style={{color: 'white', textAlign: 'left', fontSize: '1 rem'}}><br/>*Psst: Unable to access download link? Make sure you join the Google group with your primary account (Playstore account)</p>
//                 </div> */}
//             </div>

//             <div style={{flex: 1}}>
//                 <img src={QRBlack} alt='QR-Code' style={{width: 150}}/>
//                 <span style={{color: 'white'}}><br/>Currently only available <br/>on the PlayStore <FontAwesomeIcon icon={faGooglePlay} /></span>
//             </div>
//         </div>
//     </section>
//   );
// };

// export default RedStripDesktop;
