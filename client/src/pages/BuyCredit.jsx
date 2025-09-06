import React, { useContext } from 'react'
import { assets, plans } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { motion } from 'motion/react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'


const BuyCredit = () => {
  const  {user, backendUrl, loadCreditsData, token, setShowLogin} = useContext(AppContext) 

  const navigate = useNavigate()

  const initPay = async (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: 'credits Payment',
      description: 'credits Payment',
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        
        try {

          const {data} = await axios.post(backendUrl + '/api/user/verify-razor',response, {headers:{token}})
          if(data.success){
            loadCreditsData();

            navigate('/')
            toast.success('Credit Added')
          }

        } catch (error) {
            toast.error(error.message)
        }
      }
    }
    const rzp = new window.Razorpay(options)
    rzp.open()
  }
  

  const paymentRazorpay =async (planId) => {
    try {
        if(!user){
          setShowLogin(true)
        }

        const {data} = await axios.post(backendUrl + '/api/user/pay-razor', {planId}, {headers: {token}})

        if(data.success){
          initPay(data.order)
        }

    } catch (error) {
        toast.error(error.message)
    }
  }
  
  return (
    <motion.div
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{type: "spring", stiffness: 100, damping: 20  ,duration:1}}
    viewport={{ once: true }}

    className='min-h-[80vh] text-center pt-14 mb-10'>
      <button className='border  border-gray-400 px-10 py-2 rounded-full mb-6' >Our Planes</button>
      <h1 className='text-center text-3xl font-medium mb-6 sm:mb-10 text-gray-900 '>Choose the plane</h1>

      <div className='flex justify-center gap-6  text-left  '>
        {plans.map((item, index)=>(
          <div key={index} className=' bg-white shadow-lg text-gray-900 drop-shadow-sm border rounded-lg py-12 px-8  hover:scale-105 transition-all duration-500 '>
            <img width={40} src={assets.logo_icon} alt="" />
            <p className='mt-3 mb-1 font-semibold '>{item.id}</p>
            <p className='text-sm'>{item.desc}</p>
            <p className='mt-6'> <span className='text-3xl font-medium'>  ${item.price}  </span> / {item.credits} Credits</p>
            <button onClick={()=> paymentRazorpay(item.id) } className=' w-full bg-gray-200 text-gray-600 hover:bg-gray-300 mt-8 text-sm rounded-md py-2.5 min-w-52 hover:scale-105 transition-all duration-500'>{user ? 'Purchase' : 'Get Started'}</button>
          </div>
        ))}
      </div>

    </motion.div>
  )
}

export default BuyCredit
