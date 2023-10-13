import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default () => {
  
  const [tempData, setTempData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8080/provider/all-current'
    ).then(res => setTempData(res.data))
  },[])

  const IntegerReceiver = ({ match }) => {
    const { integerParam } = match.params; // Extract the integer from the URL
    return <div>Received Integer: {parseInt(integerParam, 10)}</div>;
  };

  return (
    <div className="container mx-auto mt-5">
      <table className="min-w-full border">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
             No. 
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
             Name 
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
             Quantity 
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Food Description
            </th>
          </tr>
        </thead>
        <tbody>
          <Router>
          {tempData.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.organisationName}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.feedCapacity}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.foodDescription}</td>
              <Link to="/6">
              <button className="bg-blue-500 p-2 rounded-xl text-white">order</button>
              </Link>           
            </tr>
            </Router>
          ))}
        </tbody>
      </table>
    </div>
  );
};


