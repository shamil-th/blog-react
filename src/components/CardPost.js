import React, { useState } from 'react'
import CardCss from './Cards.module.css'
import { Card, Button } from 'react-bootstrap';
import ReactTimeAgo from "react-time-ago"


const CardPost = ({ data }) => {

    const date = new Date(data.date);

    const currentDate = new Date(); 
  const diffInDays = Math.floor((currentDate - date) / (1000 * 60 * 60 * 24));
    // console.log(date.toLocaleString());
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => { setIsReadMore(!isReadMore) };

    return (
        <Card className={CardCss.card} >
            <Card.Img className={CardCss.cardimg} variant="top" src={data.img} />
            <Card.Body className={CardCss.cardDetails}>
                <Card.Title className={CardCss.title}>{data.title}</Card.Title>
                <Card.Title className={CardCss.titleDescription}>{data.titleDescription+","} {diffInDays > 0 ? date.toLocaleDateString('en-IN') : <ReactTimeAgo date={date} locale='en-IN' />}</Card.Title>
                <Card.Text className={CardCss.text}>
                    {isReadMore ? data.description.slice(0, 150) : data.description}
                </Card.Text>
                <div className={CardCss.footer}>
                    <Button variant="primary" onClick={toggleReadMore}> {isReadMore ? (<>READ MORE  <span className="material-symbols-outlined">
                        double_arrow
                    </span></>) : (<>SHOW LESS <span className="material-symbols-outlined">
                        keyboard_double_arrow_left
                    </span></>)}</Button>
                    <p className={CardCss.comments}>Comments <span>0</span></p>
                </div>
            </Card.Body>
        </Card >
    )
}

export default CardPost