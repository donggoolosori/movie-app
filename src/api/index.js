import axios from "axios";

const url =
  "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating";

export const fetchData = async () => {
  const {
    data: {
      data: { movies },
    },
  } = await axios.get(url);
  const modifiedData = movies.map((movie) => ({
    id: movie.id,
    title: movie.title,
    year: movie.year,
    summary: movie.summary,
    poster: movie.medium_cover_image,
    genres: movie.genres,
  }));
  return modifiedData;
};
