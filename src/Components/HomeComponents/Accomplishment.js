import React from "react";
import "../../Css/Home/Accomplishment.css";

const Accomplishment = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl p-10">We promise to deliver</h1>
        <div className="cards flex justify-evenly">
          <div className="card">
            <img src="images/busClipart.png" alt=""/>
            <div className="m-4">
            <h1 className="font-black text-xl">2000+</h1>
            <p>bus collection</p>
            </div>
          </div>
          <div className="card">
            <img src="images/customer.png" alt=""/>
            <div className="m-4">
            <h1 className="font-black text-xl">20 million</h1>
            <p>happy customers globally</p>
            </div>
          </div>
          <div className="card">
            <img src="images/ticket.png" alt=""/>
            <div className="m-4">
            <h1 className="font-black text-xl">5000+</h1>
            <p>tickets book everyday</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accomplishment;
