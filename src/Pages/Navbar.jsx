import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = props => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState([]);
  // const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
      .then(res => res.json())
      .then(res => setResult(res));
    // fetch('https://api.tvmaze.com/shows')
    //   .then(res => res.json())
    //   .then(res => setData(res));
    //   //{
    //   //   setResult([]);
    //   //   let searchQuery = query.toLowerCase();
    //   //   for (const key in responseData) {
    //   //     let series = responseData[key].name.toLowerCase;
    //   //     if (series.slice(0, searchQuery.length).indexOf(searchQuery) !== -1) {
    //   //       setResult(prevResult => {
    //   //         return [...prevResult, responseData[key].name];
    //   //       });
    //   //     }
    //   //   }
    //   // });
  }, [query]);
  // const handleSearch = q => {
  //   setQuery(q)
  //   fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
  //     .then(res => res.json())
  //     .then(res => setResult(res));
  // };
  return (
    <div className="navbar">
      <div className="header">
        <Link className="homer" to="/">
          <p className="home">Home</p>
        </Link>
        <div className="searchbar">
          <input className="search" placeholder="search" type="text" onChange={event => setQuery(event.target.value)} />
          {result ? (
            <ul className="droplist">
              {result.map((res, index) => (
                <Link className="link" to={`/show/${res.show.id}`}>
                  <li className="lists">{res.show.name}</li>
                </Link>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
