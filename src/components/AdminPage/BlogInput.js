import React, { useState } from 'react';
import axios from 'axios';
import BlogInputCss from './BlogInput.module.css';
import BlogPreview from './BlogPreview';


const BlogInput = () => {


    const [data, setData] = useState({ img: "", title: "", titleDescription: "", description: "", tags: "" });

    function usrInput(e) {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    function blogPost(event) {
        event.preventDefault();
        let img = document.getElementById('imgLink').value;
        let title = document.getElementById('titleInput').value.toUpperCase();
        let titleDescription = document.getElementById('titleDescription').value;
        let description = document.getElementById('blogContent').value;
        let tags = document.getElementById('tags').value.toUpperCase();
        let date = findDate();
        function findDate() {
            const currenttime = Date.now();
            const date = new Date(currenttime);
            const time = date.toLocaleString();
            console.log(time);
            return time;
        }


        axios.post('http://localhost:4000/blogs', {
            img,
            title,
            titleDescription,
            description,
            tags,
            date
        })
            .then(response => {
                console.log('Data posted successfully:', response.data);
                // clear the form after successful submission
                setData({ img: "", title: "", titleDescription: "", description: "", tags: "" });
                document.getElementById('form').reset();
            })
            .catch(error => {
                console.error('Error posting data:', error);
            });
    }


    return (
        <>
            <form className={BlogInputCss.blog_Input} onSubmit={blogPost} id='form'>
                <div className={BlogInputCss.title}>
                    <label htmlFor="imgLink">Image Url</label>
                    <input type="text" name='img' placeholder='enter your image url' id='imgLink' onChange={usrInput} />
                </div>
                <div className={BlogInputCss.title}>
                    <label htmlFor="titleInput">Title</label>
                    <input type="text" name='title' placeholder='enter your title' id='titleInput' onChange={usrInput} />
                </div>
                <div className={BlogInputCss.title}>
                    <label htmlFor="titleDescription">Sub Header</label>
                    <input type="text" name='titleDescription' placeholder='enter your sub header' id='titleDescription' onChange={usrInput} />
                </div>
                <div className={BlogInputCss.title}>
                    <label htmlFor="blogContent">Blog Content</label>
                    <textarea cols="60" rows="10" name='description' type="text" placeholder='enter your blog content' id='blogContent' onChange={usrInput} />
                </div>
                <div className={BlogInputCss.title}>
                    <label htmlFor="tags">Tags</label>
                    <input type="text" name='tags' placeholder='add tags' id='tags' onChange={usrInput} />
                </div>
                <div className={BlogInputCss.button}>
                    <button type='submit'>Post</button>
                </div>
            </form>
            <div className={BlogInputCss.blog_preview}>
                <BlogPreview data={data} />
            </div>
        </>

    )
}

export default BlogInput