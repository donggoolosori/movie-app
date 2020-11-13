import React from "react";
import styles from "./Movie.module.css";
import PropTypes from "prop-types";

const Movie = ({ year, title, summary, poster, genres }) => {
  return (
    <div className={styles.container}>
      <img src={poster} alt={title} title={title} className={styles.poster} />
      <div className={styles.movie_info}>
        <h3 className={styles.title}>{title}</h3>
        <h5 className={styles.year}>{year}</h5>
        <ul className={styles.genres}>
          {genres.map((genre, index) => (
            <li key={index}>{genre}</li>
          ))}
        </ul>
        <p>
          {summary.slice(0, 140)}
          {summary.length > 180 ? "..." : null}
        </p>
      </div>
    </div>
  );
};

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
