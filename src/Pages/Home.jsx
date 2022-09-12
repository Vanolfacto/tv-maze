import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/shows')
      .then(res => res.json())
      .then(res => setData(res));
  }, []);

  // let test = `ssss`;

  return (
    <div>
      {/* <div className="header">
        <p className="home">Home</p>
        <input className="search" type="text" />
      </div> */}
      <div className="series">
        <ul className="list">
          {data.slice(0, 50).map((show, index) => (
            <li className="name" key={index}>
              <Link to={`/show/${show.id}`} className="link">
                {/* <div className="sitcom"></div> */}
                <img className="image" src={show.image.medium} alt="" />

                <p className="minititle">{show.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
