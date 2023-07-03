import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import axios from 'axios';
import { useParams } from 'react-router-dom';
function Viewplace() {
    const {id}=useParams();
    const [places,setPlaces]=useState({});
    const [arr,setArr]=useState([]);
    useEffect(()=>{
        axios.get(`https://traveller.talrop.works/api/v1/places/view/${id}`).then((res)=>{
            setPlaces(res.data.data);
            setArr(res.data.data.gallery);
        }).catch((err)=>{
            console.log(err.message);
        })
    },[id]);
    const gallery=()=>(
        arr.map((item)=>(
            <img src={item.image} alt='gallery' />
        ))
    );
  return (
    <div className='viewplace'>
        <Helmet>
            <title>{`${places.name} | Moke Travel`}</title>
        </Helmet>
        <Wrapper>
            <div className='top'>
                <h1>{places.name}</h1>
                <span>
                    <a href='/' className='button'>{places.category_name}</a>
                    <img src={require("../assets/images/place.svg").default} alt='loc' />
                    <p>{places.location}</p>
                </span>
            </div>
            <div className='middle'>
                <div className='left'>
                    <img src={places.image} alt="img" />
                </div>
                <div className='right'>
                    {gallery()}
                </div>
            </div>
            <div className='bottom'>
                <h2>Place Details</h2>
                <p>{places.description}</p>
            </div>
        </Wrapper>
    </div>
  )
}
export default Viewplace;
const Wrapper= styled.div`
width:80%;
margin:0 auto;
padding-top:72px;
`;