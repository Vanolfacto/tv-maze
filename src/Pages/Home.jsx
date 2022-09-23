import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getData } from '../Helpers/helpers';
import './home.css';
const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData('/shows', setData);
  }, []);

  return (
    <>
      <ul className="list">
        {data.slice(0, 50).map((show, index) => (
          <li className="name" key={index}>
            <Link to={`/show/${show.id}`} className="link">
              <img className="image" src={show.image.medium} alt="" />
              <p className="minititle">{show.name}</p>
            </Link>
          </li>
        ))}
      </ul>
      <div>Footer</div>
    </>
  );
};

export default Home;
