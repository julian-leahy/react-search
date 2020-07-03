import React from 'react';
import { Card } from '../card/card.component';

import './card-list.style.css';

export const CardList = (props) => {
    return (
        <div className='card-container'>
            {props.robots.map(robot => <Card key={robot.id} name={robot.name} id={robot.id} />)}
        </div>
    )
}