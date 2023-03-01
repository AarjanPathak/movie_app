import React from 'react';
import "./Homescreen.css";
import Navbar from '../Navigation Bar/Navbar';
import Banner from '../Banner/Banner';
import requests from '../Requests';
import Row from '../Main/Row';

function Homescreen() {
  return (
    <div className='homeScreen'>
        <Navbar />
        <Banner />
        <Row 
          title="Top Rated"  fetchUrl={requests.fetchTopRated} isLarge={true}
        />
        <Row 
          title="Trending"  fetchUrl={requests.fetchTrending} 
        />
        <Row 
          title="Documentaries"  fetchUrl={requests.fetchDocumentaries}
        />
        <Row 
          title="Romance Movies"  fetchUrl={requests.fetchRomanceMovies}
        />
        <Row 
          title="Horror Movies"  fetchUrl={requests.fetchHorrorMovies}
        />
        <Row 
          title="Comedy Movies"  fetchUrl={requests.fetchComedyMovies}
        />
        <Row 
          title="Action Movies"  fetchUrl={requests.fetchActionMovies}
        />
    </div>
  )
}

export default Homescreen
