import { AiFillContacts, AiFillHome, AiFillInfoCircle, AiOutlineSearch } from 'react-icons/ai'

export default () => {
  return (
    <>
      <nav className="p-4 bg-blue-500 items-center">
        <div className="container mx-auto items-center">
          <div className="flex justify-between items-center">
            <a href="/" className="text-white text-2xl font-bold"> FoodBridge</a>
            <div>
              <ul className="flex space-x-6">
                <li><a href="/" className="text-white flex items-center"> <AiOutlineSearch />{"  "}Search</a></li>
                <li><a href="/" className="text-white flex items-center"><AiFillHome /> Home</a></li>

                <li><a href="/" className="text-white flex items-center"><AiFillInfoCircle /> About</a></li>
                <li><a href="/" className="text-white flex items-center"><AiFillContacts /> Contact</a></li>
          
              </ul>
            </div>
          </div>
        </div>
      </nav >
    </>
  )
}
