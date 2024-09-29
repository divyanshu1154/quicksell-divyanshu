import {useState, useEffect} from 'react';
import './Card.css'

function Card ({item}){
    const icons = {
        "Todo":"icons/To-do.svg",
        "Backlog": "icons/Backlog.svg",
        "In progress":"icons/in-progress.svg",
        "Done":"icons/Done.svg",
        "Canceled":"icons/Cancelled.svg"
    }

    return (
        <div className='card'>
            <div className='top'>
                {item.id}
            </div>
            <div className='middle'>
                <img src={icons[item.status]} alt="status icon" />
                {item.title}
            </div>
            <div className='bottom'>
                {
                    item.tag.map((elem) => {
                        return <div className='each-tag'>{elem}</div>
                    })
                }
            </div>
        </div>
    )
}

export default Card;