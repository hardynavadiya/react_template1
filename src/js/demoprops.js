import React from 'react'

const Demoprops = (props) => {
    return (
        <div>
             <img src={props.image} alt="avatar"/>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div>
    )
}

export default Demoprops
