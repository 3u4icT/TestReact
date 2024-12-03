import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval); // Cleanup
  }, [running]); // Depend on `running` to control start/stop

  return (
    <div>
      <h1>Time: {seconds} seconds</h1>
      <button onClick={() => setRunning(false)}>Stop</button>
      <button onClick={() => setRunning(true)}>Start</button>
    </div>
  );
}

export default Timer;