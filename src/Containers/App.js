import React, { useEffect, useState } from "react";
import MovieList from "../Components/MovieList";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";


const API_KEY = "k_hohchnsh";
const FEATURED_API = `https://imdb-api.com/en/API/MostPopularMovies/${API_KEY}`;
const SEARCH_API = `https://imdb-api.com/en/API/SearchMovie/${API_KEY}/`;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getMovies(FEATURED_API);
  },[])
  

  //API to retrieves movies via IMdB
  const getMovies = async (API) => {
    setMovies("");
    const response = await fetch(API);
    const responseJson = await response.json();
    setMovies(responseJson.results);
  };

  //Executes search on enter key
  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm);
      setSearchTerm("");
    }
  };

  //Builds up search query from search bar
  const handleOnChange = (value) => {
    setSearchTerm(value);
    getMovies(SEARCH_API + value);
  };

  return (
    <div className="cards">
      <h1 className="f2">Movies</h1>
      <SearchBox
        onChange={(value) => handleOnChange(value)}
        onSubmit={(event) => handleOnSubmit(event)}
      />
      <Scroll className="cards">
        {movies !== undefined && movies !== null && movies.length > 0 ? (
          <MovieList className="cards" movies={movies} />
        ) : (
          <h1>...</h1>
        )}
      </Scroll>
    </div>
  );
};

export default App;
