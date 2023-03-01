import axios from '../../../axios';
import React, { useEffect, useState } from 'react'
import './Row.css'
import requests from '../../../Requests';

function Row(props) {

    const[movies, setMovies] = useState([]);
    const baseUrl = "https://image.tmdb.org/t/p/original/";

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(props.fetchUrl)
            setMovies(
                request.data.results
            );
            return request;
        }
        fetchData();
    }, [props.fetchUrl])

  return (
    <div className='row'>
        <h2 className='genres'>{props.title}</h2>
        <div className='row--posters'>
            {movies.map((movie) =>{
                return (
                        <img key = {movie.id} className ={`row--poster ${props.isLarge && "row--poster-large"}`} src={`${baseUrl}${movie.poster_path}`}/> 
                )
            })}
        </div>
    </div>
  )
}

export default Row;
