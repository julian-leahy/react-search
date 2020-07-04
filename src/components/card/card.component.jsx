import React from 'react';

import './card.style.css';

export const Card = ({ id, name }) => {
    return (
        <div className='card'>
            <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`${name}`} />
            <h3>{name}</h3>
        </div>
    )
}