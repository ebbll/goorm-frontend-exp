import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Row from "./components/Row";
import requests from "./api/request";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="넷플릭스 오리지널"
        id="NO"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row
        title="오늘 전 세계의 TOP 10 시리즈"
        id="TN"
        fetchUrl={requests.fetchTrending}
      />
      <Row title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated} />
      <Row
        title="무료한 당신을 위한 액션 영화"
        id="AM"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        title="어워드 수상 코미디 영화"
        id="CM"
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row
        title="등골이 서늘해지는 호러 영화"
        id="HM"
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Footer />
    </div>
  );
}

export default App;
