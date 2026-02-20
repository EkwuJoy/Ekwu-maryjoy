import React from 'react'
import img6 from "../assests/Amazing views.png"
import img7 from "../assests/Frame 29 (2).png"
import img8 from "../assests/Frame 29 (3).png"
import img9 from "../assests/Frame 29 (4).png"
import img10 from "../assests/Frame 29 (5).png"
import img11 from "../assests/Frame 29 (6).png"
import img12 from "../assests/Frame 29 (7).png"
import img13 from "../assests/Frame 29 (8).png"
import img14 from "../assests/Frame 29 (9).png"
import img15 from "../assests/Frame 29 (10).png"
import img16 from "../assests/Frame 29 (11).png"
import img17 from "../assests/Frame 29 (12).png"




let properties=[img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17]

export default function Category() {

  return (
    <div>
        <div className='flex '>
        {properties.map ((property, i)=>(
          <div key={i}className='flex flex-col gap-4 p-4'>
            <img src={property} alt="" className=' hover:scale-95' />

          </div>
        ))}
           
            
        </div>
    </div>
  )
}
