import React from 'react'
import {useNavigate, useParams} from 'react-router-dom';

const Profile = () => {
    // let navigate = useNavigate();
    // return (
    //     <div>
    //         <h1>This is profile page</h1>
    //         <button onClick={() => {navigate("/BakeryPage")}}>Go to Bakery page</button>
    //     </div>
    // )

    //use of username parameter
    let navigate = useNavigate();
    let {username} = useParams();
    let {age}  = useParams();
    return(
        <div className='profile'>
            <h1>This is profile page of {username} </h1>
            <h2>her age is {age}</h2>
            <button onClick={() => {navigate("/BakeryPage")}}>Go to Bakery page</button>
        </div>
    )
}

export default Profile
