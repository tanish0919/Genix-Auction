import list  from "../assets/list.json";
import { useState, useEffect } from 'react';

import Card from './Card';
const Slides = () => {
    const [gadget, setGadget] = useState([]);
    useEffect(() => {
        setGadget(list);
    }, []);
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-semibold pb-10">
        Explore <span className="text-blue-500">Auctions</span>
      </h1>
      <div className="flex flex-wrap gap-10">
        {gadget.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
      <div className="flex justify-center py-14" >
        <button className="btn bg-gradient-to-r from-blue-500 to-blue-300 text-white border-none hover:from-purple-600 hover:to-pink-600 ">
          Load More...
        </button>
      </div>
    </div>
  );
}

export default Slides