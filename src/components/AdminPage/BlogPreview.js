import React, { useState } from 'react'
import BlogPreviewCss from './BlogPreview.module.css'
import CardCss from '../Cards.module.css'
import { Card,Button } from 'react-bootstrap'

const BlogPreview = ({data}) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => { setIsReadMore(!isReadMore) };
  return (
    <div className={BlogPreviewCss.preview_card}>
        <Card className={CardCss.card} >
            <Card.Img className={CardCss.cardimg} variant="top" src={data.img} />
            <Card.Body className={CardCss.cardDetails}>
                <Card.Title className={CardCss.title}>{data.title.toUpperCase()}</Card.Title>
                <Card.Title className={CardCss.titleDescription}>{data.titleDescription}</Card.Title>
                <Card.Text className={CardCss.text}>
                    {isReadMore ? data.description.slice(0, 150) : data.description}
                </Card.Text>
                <div className={CardCss.footer}>
                    <Button variant="primary" onClick={toggleReadMore}> {isReadMore ? (<>READ MORE  <span className="material-symbols-outlined">
                        double_arrow
                    </span></>) : (<>SHOW LESS <span class="material-symbols-outlined">
                        keyboard_double_arrow_left
                    </span></>)}</Button>
                    <p className={CardCss.comments}>Comments <span>0</span></p>
                </div>
            </Card.Body>
        </Card >
    </div>
  )
}

export default BlogPreview