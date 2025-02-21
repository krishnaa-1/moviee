import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <h1>hello about</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores neque saepe cum et ipsa sunt praesentium ullam vero reprehenderit fugiat perferendis quisquam beatae, quae aliquam modi esse! Placeat, cum vitae!</p>
            <Link to="/"> <button>Redirect me to Home Page</button> </Link>

        </div>
    )
}

export default About