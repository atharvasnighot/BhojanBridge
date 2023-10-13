import { AiOutlineSearch } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <>
      <nav className="p-4 bg-transparent items-center">
        <div className="container mx-auto items-center">
          <div className="flex justify-between items-center">
            <a href="/" className="text-black text-2xl font-bold"> FoodBridge</a>
            <div>
              <ul className="flex space-x-6">
                <li><a href="/" className="text-black flex items-center"> <AiOutlineSearch />{"  "}Search</a></li>
                <Link to='/'><li><button className="text-black flex items-center">Home</button></li></Link>
                <Link to='/'><li><button className="text-black flex items-center">Profile</button></li></Link>
                <Link to='/'><li><button className="text-black flex items-center">About</button></li></Link>
                <Link to='/'><li><button className="text-black flex items-center">Contact</button></li></Link>
                <Link to='/3'><li><button className="text-black flex items-center">Login</button></li></Link>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
