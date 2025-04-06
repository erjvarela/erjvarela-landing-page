import React, { useState, useEffect } from "react";
import SecondsCounter from "./SecondsCounter.jsx";

const ClockApp = () => {
    const [seconds, setSeconds] = useState(0);
    const [startTime, setStartTime] = useState(0);
    const [stopTime, setStopTime] = useState(30);
    const [clockIsWorking, setclockIsWorking] = useState(true);

    useEffect(() => {
        let interval = setInterval(() => {
            if (clockIsWorking) {
                setSeconds((prevSeconds) => {
                    if (prevSeconds >= stopTime) {
                        //clearInterval(interval);
                        setclockIsWorking(false)
                        alert("Stopped");
                        return prevSeconds;
                    }
                    return prevSeconds + 1;
                });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [stopTime, clockIsWorking, startTime]);

    const changeStartTime = (event) => {
        const inputtedStartTime = Number(event.target.value);
        setStartTime(inputtedStartTime);
        setSeconds(inputtedStartTime);
    };

    const changeStopTime = (event) => {
        const inputtedStopTime = Number(event.target.value);
        setSeconds(0);
        setStopTime(inputtedStopTime);
    };

    const stopClock = () => {
        setclockIsWorking(false);
    };

    const resumeClock = () => {
        if (!clockIsWorking) {
            setclockIsWorking(true);
        }
    };
    const resetClock = () => {
        setSeconds(0)
        console.log(clockIsWorking)
        resumeClock()
    };

    return (
        <>
            <SecondsCounter seconds={seconds} />
            <div className="container">
                <div className="row">
                    <form>
                        <div className="input-group col-6">
                            <label htmlFor="startTime" className="input-group-text">Start Time</label>
                            <input
                                type="number"
                                className="form-control"
                                id="startTime"
                                value={startTime}
                                onChange={changeStartTime}
                            />
                            <label htmlFor="endTime" className="input-group-text">End Time</label>
                            <input
                                type="number"
                                className="form-control"
                                id="endTime"
                                value={stopTime}
                                onChange={changeStopTime}
                            />
                        </div>
                    </form>
                </div>
                <div className="container p-3">
                    <div className="row">
                        <button type="button" className="btn btn-outline-danger" onClick={() => stopClock()}>Stop</button>
                    </div>
                    <div className="row">
                        <button type="button" className="btn btn-outline-warning" onClick={() => resetClock()}>Reset</button>
                    </div>
                    <div className="row">
                        <button type="button" className="btn btn-outline-success" onClick={() => resumeClock()}>Resume</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ClockApp;