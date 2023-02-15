import React from "react";
import "../../Css/Home/Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="background">
        <img src="images/bus.jpg" alt=""/>
        <div className="inputs flex absolute ">
          <div className="grid rounded-2xl">
            <label className="text-gray-500">From</label>
            <select className="text-xl">
              <option>Mumbai</option>
              <option>Delhi</option>
              <option>Banglore</option>
              <option>Chennai</option>
            </select>
          </div>

          <div className="grid rounded-2xl">
            <label className="text-gray-500">To</label>
            <select className="text-xl">
              <option>Mumbai</option>
              <option>Delhi</option>
              <option>Banglore</option>
              <option>Chennai</option>
            </select>
          </div>

          <input type="date" className="p-4 rounded-2xl" />
        </div>
        <div className="flex justify-center">
          <button className="absolute"><Link to="bus">Search</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
