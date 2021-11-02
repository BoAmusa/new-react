import react from "react";

const Movie = ({ title, image }) => (
  <div className="fl w-100 w-25-ns pa2 flex-grow-1 grow dib">
    <img class="card__image" src={image} alt={title} />
    <div className="card__content">
      <h3>{title}</h3>
    </div>
  </div>
);

export default Movie;
