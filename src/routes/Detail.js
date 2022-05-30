import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import MovieDetail from '../components/MovieDetail';

export default function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movieInfo, setMovieInfo] = useState([]);

  const getMovie = async () => {
    const json = await(
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json.data.movie);
    setLoading(false);
    setMovieInfo(json.data.movie)
  }
  
  useEffect(() => {
    getMovie();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 
  return (
    <div>
      {loading ? 
        <h1>Loading...</h1> :
        <div>
          { 
            <MovieDetail 
              coverImg={movieInfo.medium_cover_image}
              title={movieInfo.title}
              description={movieInfo.description_full}
            /> 
          }
        </div>
      }
    </div>
  )
}
