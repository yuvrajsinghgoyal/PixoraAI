import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
const Navbar = () => {
    const {user,setShowLogin,logout,credit} =useContext(AppContext)

    const navigate= useNavigate()

  return (
    <div className='flex justify-between items-center py-4'>
        <Link to='/'>
            <img src={assets.logo} alt=""  className='w-28 sm:w-32 lg:w-40'/>
        </Link>

    <div>
        {
            user ?
            <div className='flex gap-2 items-center sm:gap-3  '>
                <button  onClick={  ()=>  navigate('/buy')} className='flex gap-2 items-center sm:gap-3 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full  hover:scale-105 transition-all duration-700' >
                    <img className="w-5" src={assets.credit_star} alt="" />


                    <p className=' text-xs sm:text-sm font-medium text-gray-600'> Credit left :{credit}</p>
                </button>

                <p className='text-gray-600 max-sm:hidden pl-4'>Hi , {user.name}</p>

                <div className='relative group cursor-pointer'>
                    <img src={assets.profile_icon} className='w-10 drop-shadow' alt="" />
                    <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black pt-12 rounded'>
                        <ul className='bg-white rounded-md  list-none  m-0 p-2  text-sm'> 
                            <li onClick={logout} className='py-1 px-2'>Logout</li>
                        </ul>
                    </div>
                </div>
            </div>
             : 
            <div className='flex gap-2 items-center sm:gap-5 '>
                <p onClick={()=>navigate('/buy')} className='cursor-pointer'  >Pricing</p>
                <button onClick={()=>setShowLogin(true)} className='text-gray-900 bg-white hover:bg-gray-100  px-7 py-2 sm:px-10 rounded-full'>Login</button>
            </div>
        }

    </div>

    </div>
  )
}

export default Navbar