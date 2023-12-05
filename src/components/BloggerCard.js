import React from 'react'
import BloggerCardCss from "./BloggerCard.module.css";

const BloggerCard = () => {
  return ( 
      <div className={BloggerCardCss.userBlog}>
        <div className={BloggerCardCss.userBlogImg}>
          <img src="	https://www.w3schools.com/w3images/avatar_g.jpg" alt='bloggerImg'></img>
        </div>
        <div className={BloggerCardCss.cardDetails}>
          <h4>My Name</h4>
          <p>Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you.</p>
        </div>
      </div>
  )
}

export default BloggerCard