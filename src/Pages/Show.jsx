import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './show.css';
const Show = () => {
  const [data, setData] = useState([]);
  const [season, setSeason] = useState([]);
  const [cast, setCast] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(res => res.json())
      .then(res => setData(res));
    fetch(`https://api.tvmaze.com/shows/${id}/seasons`)
      .then(res => res.json())
      .then(res => setSeason(res));
    fetch(`https://api.tvmaze.com/shows/${id}/cast`)
      .then(res => res.json())
      .then(res => setCast(res));
    //removing element tags;
  }, []);

  const removeTags = arg => {
    let res = arg.replaceAll('/', '');
    res = res.replace(/<b>|<p>|/gi, '');
    return res;
  };

  const noimg =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019';
  return (
    <div className="show">
      {/* <div className="header">
        <p className="home">Home</p>
        <input className="search" type="text" />
      </div> */}
      {/* {data.map((show, index) => ( */}
      <>
        <div className="body">
          <>
            <div className="title">
              <h1 className="maintitle">{data.name}</h1>
            </div>
            <div className="middle">
              <div className="imagediv">
                <img className="ima" src={data?.image?.original ? data.image.original : noimg} style={{ borderRadius: '1rem' }} alt="" />
              </div>

              <div className="cast">
                <h4 className="miniminititle">CAST</h4>
                {cast.slice(0, 7).map((actor, index) => (
                  <>
                    <div className="characterinfo">
                      <div className="actorimage">
                        <img className="characterpic" src={actor?.character?.image?.medium ? actor.character.image.medium : noimg} alt="" />
                      </div>
                      <div className="names">
                        <a href={actor.person.url} className="actorname">
                          {actor.person.name}
                        </a>
                        <a href={actor.character.url} className="italictext">
                          as {actor.character.name}
                        </a>
                      </div>
                    </div>
                  </>
                ))}
              </div>
              <div className="season">
                <h4 className="miniminititle">SEASONS</h4>
                {season.map((seas, index) => (
                  <div className="miniseason">
                    <img className="seasonimage" src={seas?.image?.medium ? seas.image.medium : noimg} alt=""></img>
                    <div className="seasonlist">
                      <a href={seas.url} className="italictext">
                        {' '}
                        <p className="italictextt">Season {seas.number}</p>
                      </a>
                      <a href={seas.url} className="italictext">
                        {' '}
                        <p>Episodes: {seas.episodeOrder}</p>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        </div>
        <div className="footer">
          <h4>Description</h4>
          <p>{data.summary ? removeTags(data.summary) : null}</p>
        </div>
      </>
    </div>
  );
};

export default Show;
