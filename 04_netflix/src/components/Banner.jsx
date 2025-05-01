import "./Banner.css";

import axios from "../api/axios";
import requests from "../api/request";
import { useEffect, useState } from "react";
// import styled from "styled-components";

export default function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const request = await axios.get(requests.fetchNowPlaying);

    const movieId =
      request.data.results[
        Math.floor(Math.random() * request.data.results.length)
      ].id;

    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      params: { append_to_response: "videos" },
    });

    setMovie(movieDetail);
  };

  // overview가 200자 이하이면 그대로, 200자 초과면 온점 기준으로 200자 이하가 되도록 문장 합치기
  function truncate(text) {
    if (!text) return "";
    if (text.length <= 200) return text;
    const sentences = text.split(/(?<=\.)\s+/);
    let result = "";
    for (let i = 0; i < sentences.length; i++) {
      if ((result + (result ? " " : "") + sentences[i]).length > 200) break;
      result += (result ? " " : "") + sentences[i];
    }
    return result.trim();
  }

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie.title || movie.name || movie.original_name}
        </h1>
        <h1 className="banner_description">{truncate(movie.overview)}</h1>
        <div className="banner_button_wrapper">
          <button className="banner_button play">재생</button>
          <button className="banner_button info">상세 정보</button>
        </div>
      </div>
      <div className="banner_fadeBottom"></div>
    </header>
  );
}
