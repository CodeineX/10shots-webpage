import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import QRBlack from '../../assets/QR-BlackBorder.png'
import '../../App.css'
import { faGooglePlay } from '@fortawesome/free-brands-svg-icons';

const appLink = 'https://play.google.com/store/apps/details?id=com.meteora_10shots.app';
const betaTesterLink = 'https://groups.google.com/g/closed-testers-10shots';

const RedStripDesktop = () => {
const handleAppButtonClick = () => {
    window.open(appLink, '_blank'); // Open link in new tab
    };
const handleTesterButtonClick = () => {
window.open(betaTesterLink, '_blank'); // Open link in new tab
};
  return (
    <section style={{ backgroundColor: '#D22F34', padding: '1rem' }}>
        <div style={{flex: 1, display: 'flex'}}>

            <div style={{ flex: 2}}>
                <div>
                    <div style={{flex: 1, display: 'flex'}}>
                        <div style={{ color: 'white', textAlign: 'left', fontSize: '1.5rem', marginRight: 50}}>
                            <b>Step 1:</b> Join the beta testers group<br/><br/>
                            <b>Step 2:</b> Download 10shots from Play Store
                        </div>
                        <div>
                            <button onClick={handleTesterButtonClick}><span>Join beta testers group</span></button><br/><br/>
                            <button onClick={handleAppButtonClick}><span>Download 10shots now</span></button>
                        </div>
                    </div>
                </div>
                <div style={{ flex: 1}}>
                    <p style={{color: 'white', textAlign: 'left', fontSize: '1 rem'}}><br/>*Psst: Unable to access download link? Make sure you join the Google group with your primary account (Playstore account)</p>
                </div>
            </div>

            <div style={{flex: 1}}>
                <img src={QRBlack} style={{width: 150}}/>
                <span style={{color: 'white'}}><br/>Currently only available <br/>on the PlayStore <FontAwesomeIcon icon={faGooglePlay} /></span>
            </div>
        </div>
    </section>
  );
};

export default RedStripDesktop;
