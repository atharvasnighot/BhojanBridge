import { useState } from "react";
import { Link } from "react-router-dom";

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: any) => {
    e.preventDefault();
    const newObj = {
      email: email,
      password: password
    };
    console.log(newObj);
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-300">
        <div className="bg-white p-8 rounded shadow-md h-108 w-96">
          {/* Increased height and width */}
          <img src={'BridgeBhojan.png'} alt="Sign Up" className="mx-auto mb-4 w-24 h-24"/>
          <h2 className="text-4xl font-semibold mb-4 flex items-center justify-center">Login</h2>
          <form onSubmit={handleLogin} className="rounded-xl">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:border-blue-700 border-2"
                type="submit"
              >
                Log In
              </button>
            </div>
            <Link to='/2'>
            <label className="block text-gray-700 text-sm font-bold mb-2 mt-2" htmlFor="email">
                  Not Signed Up?
                </label>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};
