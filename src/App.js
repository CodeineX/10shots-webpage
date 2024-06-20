import Header from './components/Header';
import './App.css';
import Page1 from './components/Page1';
import RedStrip from './components/RedStrip';
import Page2 from './components/Page2';

const appLink = 'https://play.google.com/store/apps/details?id=com.meteora_10shots.app';

function App() {
  const handleButtonClick = () => {
    window.open(appLink, '_blank'); // Open link in new tab
  };
  return (
    <div className="App">
      <Header/>
      <Page1/>
      <RedStrip buttonText="Download Now" buttonOnClick={handleButtonClick} />
      <section style={{ backgroundColor: 'black', padding: '2rem 1rem', color: 'white', marginBottom: -275 }}>
        <Page2/>
      </section>
      <RedStrip text="Lower Text" buttonText="Download Now" buttonOnClick={handleButtonClick} />
    </div>
  );
}

export default App;
