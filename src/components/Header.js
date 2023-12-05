import React from 'react'
import HeaderCss from './Header.module.css';
const Header = ({data}) => {
  return (
    <div className={HeaderCss.title}>
      <h1>{data.title}</h1>
      <p>{data.subHeader} {data.name === "" ? "" : <span> {data.name} </span>}</p>
    </div>
  )
}

export default Header