import React from 'react'


const Register = () => {
  return (
  <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 via-amber-50 to-white px-4">
  <div className="bg-white/80 backdrop-blur-md shadow-2xl border border-gray-200 w-full max-w-md p-8 rounded-2xl transition-all duration-300 mb-10 hover:shadow-[0_0_25px_rgba(0,0,0,0.1)]">
    <h2 className="font-bold text-4xl text-blue-900 text-center mb-6">Create Account</h2>

    {/* Username */}
    <div className="mb-5">
      <label className="block mb-2 font-semibold text-gray-700">Username</label>
      <input
        type="text"
        placeholder="Enter your username"
        className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white transition-all duration-200"
      />
    </div>

    {/* Email */}
    <div className="mb-5">
      <label className="block mb-2 font-semibold text-gray-700">Email</label>
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white transition-all duration-200"
      />
    </div>

    {/* Password */}
    <div className="mb-6">
      <label className="block mb-2 font-semibold text-gray-700">Password</label>
      <input
        type="password"
        placeholder="Enter your password"
        className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white transition-all duration-200"
      />
    </div>

    {/* Register Button */}
    <div className="text-center">
      <button className="w-full bg-blue-900 text-white font-semibold py-3 rounded-full shadow-md hover:bg-amber-400 hover:text-blue-900 transition-all duration-300">
        Register
      </button>
    </div>

    {/* Login Link */}
    <p className="mt-6 text-center text-gray-700 text-base">
      Already have an account?{" "}
      <a href="/log" className="text-blue-900 font-semibold hover:underline">
        Login here
      </a>
    </p>
  </div>
</div>

  )
}

export default Register
