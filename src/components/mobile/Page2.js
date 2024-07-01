import React from 'react';
import booksText from '../../assets/page2/booksText.png'
import booksImage from '../../assets/page2/booksImage.png'
import arrow from '../../assets/page2/Arrow 5.png'

import shotsText from '../../assets/page2/10shotsText.png'
import shotsImage1 from '../../assets/page2/10shots-image1.png'
import shotsImage2 from '../../assets/page2/10shots-image2.png'

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
            <span style={{ fontSize: '1.5rem' }}>It is your <span style={{ color: '#D22F34' }}>GROWTH</span> advantage.</span>
        </p>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 40
      }}>
        <img className="autoShow" src={booksText} alt='Books' style={{height: 150, zIndex: 3, position: 'relative', top: 20}}/>
        <img className="autoShow" src={booksImage} alt='BooksImage' style={{filter: 'grayscale(100%)'}}/>
      </div>
      <div>
        <img className="autoShow" src={arrow} alt='arrow'/>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <img className="autoShow" src={shotsText} alt='Books' style={{height: 200, zIndex: 4}}/>
        <img className="autoShow" src={shotsImage2} alt='BooksImage' style={{zIndex: 2}}/>
      </div>
      <div>
          <img className="autoShow" src={shotsImage1} alt='AppImage1' style={{position: 'relative', bottom: 240, right: 40}}/>
      </div>
    </section>
  );
};

export default Page2;
