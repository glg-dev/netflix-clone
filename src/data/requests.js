
const requests = {
  fetchTrending: `${process.env.REACT_APP_BASEURL}/trending/all/week?api_key=${process.env.REACT_APP_APIKEY}`,
  fetchNetflixOriginals: `${process.env.REACT_APP_BASEURL}/discover/tv?api_key=${process.env.REACT_APP_APIKEY}&with_networks=213`,
  fetchTopRated: `${process.env.REACT_APP_BASEURL}/movie/top_rated?api_key=${process.env.REACT_APP_APIKEY}&language=en-US`,
  fetchActionMovies: `${process.env.REACT_APP_BASEURL}/discover/movie?api_key=${process.env.REACT_APP_APIKEY}&with_genres=28`,
  fetchComedyMovies: `${process.env.REACT_APP_BASEURL}/discover/movie?api_key=${process.env.REACT_APP_APIKEY}&with_genres=35`,
  fetchHorrorMovies: `${process.env.REACT_APP_BASEURL}/discover/movie?api_key=${process.env.REACT_APP_APIKEY}&with_genres=27`,
  fetchRomanceMovies: `${process.env.REACT_APP_BASEURL}/discover/movie?api_key=${process.env.REACT_APP_APIKEY}&with_genres=10749`,
  fetchDocumentaries: `${process.env.REACT_APP_BASEURL}/discover/movie?api_key=${process.env.REACT_APP_APIKEY}&with_genres=99`,
  searchMovies: `${process.env.REACT_APP_BASEURL}/search/movie?api_key=${process.env.REACT_APP_APIKEY}&query=`,
};

export default requests;