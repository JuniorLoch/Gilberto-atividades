import axios from "axios";

// API KEY - api_key=28fc232cc001c31e8a031f419d0a14ca
// Base URL - https://api.themoviedb.org/3/
// movie/now_playing?api_key=28fc232cc001c31e8a031f419d0a14ca&language=en-US&page=1
// bypass CORS - https://cors-anywhere.herokuapp.com/https://www.api.com/

const api = axios.create({ baseURL: "https://api.themoviedb.org/3/" });

export default api;
