import "./Nav.css";

import React, { useEffect, useState } from "react";

export default function Nav() {
  const [show, setShow] = useState(false);

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

  return (
    <nav className={`nav ${show ? "nav_black" : ""}`}>
      <div className="nav_left">
        <img
          alt="Netflix Logo"
          src="/src/assets/netflix-logo.png"
          className="nav_logo"
          onClick={() => window.location.reload()}
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
        <ul className="nav_avatar_menu">
          <li>
            <img
              alt="User logged"
              src="/src/assets/netflix-avatar.jpg"
              className="nav_avatar"
            />
            <ul className="depth_1">
              <li className="nav_avatar_menu_item">프로필 관리</li>
              <li className="nav_avatar_menu_item">프로필 이전</li>
              <li className="nav_avatar_menu_item">계정</li>
              <li className="nav_avatar_menu_item">고객 센터</li>
              <hr />
              <li className="nav_avatar_menu_item">넷플릭스에서 로그아웃</li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}
