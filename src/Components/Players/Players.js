import React from 'react';
import './Players.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Players = (props) => {
    const {name, img, salary} = props.player
    const handleAddPlayer = props.handleAddPlayer
    return (
        <div className="container">
                <div className="player">
                <h2>Player Name: {name}</h2>
                <img src={img} alt=""/>
                <h3>Price ${salary}</h3>
                <button onClick={() => handleAddPlayer(props.player)}><FontAwesomeIcon icon={faShoppingCart}/> Purcase Player</button>
            </div>

        </div>
    );
};

export default Players;