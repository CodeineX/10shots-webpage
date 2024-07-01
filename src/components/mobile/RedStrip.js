import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../../App.css'

const appLink = 'https://play.google.com/store/apps/details?id=com.meteora_10shots.app';

const RedStrip = () => {
  const handleAppButtonClick = () => {
    window.open(appLink, '_blank'); // Open link in new tab
  };
  return (
    <section style={{ backgroundColor: '#D22F34', padding: '1rem' }}>
      <p style={{ color: 'white', textAlign: 'left', fontSize: '1.2rem' }}>
        <b>Step 1:</b> Join the beta testers group<br/><br/>
        <b>Step 2:</b> Download 10shots from Play Store<br/>
      </p>
      <button onClick={handleAppButtonClick}>
        <span>Download Now</span>
        <FontAwesomeIcon icon={faArrowRight} style={{marginLeft: '3rem'}}/>
      </button>
      <p style={{color: 'white', textAlign: 'left', fontSize: '0.7rem'}}><br/>*Psst: Unable to access download link? Make sure you join the Google group with your primary account (Playstore account)</p>
    </section>
  );
};

export default RedStrip;
