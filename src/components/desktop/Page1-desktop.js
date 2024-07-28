import React from 'react';
import desktopBackground from '../../assets/bg-desktop.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import '../../App.css'
import QR from '../../assets/QR-Playstore.png'

const betaTesterLink = 'https://groups.google.com/g/closed-testers-10shots';
const appLink = 'https://play.google.com/store/apps/details?id=com.meteora_10shots.app';

const Page1desktop = () => {
  console.log("Width", window.innerWidth)
  const handleTesterButtonClick = () => {
    window.open(betaTesterLink, '_blank'); // Open link in new tab
  };
  const handleAppButtonClick = () => {
    window.open(appLink, '_blank'); // Open link in new tab
  };
  return (
    <section style={{
      backgroundImage: `url(${desktopBackground})`,
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
        <p style={{flex:1, fontSize: '5rem',fontFamily: 'Bebas Neue', fontWeight: 500, color: 'white', textAlign: 'center', marginTop: '3rem' }}>
          STOP THE ZOMBIE <span style={{ color: '#D22F34' }}>SCROLL</span>
        </p>
      </div>
      <div style={{position: 'absolute', bottom: 20, display: 'flex',width: '70%', justifyContent: 'space-between', paddingRight: '3rem', paddingLeft: '3rem' }}>
        <div>
          <div style={{position: 'absolute', bottom: 0,}}>
            <div style={{ backgroundColor: 'rgba(0,0,0,0.5)', padding: '5v', zIndex: 1, paddingLeft: '10px', paddingRight: '10px'}}>
                <p style={{ color: 'white', textAlign: 'center', marginTop: '2rem', fontSize: '2rem', fontWeight: 'bold' }}>
                Consume content that<br/>
                <span style={{ color: '#D22F34', fontSize: '2rem' }}>empowers</span> you
                </p>
            </div>
            {/* <button className='red_button' onClick={handleTesterButtonClick}>
            <span style={{ fontSize: '1.4rem', marginRight: '2rem' }}>1. Join beta testers group</span>
            <FontAwesomeIcon icon={faArrowRight} />
            </button> */}
          </div>
        </div>
        <div>
          <div>
            <img src={QR} alt='Playstore-QR' style={{width: 175}}/>
          </div>
          <span style={{color: 'white', fontSize: '2rem', fontWeight: 'bold'}}>OR<br/><br/></span>
          <button className='red_button' onClick={handleAppButtonClick}>
          <span style={{ fontSize: '1.4rem', marginRight: '1.5rem' }}>Download Now</span>
          <FontAwesomeIcon icon={faGooglePlay} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Page1desktop;
