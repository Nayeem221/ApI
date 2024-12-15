import React from 'react'
import { useSelector } from 'react-redux'

const ProductDetails = () => {


  const sliceuser=useSelector((state)=>state.userdata.value)
 
  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-[600px] h-[500px] bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* Left Section: Product Image */}
        <div className="w-full md:w-1/2">
          <img
            src={sliceuser?.image}
            alt=''
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Section: Product Details */}
        <div className="w-full md:w-1/2 p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            name
          </h1>
          <p className="text-xl text-gray-700 mb-4">
            <span className="font-semibold">Price:{sliceuser?.priceBDT}</span>
          </p>
          <p className="text-lg text-gray-700 mb-2">
            <span className="font-semibold">RAM:{sliceuser.ram}</span>
          </p>
          <p className="text-lg text-gray-700 mb-2">
            <span className="font-semibold">ROM:{sliceuser.rom}</span> 
          </p>
          
            <p className="text-lg text-green-600 font-medium mb-4">
              5G Supported
            </p>
        
          <p className="text-lg text-gray-700 mb-4">
            <span className="font-semibold">Release Year:</span>{" "}
         release
          </p>

          {/* Color Options */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Available Colors:</h3>
            <div className="flex space-x-3">
              
                <span
            
                  className="inline-block w-8 h-8 rounded-full"
                  
                  
                ></span>
           
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button className="w-full md:w-auto px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
              Buy Now
            </button>
            <button className="w-full md:w-auto px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default ProductDetails
