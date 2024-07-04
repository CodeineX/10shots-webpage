import Header from './components/mobile/Header';
import './App.css';
import Page1 from './components/mobile/Page1';
import RedStrip from './components/mobile/RedStrip';
import Page2 from './components/mobile/Page2';
import Page1desktop from './components/desktop/Page1-desktop';
import RedStripDesktop from './components/desktop/RedStrip-desktop';
import Page2Desktop from './components/desktop/Page2-desktop';
import BlackStrip from './components/mobile/BlackStrip';

function App() {
  if(window.innerWidth < 786){
    return (
      <div className="App">
        <Header/>
        <Page1/> 
        <RedStrip/>
        <section style={{ backgroundColor: 'black', padding: '2rem 1rem', color: 'white', marginBottom: -275 }}>
          <Page2/>
        </section>
        <RedStrip/>
        <BlackStrip/>
      </div>
    );
  }
  else{
    return (
      <div className="App">
        <Header/>
        <Page1desktop/>
        <RedStripDesktop/>
        <section style={{ backgroundColor: 'black', padding: '2rem 1rem', color: 'white' }}>
          <Page2Desktop/>
        </section>
        <RedStripDesktop/>
      </div>
    );
  }
}

export default App;
