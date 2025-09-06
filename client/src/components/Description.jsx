import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'



const Description = () => {
  return (
    <motion.div 
    initial={{opacity:0.2,y:100}}
    transition={{duration:1}} 
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}

    className='flex flex-col items-center justify-center my-24 m-6 md:px-28 '>
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2 text-gray-900 '>Create AI Images</h1>
        <p className='text-gray-600  mb-8'>Turn Your imagination into visuals</p>

        <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
            <img src={assets.sample_img_d1} alt="" className='w-80 xl:w-96 rounded-lg '/>
            <div >
                <h2  className='text-3xl font-medium max-w-lg mb-4  text-gray-900' >Introducing the Ai powerd text to image</h2>
                <p className='text-gray-600 mb-4'>Unleash your creativity with our AI-powered text-to-image generator.   Transform your words into stunning visuals in seconds. Perfect for designers, marketers, and content creators looking to bring their ideas to life effortlessly.</p>
                <p className='text-gray-600'>Unlock the power of AI—transform thoughts into breathtaking visuals. From abstract dreams to real designs, bring imagination alive in seconds. Simple, fast, creative, limitless.</p>
            </div>
        </div>
    </motion.div>
  )
}

export default Description