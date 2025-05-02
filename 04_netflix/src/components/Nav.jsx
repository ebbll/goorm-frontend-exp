import "./Nav.css";
import { useNavigate } from "react-router-dom";

import React, { useEffect, useState } from "react";

export default function Nav() {
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const nav = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    nav(`/search?q=${e.target.value}`);
  };

  return (
    <nav className={`nav ${show ? "nav_black" : ""}`}>
      <div className="nav_left">
        <img
          alt="Netflix Logo"
          src="/src/assets/netflix-logo.png"
          className="nav_logo"
          onClick={() => (window.location.href = "/")}
        />
        <ul className="nav_menu">
          <li className="nav_menu_item">홈</li>
          <li className="nav_menu_item">시리즈</li>
          <li className="nav_menu_item">영화</li>
          <li className="nav_menu_item">게임</li>
          <li className="nav_menu_item">NEW! 요즘 대세 콘텐츠</li>
          <li className="nav_menu_item">내가 찜한 리스트</li>
          <li className="nav_menu_item">언어별로 찾아보기</li>
        </ul>
      </div>
      <div className="nav_right">
        <input
          value={searchValue}
          onChange={handleChange}
          className="nav_input"
          type="text"
          placeholder="제목, 사람, 장르"
        />
        <img
          alt="User logged"
          src="/src/assets/netflix-avatar.jpg"
          className="nav_avatar"
        />
      </div>
    </nav>
  );
}
