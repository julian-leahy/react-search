import React from 'react';
import { Card } from '../card/card.component';

export const CardList = (props) => {
    return (
        <div>
            {props.robots.map(robot => <Card key={robot.id} name={robot.name} id={robot.id} />)}
        </div>
    )
}