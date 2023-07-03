import axios from 'axios';
import Helmet from 'react-helmet';
import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
function Placeall() {
    const [places,setPlaces]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
        axios.get("https://traveller.talrop.works/api/v1/places/").then((res)=>{
            setPlaces(res.data.data);
        }).catch((err)=>{
            console.log(err);
        });
    },[]);
    const allplaces=()=>(
        places.map((place)=>(
            <li key={place.id} onClick={()=>navigate(`${place.id}`)}>
                <img src={place.image} alt="img" />
                <h3>{place.name}</h3>
                <span className='bottom'>
                    <img src={require("../assets/images/place.svg").default} alt='loc' />
                    <p>{place.location}</p>
                </span>
            </li>
        ))
    )
  return (
    <div className='all'>
        <Helmet>
            <title>Places | Moke Travel</title>
        </Helmet>
        <div className='top'>
            <h1>Welcome</h1>
            <p>Explore the world around you</p>
        </div>
        <div className='bottom'>
            <ul>{allplaces()}</ul>
        </div>
    </div>
  )
}
export default Placeall;
