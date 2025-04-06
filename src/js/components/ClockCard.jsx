import React from "react";

const ClockCard = (props) => {
    return (
        <div className="clock-card bg-white m-2 fs-2 d-flex align-items-center justify-content-center" style={{ width: "90%", height: "80%", opacity: '0.7', borderRadius: "5px" }}>
            {props.element}
        </div>
    );
};

export default ClockCard;