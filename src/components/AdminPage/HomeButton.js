import React from 'react'
import { useNavigate } from 'react-router-dom'
import HomeCss from './HomeButton.module.css'
const HomeButton = () => {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = "/"; 
      navigate(path);
    }
  return (
    <div className={HomeCss.home}>
        <p>Back to <span onClick={routeChange} className={HomeCss.home_link}>Home</span></p>
    </div>
  )
}

export default HomeButton
 