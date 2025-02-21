import React from 'react'
import MovieCard from './MovieCard'
import './movielist.css'

const MovieList = () => {
  return (
    <>
    <div className='movielist-container'>
        <MovieCard 
        name = 'Pushpa'
        description = 'Jhukega Nahi Salaa!!'
        genre = 'Action'
        image = 'https://ih1.redbubble.net/image.3379739428.4774/raf,750x1000,075,t,101010:01c5ca27c6.u1.jpg'
        />
        <MovieCard 
        name = 'Bahubali'
        description = 'Why Kattappa Killed Bahubali?'
        genre = 'Action'  
        image="https://c8.alamy.com/comp/J30B3J/baahubali-the-beginning-aka-bahubali-the-beginning-poster-from-left-J30B3J.jpg" 
        />
        <MovieCard
        name = 'KGF'
        description = 'The Rise of Rocky Bhai'
        genre = 'Action'
        image = "https://i.pinimg.com/474x/6c/af/43/6caf437b14e894148c43f9d77bb71593.jpg"
        />
        <MovieCard
        name = 'Sultan'
        description = 'Wrestling Champion'
        genre = 'Sports'
        image = "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e4558440525121.578330ef8da3c.jpg"
         />
    </div>
    </>
  )
}

export default MovieList