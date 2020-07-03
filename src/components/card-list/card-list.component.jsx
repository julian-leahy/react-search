import React from 'react';

export const CardList = (props) => {
    return (
        <div>
            {props.robots.map(robot => <h1 key={robot.id}>{robot.name}</h1>)}
        </div>
    )
}