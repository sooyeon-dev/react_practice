import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    )

    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies()
  }, []);

  // fetch 대신 요즘은 async-await 사용
  // useEffect(() => {
    // fetch(
    //   `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    // )
    //   .then((response) => response.json())
    //   .then((json) => {
    //     setMovies(json.data.movies);
    //     setLoading(false);
    //   });
  // }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1> 
      ) : (
        <div>
          {movies.map(movie => (
            <div key={movie.id}>
              <img src={movie.medium_cover_image}></img>
              <h2>{movie.title}</h2>
              <p>{movie.summary}</p>
              <ul>
                <li>
                  {movie.genres.map(g => (
                    <li key={g}>{g}</li>
                  ))}
                </li>
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;

// api : https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year