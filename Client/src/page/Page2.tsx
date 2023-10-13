<<<<<<< HEAD
import axios from "axios";
=======
>>>>>>> origin/main
import { SyntheticEvent, useEffect, useState } from "react";

export default () => {
  const [location, setLocation] = useState(null);
  const [nameOfRestro, setNameOfRestro] = useState("");
  const [locationFromUser, setLocationFromUser] = useState("");
  const [feedCapacity, setFeedCapacity] = useState<number>(0);
  const [time, setTime] = useState(null);
  const [foodDescription, setFoodDescription] = useState(null);
  const [dateOfPicking, setDateOfPicking] = useState(""); // Placeholder for date input
  const [locality, setLocality] = useState("");
  const [isVeg, setIsVeg] = useState(false);
  const [foodcategory, setFoodCategory] = useState("");

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      function (position) {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      },
      console.log
    );
  }, []);

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
  };

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const newObj = {
      latitude: location.latitude,
      longitude: location.longitude,
      name: nameOfRestro,
      imgUrl: "",
      location: locationFromUser,
      capacity: feedCapacity,
      time: time,
      foodDescription: foodDescription,
      dateOfPicking: dateOfPicking,
      locality: locality,
      isVeg: isVeg,
      foodcategory:foodcategory,
    };
    setNameOfRestro("");
    setLocationFromUser("");
    setFeedCapacity(0);
    setTime(null);
    setFoodDescription("");
    setDateOfPicking("");
    setLocality("");
    setIsVeg(false);
    setFoodCategory("");
    console.log(newObj);
<<<<<<< HEAD

    axios.post('http://localhost:8080/provider/create-post',newObj)
    
=======
>>>>>>> origin/main
  };

  return (
    <>
      <div className="flex screen justify-center items-center bg-gradient-to-tr from-blue-300">
        <div className="w-full lg:w-4/5 xl:w-3/5 2xl:w-2/5 bg-white p-8 rounded shadow-md">
        <img src={'BridgeBhojan.png'} alt="Sign Up" className="mx-auto mb-4 w-36 h-36"/>
          <h1 className="text-black text-5xl flex justify-center font-bold items-center mb-6">
            Provider Info
          </h1>
          <form onSubmit={onSubmit}>
            <div className="mb-6">
              <label
                className="block text-gray-800 text-lg font-bold mb-2"
                htmlFor="nameOfRestro"
              >
                Name of Restaurant / Canteen
              </label>
              <input
                className="input-field"
                id="nameOfRestro"
                type="text"
                value={nameOfRestro}
                placeholder="Enter name of your eating place"
                onChange={(e) => setNameOfRestro(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-800 text-lg font-bold mb-2"
                htmlFor="locationFromUser"
              >
                Location
              </label>
              <input
                className="input-field"
                type="text"
                id="locationFromUser"
                value={locationFromUser}
                placeholder="Enter your Location"
                onChange={(e) => setLocationFromUser(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-800 text-lg font-bold mb-2"
                htmlFor="feedCapacity"
              >
                Feed Capacity
              </label>
              <input
                className="input-field"
                id="feedCapacity"
                type="number"
                value={feedCapacity}
                placeholder="Enter your Feeding Capacity"
                onChange={(e) => setFeedCapacity(Number(e.target.value))}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-800 text-lg font-bold mb-2"
                htmlFor="foodDescription"
              >
                Food Description
              </label>
              <input
                className="input-field"
                id="foodDescription"
                type="text"
                value={foodDescription}
                placeholder="Enter your Food Description"
                onChange={(e) => setFoodDescription(e.target.value)}
              />
            </div>
            <div className="mb-6">
<<<<<<< HEAD
              

<div className="mb-6">
              <label
                className="block text-gray-800 text-lg font-bold mb-2"
                htmlFor="dateOfPicking"
              >
                Date of Picking
              </label>
              <input
                className="input-field"
=======
              <label
                className="block text-gray-800 text-lg font-bold mb-2"
                htmlFor="time"
              >
                Time Of Making
              </label>
              <input
                className="input-field"
                id="time"
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />

<div className="mb-6">
              <label
                className="block text-gray-800 text-lg font-bold mb-2"
                htmlFor="dateOfPicking"
              >
                Date of Picking
              </label>
              <input
                className="input-field"
>>>>>>> origin/main
                id="dateOfPicking"
                type="date"
                value={dateOfPicking}
                onChange={(e) => setDateOfPicking(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-800 text-lg font-bold mb-2"
                htmlFor="locality"
              >
                Locality
              </label>
              <input
                className="input-field"
                id="locality"
                type="text"
                value={locality}
                placeholder="Enter your Locality"
                onChange={(e) => setLocality(e.target.value)}
              />
            </div>

            <div>
            <label   className="block text-gray-800 text-lg font-bold mb-2"
                htmlFor="foodcategory">
              Food-Category
            </label>
            <select
              className="w-full bg-white border border-gray-300 rounded py-2 px-3 focus:outline-none focus:shadow-outline"
              onChange={(e) => setFoodCategory(e.target.value)}
            >
              <option value='South-Indian'>South-Indian</option>
              <option value='North-Indian'>North-Indian</option>
              <option value='Chinese'>Chinese</option>
              <option value='American'>American</option>
        
            </select>
          </div>
          

            <div className="mb-6">
              <label
                className="block text-gray-800 text-lg font-bold mb-2"
                htmlFor="isVeg"
              >
                Is Vegetarian?
              </label>
              <input
               className="form-checkbox h-6 w-6 text-blue-500"
                type="checkbox"
                id="isVeg"
                checked={isVeg}
                onChange={(e) => setIsVeg(e.target.checked)}
              />
            </div>
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-800 text-lg font-bold mb-2"
                htmlFor="image"
              >
                Upload image of Food
              </label>
              <input
                className="input-field"
                id="image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
            


            <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
                Submit
              </button>
            </div>

          
          </form>
        </div>
      </div>
    </>
  );
<<<<<<< HEAD
};
=======
};
>>>>>>> origin/main
