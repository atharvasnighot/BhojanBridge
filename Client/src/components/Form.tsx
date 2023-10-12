export default () => {
  return (
    <>
      <nav className="p-4 bg-blue-500 items-center">
        <div className="container mx-auto items-center">
          <div className="max-w-lg mx-auto mt-8">
            <form className="bg-white shadow-md rounded-lg p-8 mb-4 h-120 w-96">
              {/* Increased border radius for a larger box */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex items-center justify-between">
                {/* Added transition and transform classes for button animation */}
                <button
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transform transition-transform duration-300 ease-in-out hover:border-blue-700 hover:border-b-4"
                    type="submit"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};
