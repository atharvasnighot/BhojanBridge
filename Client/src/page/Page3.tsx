import axios from "axios";
import { SyntheticEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [nameOfRestro, setNameOfRestro] = useState("");
  const [locationFromUser, setLocationFromUser] = useState("");
  const [feedCapacity, setFeedCapacity] = useState(0);
  const [time, setTime] = useState("");
  const [foodDescription, setFoodDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      });
    } else {
      console.log("Geolocation is not available in this browser.");
    }
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    // Create a FormData object to send the image file
    const formData = new FormData();
    if (selectedFile) {
      formData.append("image", selectedFile);
    }

    // Add other data to the FormData object
    formData.append("latitude", location.latitude);
    formData.append("longitude", location.longitude);
    formData.append("name", nameOfRestro);
    formData.append("location", locationFromUser);
    formData.append("capacity", feedCapacity);
    formData.append("time", time);
    formData.append("foodDescription", foodDescription);

    // Send a POST request with FormData
    axios.post("http://localhost:8080/auth/register", formData).then((res) => {
      console.log(res.data);
    });

    // Clear form fields
    setNameOfRestro("");
    setLocationFromUser("");
    setFeedCapacity(0);
    setTime("");
    setFoodDescription("");
  };


  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-300">
        <div className="bg-white p-8 rounded shadow-md h-108 w-96">
          <img src={'BridgeBhojan.png'} alt="Sign Up" className="mx-auto mb-4 w-24 h-24" />
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
                required
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
                required
                placeholder="Enter your password"
                value={password}
                onChange={(e) => { setPassword(e.target.value), handleLogin}}
              />
            </div>
            <div>

             
            <Link to='/4'>
            <button
                className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-2 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:border-blue-700 border-2"
                type="submit"
              >
                Provider Login
              </button>
            
            </Link>  
            
            <Link to='/'>
            <button
                className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-2 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:border-blue-700 border-2"
                type="submit"
              >
              Consumer Login
              </button>
            
            </Link>  
            
            
              
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
