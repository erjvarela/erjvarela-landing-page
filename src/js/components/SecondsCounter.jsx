import React from "react";
import ClockCard from "./ClockCard.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa0, fa1, fa2, fa3, fa4, fa5, fa6, fa7, fa8, fa9 } from "@fortawesome/free-solid-svg-icons";
import { faClock as faRegularClock } from "@fortawesome/free-regular-svg-icons";

const clockElements = {
    "0": <FontAwesomeIcon icon={fa0} />,
    "1": <FontAwesomeIcon icon={fa1} />,
    "2": <FontAwesomeIcon icon={fa2} />,
    "3": <FontAwesomeIcon icon={fa3} />,
    "4": <FontAwesomeIcon icon={fa4} />,
    "5": <FontAwesomeIcon icon={fa5} />,
    "6": <FontAwesomeIcon icon={fa6} />,
    "7": <FontAwesomeIcon icon={fa7} />,
    "8": <FontAwesomeIcon icon={fa8} />,
    "9": <FontAwesomeIcon icon={fa9} />,
};

const ClockIcon = () => {
    return <FontAwesomeIcon icon={faRegularClock} />;
}

const SecondsCounter = (props) => {
    let seconds = String(props.seconds)
    seconds = ("0".repeat(9 - seconds.length)) + seconds;

    return (
        <div className="clock-body m-3 mx-auto d-flex flex-row-reverse align-items-center" style={{ width: "650px", height: "100px", backgroundColor: "black", padding: "10px 40px" }}>

            {seconds.split("").reverse().map((char, index) => (
                <ClockCard key={index} element={clockElements[char]} />
            ))}
            <ClockCard element={<ClockIcon />} />
        </div>
    );
};

export default SecondsCounter;