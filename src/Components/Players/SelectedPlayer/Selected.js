import React from 'react';
import './Selected.css'
const Selected = (props) => {
    const selectedPlayer = props.selectedPlayer
    let totalName = []
    for (let i = 0; i < selectedPlayer.length; i++) {
        const allName = selectedPlayer[i];
        totalName = totalName + allName.name + ' ' + ','+ ' '
    }

    let image = 0 
    for (let i = 0; i < selectedPlayer.length; i++) {
        const img = selectedPlayer[i];
        image = image + img.img
    }

    let totalAmount = 0 
    for (let i = 0; i < selectedPlayer.length; i++) {
        const amount = selectedPlayer[i];
        totalAmount = totalAmount + amount.salary
    }

    let individualPlayerAmount = [] 
    for (let i = 0; i < selectedPlayer.length; i++) {
        const individualAmount = selectedPlayer[i];
        individualPlayerAmount = individualPlayerAmount + ' '+ '$' + individualAmount.amount
    }
    return (
        <div className="selectedPlayer">
            <h3 class="text-center my-3 py-3 bg-secondary">Player Selected : {selectedPlayer.length}</h3>
            <div className="selectedPlayerDesc pl-5">
                <h3>Players Name : {totalName}</h3>
                <h3>Individual Players Amount : {individualPlayerAmount}</h3>
                <h3>Total Players Purchased Amount : ${totalAmount}</h3>
            </div>
        </div>
    );
};

export default Selected;