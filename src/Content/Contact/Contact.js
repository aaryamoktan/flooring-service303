import React from 'react'
const img = require("../images/maitidevi.png")
const Contact = () => {
  return (
    <>
      <><div className='contact_container'>
        <div className='contactinnercontainer'>
          <div className='contact-info'>
            <div className='contact-details'>
              <h1>Contact</h1>
              <p>
                <h3>Connect Us at</h3>
                Contact.no:+977 9818303751, 9843655243
                Email:flooringreliable@gmail.com
              </p>
              <p>
                <h3>Address</h3>
                Maitidevi,Kathmandu
              </p>
            </div>
            <div className='contactlocation'>
              <div className='img'>
                <h3>Our Location</h3>
                <a href="https://www.google.com/maps/place/Maitidevi+Temple/@27.7055668,85.3318355,17z/data=!4m6!3m5!1s0x39eb19a000ac6259:0x9d9f16732861e650!8m2!3d27.705875!4d85.3340061!16s%2Fg%2F1v4k4y74?entry=ttu" target='blank'>  <img src={img} alt="map-img" /></a>
              </div>
            </div>
          </div>
          <div className='informationtable'>
            <div className='forminfo'>
              <p>Contact us for more details for everything else.</p>
            </div> 
            <div className='form'>
              <form>  
                <input type="email" className='inemail' placeholder="Email*"/>
                <br/>
                <input type="text" className='quest' placeholder='Ask Question*'/>
                <br/><button type="submit">Send</button>             </form>
            </div>
          </div>
        </div>
      </div></>
    </>
  )
}

export default Contact