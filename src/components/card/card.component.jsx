import React from 'react';

import './card.style.css';

export const Card = (props) => {
    return (
        <div className='card'>
            <img src={`https://robohash.org/${props.id}?set=set2&size=180x180`} alt="" />
            <h3>{props.name}</h3>
        </div>
    )
}