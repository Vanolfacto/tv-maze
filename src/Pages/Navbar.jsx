import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getData, noimg } from "../Helpers/helpers";
import "./navbar.css";

const Navbar = (props) => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    getData(`/search/shows?q=${query}`, setResult);
  }, [query]);

  return (
    <div className="navbar">
      <div className="header">
        <Link className="homer" to="/">
          <p className="home">Home</p>
        </Link>
        <div className="searchbar">
          <input
            className="search"
            placeholder="search"
            type="text"
            onChange={(event) => setQuery(event.target.value)}
          />
          {result ? (
            <ul className="droplist">
              {result.map((res, index) => (
                <Link className="linkkk" to={`/show/${res.show.id}`}>
                  <img
                    className="listimage"
                    src={
                      res?.show?.image?.medium ? res.show.image.medium : noimg
                    }
                    alt=""
                  />
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
