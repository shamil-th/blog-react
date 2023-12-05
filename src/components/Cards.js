import React from 'react'
import CardPost from './CardPost';

const Cards = ({datas}) => {
    
    return datas.map((data) => (

        <CardPost data={data} key={data._id} />

    ))
}

export default Cards