import React from 'react';
import booksImage from '../../assets/page2/booksImage.png'
import middleImage from '../../assets/page2/desktop/book-10shots.png'
import tenMin from '../../assets/page2/desktop/10-min.png'
import titles from '../../assets/page2/desktop/Frame 50.png'
import shotsDemo from '../../assets/page2/desktop/10shots demo.png'

import '../../App.css'

const Page2Desktop = () => {
  return (
    <section style={{backgroundColor: 'black'}}>
      <div style={{width: '100%'}}>
        <p style={{flex:1, fontWeight: 700, color: 'white', textAlign: 'left', fontSize: '2rem', paddingLeft: '1.5rem'}}>
            10shots is not just a book summary app.
            <br/>
            <span style={{ fontSize: '4rem' }}>It is your <span style={{ color: '#D22F34' }}>GROWTH</span> advantage.</span>
        </p>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        paddingTop: 20
      }}>
        <img className="autoShow" src={booksImage} alt='BooksImage' style={{filter: 'grayscale(100%)', objectFit: 'contain', width: 0.3*window.innerWidth}}/>

        <img className="autoShow" src={middleImage} alt='Books' style={{objectFit: 'contain', width: 0.25*window.innerWidth }}/>
        
        <img className="autoShow" src={shotsDemo} alt='AppImage1' style={{objectFit: 'contain', width: 0.3*window.innerWidth}}/>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-around', marginTop: 200}}>
        <img src={tenMin} alt='10-min' style={{objectFit: 'contain', width: 300}}/>
        <div >
            <span style={{fontSize: '2rem'}}><b>How Many Titles You Will Read?</b><br/><br/></span>
            <img src={titles} alt='Titles' width={600}/>
        </div>
      </div>
    </section>
  );
};

export default Page2Desktop;
