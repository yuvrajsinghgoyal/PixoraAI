import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'
import { AppContext } from '../context/AppContext'


const Result = () => {


  const [image , setImage] = useState(assets.sample_img_d1)
  const [isImageLoaded , setIsImageLoaded] = useState(false)
  const[loading , setLoading] = useState(false)
  const [input , setInput] = useState('')
  const {generateImage} = useContext(AppContext)



  const onSubmitHandler = async(e) =>{
      e.preventDefault()
      setLoading(true)

      if(input){
        const image = await generateImage(input)
        if(image){
          setIsImageLoaded(true)
          setImage(image)
        }
      }
      setLoading(false)
  }

  return (
    <motion.form 
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}  
    transition={{type: "spring", stiffness: 100, damping: 20  ,duration:1}}
    viewport={{ once: true }}

    onSubmit={ onSubmitHandler }  action="" className=' flex flex-col min-h-[90vh] justify-center items-center   gap-5'>

      <div>
        <div className='relative '>
          <img src={image}  className='max-w-sm border rounded ' alt="" />
          <span className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${loading ? 'w-full transition-all duration-[10s]' : 'w-0' } `}/>
        </div>
        <p className={!loading ? 'hidden ' : ''} >Loading...</p>
      </div>

      {!isImageLoaded && 
      <div className='flex w-full max-w-xl   bg-neutral-400  text-white text-sm p-0.5 mt-10 rounded-full'>
        <input  onChange={e=>setInput(e.target.value)} value={input} type="text" placeholder='Describe what you want to generate' className='flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-gray-900 text-black' />
        <button className=' px-10 sm:px-16 py-3 rounded-full  bg-white text-gray-900   hover:bg-gray-100 ' type='submit'>Generate</button>
      </div>
      }
      
    {isImageLoaded &&
    <div className='flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 rounded-full'>
      <p onClick={()=>{setIsImageLoaded(false)}} className='bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer' >Generate another</p>
      {/* <a href={image} dawnload className='bg-zinc-900 px-10 py-3 rounded-full cursor-pointer' >Dawnload</a> */}
      <a href={image} download className='text-gray-900 bg-white hover:bg-gray-100  px-10 py-3 rounded-full cursor-pointer'>Download</a>

    </div>
    }


    </motion.form>

  )
}

export default Result