import React, { useEffect, useState } from "react";
import { fetchData } from "./api";
import MovieRender from "./components/MovieRender";
import styles from "./App.module.css";

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAPI = async () => {
      setData(await fetchData());
      setIsLoading(false);
    };
    fetchAPI();
  }, []);
  return (
    <section className={styles.container}>
      {isLoading ? (
        <div className={styles.loader}>
          <span className={styles.loader_text}>Loading...</span>
        </div>
      ) : (
        <MovieRender data={data} />
      )}
    </section>
  );
};

export default App;
