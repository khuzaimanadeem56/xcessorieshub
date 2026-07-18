import React from 'react'

const FindUs = () => {
  return (
    <div className="">
      {/* Header Section */}
      <div className="flex justify-center items-center  w-full h-32 bg-blue-900">
        <h1 className="text-5xl text-white font-bold">Find Us</h1>
      </div>

      {/* Google Map Section */}
      <div className="flex justify-center mt-8 px-4 ">
        <iframe
          title="Find Us on Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14138.353136579442!2d74.34068339999999!3d31.5203696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904d3b8aee8ef%3A0x86c9b4c421eb8eb8!2sLahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1698234812345!5m2!1sen!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="fast"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-2xl shadow-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default FindUs;

