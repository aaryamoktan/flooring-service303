import React from 'react'
import Images from '../Api/Imagec'
const Protfilio = () => {
  return (
    <><div className='protfiliocontainer'>
      <div className='protfiliosecond'>
        <div className='explanationofwork'>
          <div className='explainworkinfo'>
            <h1>Our Projects</h1>
          </div>
          <div className='workimg'>
          {Images.map((ele)=>
          {
            return(
               <>
               <div className='card'>
               <img src={ele.img}/>
               </div>
               </>
            )
           
          })}
            
          </div>
        </div>
        <div className='projectmap'>
          <div className='projectinnermap'>
          </div>
        </div>
      </div>
    </div></>
  )
}

export default Protfilio