const videos = [
  {
    id: 1,
    title: "JavaScript 기초 강의",
    thumbnail: "./src/assets/thumbnails/thumbnail1.jpg",
    creator: "코딩교육",
    views: 1560000,
  },
  {
    id: 2,
    title: "맛있는 라면 끓이는 방법",
    thumbnail: "./src/assets/thumbnails/thumbnail2.jpg",
    creator: "요리하는개발자",
    views: 89000,
  },
  {
    id: 3,
    title: "2024 트렌드 코딩 언어",
    thumbnail: "./src/assets/thumbnails/thumbnail3.jpg",
    creator: "테크리뷰",
    views: 243000,
  },
  {
    id: 4,
    title: "프론트엔드 개발자 로드맵",
    thumbnail: "./src/assets/thumbnails/thumbnail4.jpg",
    creator: "테크튜터",
    views: 890000,
  },
  {
    id: 5,
    title: "리액트 고급 강좌",
    thumbnail: "./src/assets/thumbnails/thumbnail5.png",
    creator: "웹개발왕",
    views: 450000,
  },
  {
    id: 6,
    title: "파워풀한 기타 연주 모음",
    thumbnail: "./src/assets/thumbnails/thumbnail6.png",
    creator: "Guitar Vibes",
    views: 1560000,
  },
  {
    id: 7,
    title: "고딕 메이크업 튜토리얼",
    thumbnail: "./src/assets/thumbnails/thumbnail7.png",
    creator: "Dark Beauty",
    views: 89000,
  },
  {
    id: 8,
    title: "감성 레트로 게임 스트리밍",
    thumbnail: "./src/assets/thumbnails/thumbnail8.png",
    creator: "Gameholic",
    views: 243000,
  },
  {
    id: 9,
    title: "고전 애니 해석",
    thumbnail: "./src/assets/thumbnails/thumbnail9.png",
    creator: "AniDeep",
    views: 890000,
  },
  {
    id: 10,
    title: "오늘의 믹스 리스트",
    thumbnail: "./src/assets/thumbnails/thumbnail10.png",
    creator: "Mix Daily",
    views: 450000,
  },
];

const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-button");
const videoContainer = document.querySelector(".video-contents");

// 비디오 리스트 출력 함수
function displayVideos(filteredVideos = videos) {
  videoContainer.innerHTML = filteredVideos
    .map(
      (video) => `
		<div class="video-item">
		  <img src="${video.thumbnail}" alt="${video.title}">
		  <div class="video-info">
			<h3>${video.title}</h3>
			<p>${video.creator}</p>
			<p>조회수 ${video.views.toLocaleString()}회</p>
		  </div>
		</div>
	  `
    )
    .join("");
}

// 검색 기능
function filterVideos(keyword) {
  if (!keyword.trim()) {
    return videos;
  }
  return videos.filter((video) => video.title.includes(keyword));
}

// 드래그 스크롤 기능
const scrollContainer = document.querySelector(".contents-menu");
let isDown = false;
let startX;
let scrollLeft;

scrollContainer.addEventListener("mousedown", (e) => {
  isDown = true;
  scrollContainer.classList.add("dragging");
  startX = e.pageX - scrollContainer.offsetLeft;
  scrollLeft = scrollContainer.scrollLeft;
});

scrollContainer.addEventListener("mouseleave", () => {
  isDown = false;
  scrollContainer.classList.remove("dragging");
});

scrollContainer.addEventListener("mouseup", () => {
  isDown = false;
  scrollContainer.classList.remove("dragging");
});

scrollContainer.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - scrollContainer.offsetLeft;
  const walk = (x - startX) * 1.5; // 스크롤 속도 조절
  scrollContainer.scrollLeft = scrollLeft - walk;
});

// 검색 이벤트
searchInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    displayVideos(filterVideos(searchInput.value));
  }
});

searchButton.addEventListener("click", () => {
  displayVideos(filterVideos(searchInput.value));
});

// 초기 비디오 로드
displayVideos();
