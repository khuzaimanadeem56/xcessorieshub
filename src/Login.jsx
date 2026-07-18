const Login = () => {
  return (
   <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 via-amber-50 to-white px-4">
  <div className="bg-white/80 backdrop-blur-md shadow-2xl border border-gray-200 w-full max-w-md p-8 rounded-2xl transition-all duration-300 mb-10 hover:shadow-[0_0_25px_rgba(0,0,0,0.1)]">
    <h2 className="font-bold text-4xl text-blue-900 text-center mb-6">Welcome Back</h2>

    {/* Username or Email */}
    <div className="mb-5">
      <label className="block mb-2 font-semibold text-gray-700">Username or Email</label>
      <input
        type="text"
        placeholder="Enter your username or email"
        className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white transition-all duration-200"
      />
    </div>

    {/* Password */}
    <div className="mb-5">
      <label className="block mb-2 font-semibold text-gray-700">Password</label>
      <input
        type="password"
        placeholder="Enter your password"
        className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white transition-all duration-200"
      />
    </div>

    {/* Remember + Forgot Password */}
    <div className="flex items-center justify-between mb-6 text-sm">
      <label className="flex items-center space-x-2">
        <input type="checkbox" className="accent-blue-900" />
        <span className="text-gray-700">Remember me</span>
      </label>
      <a href="#" className="text-blue-900 font-medium hover:underline">
        Forgot password?
      </a>
    </div>

    {/* Login Button */}
    <div className="text-center">
      <button className="w-full bg-blue-900 text-white font-semibold py-3 rounded-full shadow-md hover:bg-amber-400 hover:text-blue-900 transition-all duration-300">
        Login
      </button>
    </div>

    {/* Register Link */}
    <p className="mt-6 text-center text-gray-700 text-base">
      Don’t have an account?{" "}
      <a href="/register" className="text-blue-900 font-semibold hover:underline">
        Register here
      </a>
    </p>
  </div>
</div>

  )
}

export default Login