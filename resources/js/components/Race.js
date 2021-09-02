import React, { useState } from 'react';

const Race = ({id, name, city, description, price, image, race_at}) => {
    return (
        <article className='single-tour'>
            <img src={image} alt={name}/>
            <footer>
            <div className='race-info'>
                <h4>{name}</h4>
                <h4 className='race-price'>${price}</h4>
            </div>
            <p>
                {description}
            </p>
            <button className='delete-btn'>remove</button>
                
            </footer>

        </article>
    )
}

export default Race
