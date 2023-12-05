import React from 'react'
import PostCss from './Posts.module.css'

const PostLists = () => {
    const posts = [
        {
            img: 'https://www.w3schools.com/w3images/workshop.jpg',
            title: 'Lorem',
            description: 'Sed mattis nunc',
            id: 1567
        },
        {
            img: 'https://www.w3schools.com/w3images/gondol.jpg',
            title: 'Ipsum',
            description: 'Praes tinci sed',
            id: 2876
        },
        {
            img: 'https://www.w3schools.com/w3images/skies.jpg',
            title: 'Dorum',
            description: 'Ultricies congue',
            id: 3678
        },
        {
            img: 'https://www.w3schools.com/w3images/rock.jpg',
            title: 'Mingsum',
            description: 'Lorem ipsum dipsum',
            id: 4546
        }
    ]
    return posts.map((post) => (
        <li key={post.id}>
            <img src={post.img} alt="postimg"/>
            <div className={PostCss.postDetails}>
                <p className={PostCss.title}>{post.title}</p>
                <p className={PostCss.description}>{post.description}</p>
            </div>
        </li>
    ))
}

export default PostLists