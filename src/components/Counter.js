import React, { useState, useEffect } from "react";
/* eslint-disable import/no-webpack-loader-syntax */
import Worker from "worker-loader!../workers/CounterWorker";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [worker, setWorker] = useState(null);

  const increment = () => {
    if (!worker) return;
    worker.postMessage({ type: "increment" });
  };
  const decrement = () => {
    if (!worker) return;
    worker.postMessage({ type: "decrement" });
  };

  useEffect(() => {
    const newWorker = Worker();
    setWorker(newWorker);

    newWorker.onmessage = (event) => {
      console.log("<Counter /> recevied a message from a worker!\n", event);
      const action = event.data;
      if (action.type === "update") {
        setCount(action.count);
      }
    };

    return function cleanup() {
      newWorker.terminate();
    };
  }, []);

  return (
    <>
      <button className="br2" onClick={decrement}>
        -
      </button>
      <p className="dib mr1 ml1">{count}</p>
      <button className="br2" onClick={increment}>
        +
      </button>
    </>
  );
}
