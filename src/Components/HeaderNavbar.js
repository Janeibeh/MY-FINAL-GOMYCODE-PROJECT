import React from 'react'

const HeaderNavbar = () => {
return (
    <>
            <div className=" container mx-auto w-[95rem] border2 " >
            <nav className=" flex items-center justify-between  h-[6rem]   ">
                <img src="" alt="logo-medicallservices" className=" w-[5rem] h-[2rem] border2" />
                <ul className="flex gap-[3.5rem]"> 
                    <li> Home  </li>
                    <li> About </li>
                    <li> Services </li>
                    <li> Doctors </li>
                    <li> Pharmacy</li>
                    <li> Testimonials</li>
                    <li> Contact </li>
                    <div> <li className=" border w-[11rem] h-[2rem] text-[0.7rem] font-bold rounded-lg  px-12  ml-12 border2"> Register Now</li> </div>
                </ul>
            </nav>
            </div>
     
        
    </>
    )
}

export default HeaderNavbar
