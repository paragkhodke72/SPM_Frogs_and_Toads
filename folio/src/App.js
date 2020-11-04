import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <BrowserRouter>
        <nav className="p-4 w-full flex fixed bg-white shadow-lg">
          <Link to="/" className="text-purple-600 font-bold flex-1">MyPage</Link>
          <Link to="/contact" className="text-purple-500">Contact</Link>
        </nav>
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
        <footer className="w-full flex justify-center items-center flex-col bg-black p-12 space-y-4">
          <Link to="/" className="text-purple-400 font-bold flex-1">Home</Link>
          <Link to="/contact" className="text-purple-400 font-bold flex-1">Contact</Link>
          <p className="text-white">Copyright 2020.</p>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
