import React, {useState} from 'react'
import { connect } from 'react-redux'
import {updateAuction, deleteAuction} from '../actions'
import {useHistory} from 'react-router-dom'

const CloserLook = (props) => {
    console.log(`closerlook`,props)
    const [editing, setEditing] = useState(false)

    const toggle = () => {
        setEditing(!editing)
    }

        const [listing, setListing] = useState({
            name: '',
            image: '',
            description: '',
            starting_price: '',
            deadline: '',
            user_id: props.user_id
        })

    
        const handleChange = (e) => {
            e.preventDefault()
            setListing({...listing, [e.target.name]: e.target.value})
        }
    
        const handleSubmit = (e) => {
            e.preventDefault()
            props.updateAuction(props.location.state.id, listing)
            setListing({
            name: '',
            image: '',
            description: '',
            starting_price: '',
            deadline: '',
            user_id: props.user_id
            })
        }
    
    let history = useHistory()

    return (
        <div>
            <p>you are in closerlook!</p>
            <p>{props.location.state.name}</p>
            <p>{props.location.state.seller}</p>
            <p>{props.location.state.image}</p>
            <p>{props.location.state.description}</p>
            <p>{props.location.state.deadline}</p>
            <button onClick={()=> {props.deleteAuction(props.location.state.id)
            history.push('/auctions')}}>Delete</button>
            <button onClick={toggle}>Edit</button>

                {editing ? ( (
        <div>
            <p>Sellers Dash</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input name='name' onChange={handleChange} value={listing.name}/>

                <label htmlFor='image'>Image</label>
                <input name='image' onChange={handleChange} value={listing.image}/>

                <label htmlFor='description'>Description</label>
                <input name='description' onChange={handleChange} value={listing.description}/>

                <label htmlFor='starting_price'>Starting price</label>
                <input name='starting_price' onChange={handleChange} value={listing.starting_price}/>

                <label htmlFor='deadline'>Deadline</label>
                <input type='datetime-local' name='deadline' onChange={handleChange} value={listing.deadline}/>

                <button type='submit'>}>Edit Auction</button>
            </form>

        </div>
    )) : (null)}      
        </div>
    )
}


export default connect(state=>{
    return{
        user_id: state.crudReducer.user_id
    }
},{updateAuction, deleteAuction})(CloserLook)

