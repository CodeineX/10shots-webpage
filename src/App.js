import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage';
import Download from './pages/download';

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/download" element={<Download/>}/>
      </Routes>
    </Router>
  )
}

export default App;
