import React from 'react'
import { useNavigate } from "react-router-dom";
import BlogButtonCss from './AddBlogButton.module.css'

const AddBlogButton = () => {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = "admin"; 
      navigate(path);
    }
  return (
    <div className={BlogButtonCss.button}>
        <button onClick={routeChange}>Add Blog</button>
    </div>
  )
}

export default AddBlogButton