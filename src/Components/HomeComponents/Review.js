import React from "react";
import '../../Css/Home/Review.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Review = () => {
  return (
    <>
      <div className="text-center">
        <div className="p-12">
        <h1 className="text-3xl">Here's what a few of our customers</h1>
        <h1 className="text-3xl">have to say about us</h1>
        </div>
        
        <div className="list flex justify-evenly">
          <div className="customer">
            
            <div className="m-5">
              <h1 className="text-xl">Vatsal Agrawal</h1>
              <p className="text-xs text-gray-500">Customer Since 2020</p>
              <div className="flex m-1 items-baseline">
              <FontAwesomeIcon icon={faStar} />
              <p>4.5</p>
              </div>
              <p className="text-left text-sm">Awesome travel experience with reserve Excellent staff.</p>
            </div>
          </div>
          <div className="customer">
            <div className="m-5">
            <h1 className="text-xl">Vatsal Agrawal</h1>
            <p className="text-xs text-gray-500">Customer Since 2020</p>
              <div className="flex m-1 items-baseline">
              <FontAwesomeIcon icon={faStar} />
              <p>4.5</p>
              </div>
              <p className="text-left text-sm">happy customers globally</p>
            </div>
          </div>
          <div className="customer">
            <div className="m-5">
            <h1 className="text-xl">Vatsal Agrawal</h1>
            <p className="text-xs text-gray-500">Customer Since 2020</p>
              <div className="flex m-1 items-baseline">
              <FontAwesomeIcon icon={faStar} />
              <p>4.5</p>
              </div>
              <p className="text-left text-sm">tickets book everyday</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
