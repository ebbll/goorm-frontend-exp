const videos = [
  {
    id: 1,
    title: "JavaScript 기초 강의",
    thumbnail: "./src/assets/thumbnails/js_basic.jpg",
    creator: "코딩교육",
    views: 1560000,
  },
  {
    id: 2,
    title: "맛있는 라면 끓이는 방법",
    thumbnail: "./src/assets/thumbnails/cooking.jpg",
    creator: "요리하는개발자",
    views: 89000,
  },
  {
    id: 3,
    title: "2024 트렌드 코딩 언어",
    thumbnail: "./src/assets/thumbnails/trend.jpg",
    creator: "테크리뷰",
    views: 243000,
  },
  {
    id: 4,
    title: "프론트엔드 개발자 로드맵",
    thumbnail: "./src/assets/thumbnails/frontend.jpg",
    creator: "테크튜터",
    views: 890000,
  },
  {
    id: 5,
    title: "리액트 고급 강좌",
    thumbnail: "./src/assets/thumbnails/react.jpg",
    creator: "웹개발왕",
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
  return videos.filter((video) => video.title.includes(keyword));
}

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
