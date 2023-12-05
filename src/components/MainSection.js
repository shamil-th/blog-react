import React, { useEffect, useState } from 'react'
import './Layout.css'
import Header from './Header.js'
import Cards from './Cards.js'
import Aside from './Aside.js'
import axios from 'axios';


const MainSection = () => {
    const [datas, setDatas] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    useEffect(() => {
        const url = "http://localhost:4000/blogs";
        axios.get(url)
            .then((data) => {
                // console.log(data.data);
                setDatas(data.data);
                setFilteredData(data.data);
            })
    }, [])
    function gettag(tagname) {
        // console.log("tag list", tagname);
        if(tagname===""){
            setFilteredData(datas);
        }else{
            const filtered = datas.filter(data => data.tags === tagname);
            setFilteredData(filtered);
        }
       
    }
    return (
        <div className='content'>
            <Header data={{ title: 'My Blog', subHeader: "Welcome to the blog of", name: "Shamil" }} />
            <div className='cardBody'>
                <div className='titleCards'>
                    <Cards datas={filteredData} />
                </div>
                <Aside datas={datas} gettag={gettag} />
            </div>
        </div>

    )
}

export default MainSection