import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    // Cleanup interval on component unmount
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  const minutes = Math.floor(seconds / 60);
  const displaySeconds = seconds % 60;
  console.log('ffrfrfrfr', minutes, displaySeconds);
  return (
    <div className="stopwatch">
      <h1>Stopwatch</h1>
      <div className="time">
        Time: {minutes.toString().padStart(2)}:
        {displaySeconds.toString().padStart(2, 0)}
      </div>
      <div className="controls">
        <button
          onClick={handleStartStop}
          style={{
            marginRight: '10px',
          }}
        >
          {isRunning ? 'Stop' : 'Start'}
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
