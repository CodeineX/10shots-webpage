import React from 'react';
import backgroundImage from '../../assets/background.png'; // Replace with your background image path
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import '../../App.css'

const appLink = 'https://play.google.com/store/apps/details?id=com.meteora_10shots.app';

const Page1 = () => {
  console.log("Width", window.innerWidth)
  const handleButtonClick = () => {
    window.open(appLink, '_blank'); // Open link in new tab
  };
  return (
    <section style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',  // Ensures image covers the entire section
      backgroundPosition: 'center', // Centers the image within the section
      minHeight: '100vh', // Makes the section at least the viewport height
      display: 'flex',  // Allows for vertical centering of content
      flexDirection: 'column',  // Stacks content vertically
      padding: '2rem',  // Optional padding around the content
      alignItems: 'center'
    }}>
      <div style={{
        width: '100%'
      }}>
        <p style={{flex:1, fontSize: '4.5rem',fontFamily: 'Bebas Neue', fontWeight: 500, color: 'white', textAlign: 'left', marginTop: '5rem' }}>
          STOP THE
          <br/>
          ZOMBIE <span style={{ color: '#D22F34' }}>SCROLL</span>
        </p>
      </div>
      <div style={{position: 'absolute', bottom: 50 }}>
        <div style={{ backgroundColor: 'rgba(0,0,0,0.5)', padding: '5v', zIndex: 1, paddingLeft: '10px', paddingRight: '10px'}}>
            <p style={{ color: 'white', textAlign: 'center', marginTop: '2rem', fontSize: '1.5rem', fontWeight: 'bold' }}>
              Consume content that<br/>
              <span style={{ color: '#D22F34', fontSize: '2.2rem' }}>empowers</span> you
            </p>
        </div>
        <button className='red_button' onClick={handleButtonClick}>
          <span style={{ fontSize: '1.3rem', marginRight: '1rem' }}>Download Now</span>
          <FontAwesomeIcon icon={faGooglePlay} />
        </button>
      </div>
    </section>
  );
};

export default Page1;
