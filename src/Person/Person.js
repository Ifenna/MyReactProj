import React from 'react'

const person = (prop) => {
    return <h1 onClick={prop.justclick}>Testing react today. Date: {prop.date}. {prop.children}</h1>
};

export default person;