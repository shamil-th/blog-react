import React from 'react'
import AsideCss from './Aside.module.css'
import BloggerCard from './BloggerCard.js'
import Posts from './Posts.js'
import Tags from './Tags.js'
import AddBlogButton from './AddBlogButton.js'


const Aside = ({datas , gettag}) => {
  return (
    <div className={AsideCss.aside}>
      <BloggerCard />
      <Posts />
      <Tags datas={datas} gettag={gettag}/>
      <AddBlogButton/>
    </div>
  )
}

export default Aside