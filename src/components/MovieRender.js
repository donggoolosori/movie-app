import React from "react";
import PropTypes from "prop-types";
import Movie from "./Movie";
import styles from "./MovieRender.module.css";

const MovieRender = ({ data }) => {
  return (
    <div className={styles.container}>
      {data.map((movie) => (
        <Movie
          key={movie.id}
          year={movie.year}
          title={movie.title}
          summary={movie.summary}
          poster={movie.poster}
          genres={movie.genres}
        />
      ))}
    </div>
  );
};

MovieRender.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieRender;
