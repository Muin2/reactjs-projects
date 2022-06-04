
import React, { useState } from "react";
import './gallery.css';
import { MdDisabledByDefault } from "react-icons/md";


import img2 from './imn/img2.jpg';
import img3 from './imn/img3.jpeg';
import img4 from './imn/img4.jpeg';
import img5 from './imn/img5.jpeg';
import img6 from './imn/img6.jpeg';
import img7 from './imn/img7.jpeg';
import img11 from './imn/img11.webp';
import img12 from './imn/img8.webp';



const GAllery = ()=>{
    let data =[
        {
            id:2,
        imgSrc: img2,
        },
     {
            id:3,
        imgSrc: img3,
        },
        {
            id:4,
        imgSrc: img4,
        },
        {
            id:5,
        imgSrc: img5,
        },
        {
            id:6,
        imgSrc: img6,
        },
        {
            id:7,
        imgSrc: img7,
        },
        {
            id:8,
        imgSrc: img11,
        },
        {id:9,
        imgSrc: img12,
        },
    ]
    const [model,setModel] = useState(false);
    const [tempimgSrc, setTempimgSrc]= useState("");

    const getImg =(imgSrc)=>{
        setTempimgSrc(imgSrc);
        setModel(true);
    }
    return(
        <>
<div className={model? "model open": "model"}>
    <img src= { tempimgSrc} alt="" />
    <MdDisabledByDefault onClick={()=>setModel()} />
</div>

        <div className="gallery">
            {data.map((item,index) =>{
                return(
                 <div className="pics" key={index} onClick={()=> getImg (item.imgSrc)}>
                 <img src={item.imgSrc} alt="" style ={{width :'100%'}} />
                 </div>
                )
            })}
        </div>
        
        </>
    )
}

export default GAllery;