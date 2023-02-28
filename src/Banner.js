import React from 'react'
import './Banner.css'

const styles = {
  backgroundSize: "cover",
  backgroundImage: `url('https://raw.githubusercontent.com/thatanjan/netflix-clone-yt/youtube/media//banner.jpg')`,
  backgroundPosition: "center center"
}

function Banner() {

  const truncate = (string, n) => {
    return string.length > n ? string.substr(0, n-1)+ '...' : string;
  }

  return (
    <header className='banner' style={styles}>
      <div className='banner--contents'>
        <h1 className='banner--title'>Movie Name</h1>
        <div className='banner--buttons'>
          <button className='banner--btn'>Play</button>
          <button className='banner--btn'>My List</button>
        </div>
        <h1 className='banner--description'>{truncate(`This is a description`, 150)}</h1>
      </div>
      <div className='banner--fadeBottom' />
    </header>
  )
}

export default Banner
