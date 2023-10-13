import axios from "axios";
import { useState } from "react";

export default () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    axios.post(`http://localhost:8080/provider/reduce/{postId}/${counter}`)
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border border-black p-4 w-64 bg-white rounded">
        <div className="text-center text-2xl font-bold mb-4">Invoice</div>
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-4">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              onClick={() => setCounter(counter + 1)}
            >
              +
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              onClick={() => setCounter(counter - 1)}
            >
              -
            </button>
            <span className="text-xl font-semibold">{counter}</span>
          </div>
          <div className="text-xl font-semibold">
            Total Amount: $ {counter * 10} {/* Replace 10 with your item's price */}
          </div>

          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"> 
            Place order
          </button>


        </div>
      </div>
    </div>
  );
};
