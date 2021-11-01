import React from "react";

const SearchBox = (props) => {
  console.log(props);
  return (
    <div className="pa2">
      <form onSubmit={event => props.onSubmit(event)}>
      <input
        className="pa3 ba b--green bg-lightst-blue"
        type="search"
        placeholder="search movies"
        onChange={event => props.onChange(event.target.value)}
      />
      </form>
    </div>
  );
};

export default SearchBox;
