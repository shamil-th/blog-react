import React from 'react'
import TagsCss from './Tags.module.css'


const TagsList = ({datas , gettag}) => {
const uniqueTags = Array.from(new Set(datas.map(data => data.tags)));
  return uniqueTags.map((tag) => (
    
    <li className={TagsCss.city} key={tag} onClick={() =>gettag(tag)}>{tag}</li>
    
  ))
}

export default TagsList