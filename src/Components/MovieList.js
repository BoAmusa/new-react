import React from "react";
import Movie from "./Movie";

const MovieList = ({ movies }) => {
  return (
    <div classname="outline w-25 pa3 mr2 flex-grow-1">
      {movies.map((results, i) => {
        return (
          <Movie
            key={i}
            id={movies[i].id}
            image={movies[i].image}
            title={movies[i].title}
          />
        );
      })}
    </div>
  );
};

export default MovieList;
