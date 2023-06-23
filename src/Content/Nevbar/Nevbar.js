import React from 'react'
import img from "./images/gf.png"
const Nevbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="#">Portfolio</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="#">AboutUs</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                       
                    </ul>
                    
                </div>
            </nav>
        </>
    )
}

export default Nevbar