import React from 'react'
import image1 from "../images/img1.jpg"
import Images from '../Api/Imagec'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <><div className='Home-container'>
            <div className='img'>
                <img src={image1} alt="im" /></div>
            <div className='infoo'>
                <h1>Designer, Durable & Luxurious Flooring</h1>
                <p>Relince Flooring is an international brand, now in Nepal, brought to you by Fashion Furnishing! Hand-picked from a vast array of floor covering solutions from all over the world, including laminate flooring, automobile flooring, sports flooring, vinyl planks & heavy-duty hospital flooring products.
                    Call us for a free estimate and find out why GEM Flooring should be your choice.</p>
                <Link to="/protfilio"><button type="submit">Protfilio</button></Link>
            </div>
            <div className='porductcontainer'><h1>Our Product</h1>
                <div className='product'>
                    
                    <br></br>
                    {Images.map((ele) => {
                        const { img, name, des } = ele
                        return (
                            <>
                                <div className='product-card'>
                                 <Link to={`/protfilio/${name}`}>   <div className='porduct-img'>
                                    <img src={img}/>
                                    </div>
                                    <div className='productinfo'>
                                    <h2>{name}</h2>
                                    <p>{des}</p>

                                    </div></Link>
                                </div>

                            </>
                        )
                    })}

                </div>
            </div>
        </div></>
    )
}

export default Home