import React from 'react'

export const CloserLook = (props) => {
    console.log(`closerlook g`,props)
    // add update and delete
    return (
        <div>
            <p>you are in closerlook!</p>
            <p>{props.location.state.name}</p>
            <p>{props.location.state.seller}</p>
            <p>{props.location.state.image}</p>
            <p>{props.location.state.description}</p>
            <p>{props.location.state.deadline}</p>
            
        </div>
    )
}


