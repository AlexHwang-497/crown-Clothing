import React from 'react'
import './card.styles.css'

// images: https://robohash.org/1?set=set2
//* we are going to pass an individual monster into our card compnent

export const Card = (props) => (
    // *utilizing this className/css, we will make the squares turqoise
    // todo: ?set=set2, is a URL parameter
        // todo:  i am essentailly saying to use this set of images
    <div className='card-container'>
        {/* add new images */}
        <img alt='monster' src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}></img>
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>
)