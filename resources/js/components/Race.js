import React, { useState } from 'react';

const Race = ({id, name, city, description, price, image, race_at, removeRacePassing2}) => {
    const[readMore, setReadMore] = useState(false)
    return (
        <article className='single-race'>
            <div className='race-info-name'>
                <h4>{name}</h4>                
            </div>
            <img src={image} alt={name}/>
            <footer>            
            <div className='race-info-price'>                
                <h4 className='race-price'>Price from ${price}</h4>
            </div>
            <p>
                { readMore?description:
                // else use expression to get part of the string start with 0
                `${description.substring(0, 200)}...`          
                }
                <button onClick={()=> setReadMore(!readMore)}>
                    {readMore?'show less':'read more'}
                </button>                
            </p>
            <button className='delete-btn' onClick={()=> removeRacePassing2(id)}>remove from the list</button>
                
            </footer>

        </article>
    )
}

export default Race
