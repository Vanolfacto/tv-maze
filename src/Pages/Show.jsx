import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData, removeTags, noimg } from "../Helpers/helpers";
import "./show.css";
const Show = () => {
  const [data, setData] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [cast, setCast] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getData(`/shows/${id}`, setData);
    getData(`/shows/${id}/seasons`, setSeasons);
    getData(`/shows/${id}/cast`, setCast);
  }, [id]);

  return (
    <div className="show">
      <>
        <h1 className="title">{data.name}</h1>

        <div className="middle">
          <img
            className="showImage"
            src={data?.image?.original ? data.image.original : noimg}
            style={{ borderRadius: "1rem" }}
            alt=""
          />
          <div className="cast">
            <h4 className="miniminititle">CAST</h4>
            {cast.slice(0, 7).map((actor, index) => (
              <div className="characterinfo" key={index}>
                <div className="actorimage">
                  <img
                    className="characterpic"
                    src={
                      actor?.character?.image?.medium
                        ? actor.character.image.medium
                        : noimg
                    }
                    alt=""
                  />
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
            ))}
          </div>
          <div className="seasons">
            <h4 className="miniminititle">SEASONS</h4>
            {seasons.map((season, index) => (
              <div className="miniseason" key={index}>
                <img
                  className="seasonimage"
                  src={season?.image?.medium ? season.image.medium : noimg}
                  alt=""
                ></img>
                <div className="seasonlist">
                  <a href={season.url} className="italictext">
                    <p className="italictextt">Season {season.number}</p>
                  </a>
                  <a href={season.url} className="italictext">
                    <p>Episodes: {season.episodeOrder}</p>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
      <div className="footer">
        <h4>Description</h4>
        <p>{data.summary ? removeTags(data.summary) : null}</p>
      </div>
    </div>
  );
};

export default Show;
