import React from 'react';
import booksText from '../../assets/page2/booksText.png'
import booksImage from '../../assets/page2/booksImage.png'
import arrow from '../../assets/page2/Arrow 5.png'

import shotsText from '../../assets/page2/10shotsText.png'

import shotsDemo from '../../assets/page2/10shots demo-MOBILE.png'

import '../../App.css'

const Page2 = () => {
  return (
    <section style={{
        backgroundColor: 'black'
    }}>
      <div style={{
        width: '100%'
      }}>
        <p style={{flex:1, fontWeight: 700, color: 'white', textAlign: 'left', fontSize: '1.2rem'}}>
            10shots is not just a book summary app.
            <br/>
            <span style={{ fontSize: '1.5rem' }}>It is your <span style={{ color: '#D22F34', fontWeight: 900 }}>GROWTH</span> advantage.</span>
        </p>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 40
      }}>
        <img className="autoShow" src={booksText} alt='Books' style={{objectFit: 'contain', width: 0.25*window.innerWidth, zIndex: 3}}/>
        <img className="autoShow" src={booksImage} alt='BooksImage' style={{objectFit: 'contain', width: 0.6*window.innerWidth, filter: 'grayscale(100%)'}}/>
      </div>
      <div>
        <img className="autoShow" src={arrow} alt='arrow' style={{objectFit: 'contain'}}/>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <img className="autoShow" src={shotsText} alt='Books' style={{objectFit: 'contain', width: 0.3*window.innerWidth, zIndex: 4, position:'relative', bottom: 70}}/>
        <img className="autoShow" src={shotsDemo} alt='Demo' style={{objectFit: 'contain', width: 0.6*window.innerWidth, zIndex: 2}}/>
      </div>
    </section>
  );
};

export default Page2;
