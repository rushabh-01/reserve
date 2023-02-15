import React,{useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../../Css/Bus/BusList.css";
import SelectSeats from "./SelectSeats";

const BusList = () => {
    const [seats,setSeats] = useState(false);

    const handleclick = () => {
        setSeats(!seats);
    }
  return (
    <>
      <div className="mt-10 maincard" style={{ width: "90%" }}>
        <div className="bus-list">
          <div className="left-side">
            <div className="bus-name">
              <h2>
                Intra City Smart Bus &nbsp; &nbsp;<FontAwesomeIcon icon={faStar} /> 4.0
              </h2>
            </div>
            <p className="buses-type">
              A/C Sleeper 2+3 | 2 Seats Left | 1 Window Left{" "}
            </p>
            <p>22:45 ,16 Jan - 07hrs 50min - 06:20, 17 Jan</p>
          </div>

          <div className="right-side">
            <div className="cost">
              <h4>Trip Cost</h4>
              <h3>$ 899</h3>
            </div>
            <button className="seat" onClick={handleclick}>View Seats</button>
          </div>
        </div>
        {seats && <SelectSeats/>}
      </div>
    </>
  );
};

export default BusList;
