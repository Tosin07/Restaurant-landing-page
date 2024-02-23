import React from 'react'
import PickMeals from "../Assets/pick-meals-image.png"
import ChooseMeals from "../Assets/choose-image.png"
import DeliveryMeals from "../Assets/delivery-image.png"


const Work = () => {
    const workInfoData = [
        {image: PickMeals, title:"Pick meals", text: "The best supply food chain in the world"},
        {image: ChooseMeals, title:"Choose How Often", text: "The best supply food chain in the world"},
        {image: DeliveryMeals, title:"Fast Deliveries", text: "The best supply food chain in the world"},
    ]
  return (
    <div className='work-section-wrapper'>
       <div className='work-section-top'>
          <p className='primary-subheading'> Work</p>
          <h1>How it works</h1>
          <h1>Lorem ipsum dolor sit amet consectetur. Non tincidunt 
magna non et elit. Dolor  turpis molestie dui
magnis facilisis at fringilla quam.</h1>
        <div className='work-section-bottom'>
          {workInfoData.map((data) => (
            <div className='work-section-info'>
               <div className='info-boxes-img-container'>
                <img src={data.image} alt=''></img>
               </div>
               <div>
                <h2>{data.title}</h2>
                <p>{data.text}</p>
               </div>
            </div>
          ))}
        </div>
          
       </div>
    </div>
  )
}

export default Work