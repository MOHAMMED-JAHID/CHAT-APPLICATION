import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/chat">Go to Chat</Link>
    </div>
  );
};

export default HomePage;
