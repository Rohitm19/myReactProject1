import React from 'react';
import './App.css'

function tweet(props) {
    return (
        <div className = "tweet">
            <h1>{props.name}</h1>
            <h2>{props.message}</h2>
            <h3>Number of likes</h3>
        </div>
    )
}
export default tweet;