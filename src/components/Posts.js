import React from 'react'
import PostCss from './Posts.module.css'
import PostLists from './PostLists'

const Posts = () => {
  
    return (
        <div className={PostCss.popularPostsCard}>
            <header>
                <h4>Popular Posts</h4>
            </header>
            <ul className={PostCss.postlist}>
              <PostLists/>
            </ul>

        </div>
    )
}

export default Posts