import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
const Navbar = () => {
  const [query, setQuery] = useState('');
  useEffect(() => {
    fetch(`/search/shows/${query}`)
      .then(res => res.json())
      .then(res => setQuery(res));
  }, [query]);
  return (
    <div className="navbar">
      <div className="header">
        <Link className="homer" to="/">
          <p className="home">Home</p>
        </Link>
        <input className="search" type="text" />
      </div>
    </div>
  );
};

export default Navbar;
