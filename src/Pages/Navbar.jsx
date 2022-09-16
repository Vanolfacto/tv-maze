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
  const noimg =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019';
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
                <Link className="linkkk" to={`/show/${res.show.id}`}>
                  <img className="listimage" src={res?.show?.image?.medium ? res.show.image.medium : noimg} alt="" />
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
