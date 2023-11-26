import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/homepage.js';
import ChatPage from './components/chatpage.js';

function App() {
  return (

    <Router>
      <Routes>
        <Route exact path="/" component={HomePage} />
        <Route path="/chat" component={ChatPage} />
      </Routes>
    </Router>
  );
}

export default App;
