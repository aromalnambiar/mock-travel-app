import React from 'react';
import { Link } from 'react-router-dom';
function Mainbar() {
  return (
    <div className='navbar'>
      <div className='left'><Link to={"/"}><img src={require("../assets/images/logo.svg").default} alt='logo' /></Link></div>
      <div className='right'><Link to={"/"} className='button'>Login</Link></div>
    </div>
  )
}
export default Mainbar;