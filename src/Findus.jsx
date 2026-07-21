import React from 'react'

const FindUs = () => {
  return (
    <div className="w-full bg-white pb-12">
      {/* Header Section */}
      <div className="flex justify-center items-center w-full h-32 bg-blue-900 shadow-inner">
        <h1 className="text-3xl md:text-5xl text-white font-black tracking-tight">Find Us</h1>
      </div>

      {/* Google Map Section */}
      <div className="max-w-4xl mx-auto mt-8 px-4">
        <div className="w-full h-[300px] md:h-[450px] overflow-hidden rounded-2xl shadow-lg border border-gray-150">
          <iframe
            title="Find Us on Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14138.353136579442!2d74.34068339999999!3d31.5203696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904d3b8aee8ef%3A0x86c9b4c421eb8eb8!2sLahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1698234812345!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="mt-8 text-center bg-gray-50 p-6 rounded-2xl border border-gray-150">
          <h3 className="text-xl font-bold text-blue-900">Lahore Outlet</h3>
          <p className="mt-2 text-sm text-gray-600 font-semibold">G-68 Jeff Heights Gulberg 3, Lahore, Pakistan</p>
          <p className="mt-1 text-sm text-gray-500 font-semibold">Open: Monday to Saturday (11:00 AM – 9:00 PM)</p>
          <p className="mt-3 text-sm text-blue-900 font-bold">Contact: 0307-133-03-03</p>
        </div>
      </div>
    </div>
  );
};

export default FindUs;

