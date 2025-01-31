const SignUp = () => {
  return (
    <div className="flex h-screen bg-black">
      {/* Left Section */}
      <div className="w-1/2 bg-white flex flex-col justify-center p-16">
        <div className="flex flex-col items-start">
          <img
            src="/logo.svg" // Replace with your logo
            alt="Car Store Logo"
            className="mb-8 h-12"
          />
          <h1 className="text-3xl font-semibold mb-2">Sign Up</h1>
          <p className="text-gray-600 mb-8">
            Welcome to Car Store – Let’s create your account
          </p>
          <form className="w-full">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your Full Name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="youremail@carstore.com"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="••••••••"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600"
            >
              Create Account
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-600">
            Already have an account?{' '}
            <a href="#" className="text-green-500 hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 bg-gradient-to-br from-black to-gray-800 text-white flex flex-col justify-center items-center p-16 relative">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Join the Journey to Your Dream Car
        </h1>
        <div className="bg-black bg-opacity-50 backdrop-blur-md p-8 rounded-xl shadow-lg text-center">
          <h2 className="text-2xl font-semibold">Start Your Adventure</h2>
          <p className="text-sm mb-4">
            Sign up to unlock exclusive deals and offers
          </p>
          <div className="bg-gray-800 p-4 rounded-lg shadow text-white">
            <p className="text-sm">Exclusive Deal</p>
            <p className="font-semibold">Free Maintenance for 1 Year</p>
            <p className="text-xs">With any car purchased this month</p>
          </div>
          <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
            Explore Offers
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
