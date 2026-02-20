import { useState } from 'react'
import img1 from "../assests/Frame 1.png"
import img2 from "../assests/Frame 625776.png"
import img3 from "../assests/Property 1=Component 27.png"
import image4 from '../assests/Vector (1).png'
function Nav() {
    const[toggle,setToggle]=useState(false)
    let handleToggle=()=>[

        setToggle(!toggle)
    ]
  return (
    <div>
        <div className='flex justify-between'>
            <div>
                <img src={img1} alt="" />
            </div>
            {/*  */}
            <div className='flex items-center gap-6 border border-gray-300 shadow-sm rounded-full p-2 divide-x-2 divide-gray-300'>
                <button className='pr-2'>Anywhere</button>
                <button className='pr-2'>Anyweek</button>
                <button className='pr-2'>Add guests</button>
                <button className='pr-2'><img src={img2} alt="" /></button>
            </div>
            {/*  */}
            <div className='flex items-center'>
                <button>Airbnb your home</button>
                <img src={img3} alt="" />
                <button onClick={handleToggle}><img src={image4} alt="" /></button>
                {toggle && ( <div className='absolute top-16 right-4 w-48 py-2 bg-white rounded-lg'>
                    <p className='px-4 py-2 hover:bg-gray-300 cursor-pointer'>sign up</p>
                    <p className='px-4 py-2 hover:bg-gray-300 cursor-pointer'>LOgin</p>
                    <p className='px-4 py-2 hover:bg-gray-300 cursor-pointer'>Airbnb your home</p>
                    <p className='px-4 py-2 hover:bg-gray-300 cursor-pointer'>Help center</p>






                </div>



                )}
            </div>
        </div>
    </div>
  )
}

export default Nav