import React, {useEffect, useState} from 'react'
import './Banner.css'
import axios from "../../../axios";
import requests from '../../../Requests';


function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(()=>{
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length-1)
        ]
      );
      return request;
    } 
    
    fetchData();
  }, []);

  console.log(movie)

  
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n-1)+ '...' : string;
  }

  const styles = {
    backgroundSize: "cover",
    backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
    backgroundPosition: "center center"
  }
  

  return (
    <header className='banner' style={styles}>
      <div className='banner--contents'>
        <h1 className='banner--title'>{movie?.title || movie?.name || movie?.orignal_name}</h1>
        <div className='banner--info'>
          <h1 className='banner--date'>{movie?.release_date}</h1>
          <div className='rating'>
            <span class="material-symbols-outlined  star">star</span>
            <h1 className='banner--ratings'>{Math.round(movie.vote_average * 10)/10}</h1>
          </div>
          <h1 className='pg'>PG-13</h1>
        </div>
        <h1 className='banner--description'>{truncate(movie?.overview, 100)}</h1>
        <div className='banner--buttons'>
          <button className='banner--btn play'>Play</button>
          <button className='banner--btn list'>Add To List</button>
        </div>
      </div>
      <div className='banner--fade' />
    </header>
  )
}

export default Banner
