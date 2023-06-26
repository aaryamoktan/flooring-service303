import React from 'react'
const img = require("../images/epu.jpg")
const About = () => {
  return (
    <>
      <div className='aboutcontainer'>
        <div className='aboutinner'>
          <div className='companyinfo'>
            <div className='companyinfoinner'>
              <h1>What we really do? </h1>

              <p>We provide a vast array of floor covering solutions form all over the world, includeing laminate flooring, automobile flooring, sports flooring, vinyl planks & heavy-duty hospital flooring products.</p>
            </div>
            <div className='companyimg'>
              <img src={img} alt="info" />
            </div>
          </div>
          <div className='ceoinfo'>
            <div className='ceoingoinner'>
              <div className='environtnment'>
                <h2> Environment comes first</h2>
                <br />
                The company strongly believes in caring for the environment. The company diligently works on the looks of its floorings to make them seem natural. This ensures that the floorings become perfect substitutes for natural wood and stone, contributing significantly towards saving these natural products from depletion.
                <br /><br /><br />
                The company also ensures through its various activities that it meets and adheres to all regulations pertaining to the protection of the environment.
              </div>
              <div className='design'>

                <h2> Designed to mesmerize – priced to surprise</h2>
                <br />
                With Gem Flooring, your search for the finest range of floorings will finally come to an end. While the superior quality and design range will floor you, the surprisingly competitive prices will make sure you go no further.
                <br />
                <br />
                <h2>After sales – before everything else</h2>
                <br />
                If you ever get to interact with our after sales team – you’ll know exactly what we are talking about. One call and our team will be right after you. We call it passion.
              </div>
              <div className='performance'>
                <h2> Our performance – your pride</h2>
                Our robust floorings work tirelessly for you – day in and day out. Walk on them, eat, dance, jump, thump, sleep – our floorings will always stand solid – year after year, generation after generation.
                <br /><br /><br /><br />
                <h2>Your canvas – your colors</h2>
                <br /><br />
                We give you a wide range of colors or shades to choose from.
              </div>
            </div>
            <div className='moreinfo'>
              <h1>Need More Information?</h1>
            </div>
            <div className='infodet'>
              <div className='infodet1'>
                <h1>flooringreliable@gmail.com</h1>
              </div>
              <div className='infodet2'>
                <h2> Get a Quote!</h2>
                <p>
                  Call us for a free estimate and find out why Gem Flooring should be your choice.</p>
              </div>


            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About