import React from 'react'
import { Star } from 'lucide-react'

const Review = () => {
  const reviews = [
    {
      user: "03063478520",
      role: "Reviewer",
      date: "October 25, 2025",
      product: "Amaze A270 Active Stylus Pen for iPads",
      stars: 5,
      content: "Works too good, pretty nice tilt sensitivity, connects hassle free. But it has less weight as compared to apple pencil.",
      image: "/Screenshot_2025-10-25-00-45-12-14_6012fa4d4ddec268fc5c7112cbb265e7-461x1024.jpg"
    },
    {
      user: "Muhammad Abdullah",
      role: "Reviewer",
      date: "October 25, 2025",
      product: "Nothing CMF Neckband Pro with Noise Cancellation & Upto 37 Hours Playtime",
      stars: 5,
      content: "2 day delivery, good product as advertised",
      image: "/sspic.jpg"
    }
  ];

  return (
    <div className="w-full bg-white py-6 md:py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {reviews.map((rev, idx) => (
          <div key={idx} className="bg-white rounded-2xl border border-gray-150 shadow-sm p-5 md:p-6 transition-all hover:shadow-md">
            {/* Header block */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
              <div className="flex items-start space-x-4">
                <img
                  src="/user.jpg"
                  alt="User Avatar"
                  className="w-12 h-12 rounded-full object-cover border border-gray-100 flex-shrink-0"
                />
                <div>
                  <h3 className="font-bold text-gray-805 text-base">{rev.user}</h3>
                  <p className="text-xs text-gray-400 font-semibold">{rev.role}</p>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 mt-2">
                    <div className="flex text-yellow-400">
                      {[...Array(rev.stars)].map((_, i) => (
                        <Star key={i} size={15} fill="currentColor" className="stroke-none" />
                      ))}
                    </div>
                    <span className="text-xxs sm:text-xs font-bold text-blue-900 bg-blue-50 px-2.5 py-0.5 rounded-full w-fit">
                      {rev.product}
                    </span>
                  </div>
                </div>
              </div>
              <span className="text-xs text-gray-400 font-bold self-start sm:self-auto">
                {rev.date}
              </span>
            </div>

            {/* Review text */}
            <p className="text-sm text-gray-600 mt-4 leading-relaxed font-medium">
              {rev.content}
            </p>

            {/* Review attachments */}
            {rev.image && (
              <div className="mt-4">
                <img
                  src={rev.image}
                  alt="Review Attachment"
                  className="w-24 h-24 object-cover rounded-xl border border-gray-200 shadow-sm hover:scale-105 transition duration-200 cursor-pointer"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Review;
