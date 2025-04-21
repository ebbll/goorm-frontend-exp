import "./App.css";
import "./temp.css";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="app">
      <Nav className={`nav ${show && "nav_black"}`} />

      <section class="recommend">
        <div class="recommend-theme">회원님을 위해 엄선한 오늘의 콘텐츠</div>
        <div class="thumb-container">
          <img class="thumbnail" src="/src/assets/thumb1.png" />
          <img class="thumbnail" src="/src/assets/thumb2.png" />
          <img class="thumbnail" src="/src/assets/thumb3.png" />
          <img class="thumbnail" src="/src/assets/thumb4.png" />
          <img class="thumbnail" src="/src/assets/thumb5.png" />
          <img class="thumbnail" src="/src/assets/thumb6.png" />
        </div>
      </section>
      <section class="recommend">
        <div class="recommend-theme">은지 님이 시청 중인 콘텐츠</div>
        <div class="thumb-container">
          <img class="thumbnail" src="/src/assets/thumb1.png" />
          <img class="thumbnail" src="/src/assets/thumb2.png" />
          <img class="thumbnail" src="/src/assets/thumb3.png" />
          <img class="thumbnail" src="/src/assets/thumb4.png" />
          <img class="thumbnail" src="/src/assets/thumb5.png" />
          <img class="thumbnail" src="/src/assets/thumb6.png" />
        </div>
      </section>
      <section class="recommend">
        <div class="recommend-theme">드라마</div>
        <div class="thumb-container">
          <img class="thumbnail" src="/src/assets/thumb1.png" />
          <img class="thumbnail" src="/src/assets/thumb2.png" />
          <img class="thumbnail" src="/src/assets/thumb3.png" />
          <img class="thumbnail" src="/src/assets/thumb4.png" />
          <img class="thumbnail" src="/src/assets/thumb5.png" />
          <img class="thumbnail" src="/src/assets/thumb6.png" />
        </div>
      </section>
      <footer>
        <div class="footer-grid">
          <div>화면 해설</div>
          <div>고객 센터</div>
          <div>기프트카드</div>
          <div>미디어 센터</div>
          <div>투자 정보(IR)</div>
          <div>입사 정보</div>
          <div>이용 약관</div>
          <div>개인정보</div>
          <div>법적 고지</div>
          <div>쿠키 설정</div>
          <div>회사 정보</div>
          <div>문의하기</div>
        </div>
        <div class="footer-info">
          <div>
            넷플릭스서비시스코리아 유한회사 통신판매업신고번호:
            제2018-서울종로-0426호 전화번호: 00-308-321-0161 (수신자 부담)
          </div>
          <div>대표: 레지널드 숀 톰프슨</div>
          <div>이메일 주소: korea@netflix.com</div>
          <div>
            주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층
            우편번호 03161
          </div>
          <div>사업자등록번호: 165-87-00119</div>
          <div>클라우드 호스팅: Amazon Web Services Inc.</div>
          <div>공정거래위원회 웹사이트</div>
        </div>
        <div class="my-info">2025-03-19 @Eunji Lee</div>
      </footer>
    </div>
  );
}

export default App;
