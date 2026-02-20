import React from 'react'

function Footer() {
  return (
    <div>
      <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 space-y-4'>
        {[" Holiday rentals","Flat rentals","villa rentals","flat rentals","cottage rentals","flat rentals", "cottage rentals","holiday rentals","holiday rentals","flat rentals","holiday rentals","villa rentals","holiday rentals","flat rentals"," house rentals","holiday rentals","holiday rentals", ].map(() => (
          <p>
            <span className='font-semibold'>Aberfeldy</span> <br />
            Subtext
          </p>

        ))}

      </div>
      
      <hr className='my-24 text-gray-300' />
      
      <div className='grid grid-cols-3 font-semibold '>
        <p>Hosting</p>
        <p className='hidden md:block'>Support</p>
        <p>Airbnb</p>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 space-y-2'>
        {["Help center","Air Cover","Anti-descrimination","Disability support","cancellation options","Report neighborhood concern","Airbnb your home","Air cover for hosts",
          "Hosting resources","Community forum","Hosting responsibly","Newsroom","New feautures","careers", "Investors","Gift cards","Airbnb.org emergency stays",
        ].map((item, i) => (
          <a key={i} href="">{item}</a>
        ))}

      </div>
    </div>
  )
}

export default Footer