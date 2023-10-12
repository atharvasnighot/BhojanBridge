import { SyntheticEvent, useEffect, useState } from "react"

export default () => {

  const [location, setLocation] = useState(null)
  const [nameOfRestro, setNameOfRestro] = useState('')
  const [locationFromUser, setLocationFromUser] = useState('')
  const [feedCapacity, setFeedCapacity] = useState<number>(0)
  const [time, setTime] = useState(null)
  const [foodDescription, setFoodDescription] = useState(null)

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(function(position) {
      const { latitude, longitude } = position.coords
      // @ts-ignore
      setLocation({ latitude, longitude })
    }, console.log)
  }, [])

  const handleImageChange = (e: any) => {
    const file = e.target.files[0]
  }

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    const newObj = {
      latitude: location.latitude,
      longitude: location.longitude,
      name: nameOfRestro,
      imgUrl: '',
      location: locationFromUser,
      capacity: feedCapacity,
      time: time,
      foodDescription: foodDescription
    }
    setNameOfRestro('')
    setLocationFromUser('')
    setFeedCapacity(0)
    console.log(newObj)
  }

  return (

    <>
      <div className="flex h-screen justify-center items-center bg-gradient-to-tr from-blue-300">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-black text-3xl flex justify-center items-center mb-3"> Provider Info </h1>
          <form className="bg-white shadow-md px-8 pt-6 pb-8 mb-4 rounded-xl" onSubmit={onSubmit} >
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-extrabold mb-2 font-mono">
                Name of Restaurant / Canteen
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                value={nameOfRestro}
                placeholder="Enter name of your eating place"
                onChange={e => setNameOfRestro(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2 font-mono" htmlFor="email">
                Location
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-black"
                type="text"
                value={locationFromUser}
                placeholder="Enter your Location"
                onChange={e => setLocationFromUser(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2 font-mono">
                Feed Capacity
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="capacity"
                type="number"
                value={feedCapacity}
                placeholder="Enter your Feeding Capacity"
                onChange={e => setFeedCapacity(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2 font-mono">
                Food Description
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="capacity"
                type="text"
                value={foodDescription}
                placeholder="Enter your Feeding Capacity"
                onChange={e => foodDescription(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2 font-mono">
                Time Of Making 
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="capacity"
                type="time"
                value={feedCapacity}
                placeholder="Enter your Feeding Capacity"
                onChange={e => setTime(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2 font-mono">
                Upload image of Food
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="capacity"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>

            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>

            </div>
          </form>
        </div>
      </div>
    </>
  )
}
