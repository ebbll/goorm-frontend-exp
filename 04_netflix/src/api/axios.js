import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "baf54fa07f07a2bf7c23d509262f0afb",
    language: "ko-KR",
  },
});

export default instance;
