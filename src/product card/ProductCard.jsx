import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { userdata } from '../UserSlice/UserSlice'

const ProductCard = () => {
 const navigate=useNavigate()
const dispatch=useDispatch()
  const handlesee=(see)=>{
     navigate('/ProductDetails')
     dispatch(userdata(see))
     localStorage.setItem("userself",JSON.stringify(see))
  }
  
//https://api.jsonbin.io/v3/b/675db8fbad19ca34f8db1ecc
  const [user,setuser]=useState([])
useEffect(()=>{
    fetch('https://api.jsonbin.io/v3/b/675db8fbad19ca34f8db1ecc')
    .then(response => response.json())
    .then(json => setuser(json.record))
   



},[])
console.log(user);

    return (
    <>
      <div className="flex justify-center gap-7 flex-wrap ">
  {
    user.map((item,i)=>(
<div key={i}
    className="bg-red-500 singlecard   hover:scale-125  w-[300px] h-[500px] shadow-md rounded-lg overflow-hidden border hover:shadow-xl  duration-300"
  >
    <img 
      src={item.image}
      alt="iPhone 15 Pro"
      className="w-[200px]  h-[200px] object-cover"
    />
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
      <p className="text-gray-600">Price:{item.priceBDT} TK </p>
      <p className="text-gray-600">RAM:{item.ram}</p>
      <p className="text-gray-600">{item.rom}</p>
      {
        item.is5G &&
        <p className="text-gray-600">5G: <span className="font-bold text-green-600">Yes</span></p>
      }
     
      <p className="text-gray-600">Release Year: 2023</p>
      <div className="flex mt-2 space-x-2">
        <span
          className="inline-block w-6 h-6 rounded-full bg-gray-800 border"
          title="Black Titanium"
        ></span>
        <span
          className="inline-block w-6 h-6 rounded-full bg-gray-200 border"
          title="White Titanium"
        ></span>
        <span
          className="inline-block w-6 h-6 rounded-full bg-blue-500 border"
          title="Blue Titanium"
        ></span>
      </div>
      <button
      onClick={()=>handlesee(item)}
        className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
      >
        View Details
      </button>
    </div>
  </div>

    ))
  }
  

</div>

    </>
  )
}

export default ProductCard
