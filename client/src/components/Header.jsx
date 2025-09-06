import React, { useContext } from 'react'
import {assets} from '../assets/assets'
import { motion } from "motion/react"
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const {user,setShowLogin} =useContext(AppContext)

  const navigate= useNavigate()


    const onClickHandler =()=>{
        if(user){
          navigate('/result')
        }else{
          setShowLogin(true)
        }
    }
  return (
    <motion.div className='flex flex-col justify-center items-center text-center my-20 ' 
    initial={{ opacity: 0.2, y: 100 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    >
        <motion.div className=' flex bg-gray-700 text-white gap-2  px-6 py-1 rounded-full border border-neutral-500 '
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{delay:0.2, duration:0.8 }}
        >
            <p>best Text image generator</p>
            <img src={assets.star_icon}/>
        </motion.div>

        <motion.h1 className=' text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px]  mx-auto mt-10 text-center   text-gray-900 '  
        initial={{ opacity: 0,  }}
        animate={{ opacity: 1,  }}
        transition={{delay:0.4, duration:2 }}
        > Create  <span className='text-blue-600'> visual</span> from text, To Fast</motion.h1>

        <motion.p className='text-center max-w-xl mx-auto mt-5 text-gray-900 '
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}  
        transition={{delay:0.6, duration:2 }}
        > Create stunning images from text in seconds with our AI-powered text-to-image generator. Transform your ideas into visual masterpieces effortlessly.</motion.p>

        <motion.button onClick={onClickHandler}
         className='sm:text-lg  w-auto mt-8 px-12 py-2.5 flex item-center gap-2 rounded-full   bg-white text-gray-900 hover:bg-gray-100'
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0  }}
        animate={{ opacity: 1.2 }}
        transition={{ default:{duration:0.5} ,opacity : {delay:0.8,duration:1} }}
        >Generate Images 
          <img className='h-6' src={assets.star_group}/>
        </motion.button>


        <motion.div className='flex flex-wrap justify-center mt-16 gap-3'
        initial={{ opacity: 0,  }}
        animate={{ opacity: 1, }}
        transition={{delay:1, duration:1 }}
        >
          {Array(6).fill('').map((item,index)=>(
            <motion.img 
            whileHover={{ scale: 1.5,duration :0.1}}

            className='rounded hover:scale-105 transition-all  duration-300 cursor-pointer max-sm:w-10' src={index%2===0 ? assets.sample_img_d2: assets.sample_img_d1} key={index} width={70}/>
          ))}
        </motion.div>

        <motion.p className='mt-2 text-neutral-600'
        initial={{ opacity: 0,  }}
        animate={{ opacity: 1,  }}
        transition={{delay:1.2, duration:0.8 }}
        >Generated images from imagify</motion.p>
    </motion.div>
  )
}

export default Header