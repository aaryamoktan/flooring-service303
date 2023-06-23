import React from 'react'
import img from "./images/gf.png"
import { Link } from 'react-router-dom'
const Nevbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light ">
                <a class="navbar-brand" href="#">
                    <img src={img} alt="favicon" />
                    <p>Relince Engineering and Flooring Service</p>
                    
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item ">
                            <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item ">
                            <Link class="nav-link" to="/protfilio">Portfolio</Link>
                        </li>
                        <li class="nav-item ">
                            <Link class="nav-link" to="/about">AboutUs</Link>
                        </li>
                        <li class="nav-item ">
                            <Link class="nav-link" to="/contact">Contact</Link>
                        </li>
                       
                    </ul>
                    
                </div>
            </nav>
        </>
    )
}

export default Nevbar