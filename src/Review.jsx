import React from 'react'
import { Star } from 'lucide-react'

const Review = () => {
  return (
    <div className='mt-5 mb-5'>
      <div className="bg-white  rounded-lg shadow-sm p-6 max-w-5xl mx-auto ">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex items-start space-x-4">
          {/* User Image */}
          <img
            src="public\user.jpg"
            alt="User"
            className="w-12 h-12 rounded-full object-cover"
          />

          {/* User Info */}
          <div>
            <h3 className="font-semibold text-gray-800">03063478520</h3>
            <p className="text-sm text-gray-500">Reviewer</p>

            {/* Stars + Product */}
            <div className="flex items-center space-x-2 mt-1">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="text-gray-700 text-sm">
                Amaze A270 Active Stylus Pen for iPads
              </p>
            </div>
          </div>
        </div>

        {/* Date */}
        <p className="text-sm text-gray-500">October 25, 2025</p>
      </div>

      {/* Review Text */}
      <p className="text-gray-700 mt-4 leading-relaxed">
        Works too good, pretty nice tilt sensitivity, connects hassle free. <br />
        But it has less weight as compared to apple pencil.
      </p>

      {/* Review Image */}
      <div className="mt-4">
        <img
          src="public\Screenshot_2025-10-25-00-45-12-14_6012fa4d4ddec268fc5c7112cbb265e7-461x1024.jpg"
          alt="Review"
          className="w-24 h-24 object-cover rounded-md border"
        />
      </div>

      {/* Divider */}
      <hr className="mt-6 border-gray-200" />
</div>

    <div className="bg-white  rounded-lg shadow-sm p-6 max-w-5xl mx-auto mt-5 mb-5">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex items-start space-x-4">
          {/* User Image */}
          <img
            src="public\user.jpg"
            alt="User"
            className="w-12 h-12 rounded-full object-cover"
          />

          {/* User Info */}
          <div>
            <h3 className="font-semibold text-gray-800">Muhammad Abdullah</h3>
            <p className="text-sm text-gray-500">Reviewer</p>

            {/* Stars + Product */}
            <div className="flex items-center space-x-2 mt-1">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="text-gray-700 text-sm">
                othing CMF Neckband Pro with Noise Cancellation & Upto 37 Hours Playtime
              </p>
            </div>
          </div>
        </div>

        {/* Date */}
        <p className="text-sm text-gray-500">October 25, 2025</p>
      </div>

      {/* Review Text */}
      <p className="text-gray-700 mt-4 leading-relaxed">
        2 day delivery, good product as advertised
      </p>

      {/* Review Image */}
      <div className="mt-4">
        <img
          src="public\sspic.jpg"
          alt="Review"
          className="w-24 h-24 object-cover rounded-md border"
        />
      </div>

      {/* Divider */}
      <hr className="mt-6 border-gray-200" />
    </div>
    </div>
    
  )
}

export default Review
