import React, { useState, useEffect } from "react";
import * as Comlink from "comlink";
/* eslint-disable import/no-webpack-loader-syntax */
import Worker from "worker-loader!../workers/CounterWorker";

async function initWorker(setCount) {
  const service = Comlink.wrap(new Worker());
  return {
    increment: () => service.increment(Comlink.proxy(setCount)),
    decrement: () => service.decrement(Comlink.proxy(setCount)),
  };
}

export default function Counter() {
  const [count, setCount] = useState(0);
  const [worker, setWorker] = useState({
    decrement: () => {},
    increment: () => {},
  });

  useEffect(() => {
    initWorker(setCount).then((service) => {
      setWorker(service);
    });
  }, []);

  return (
    <>
      <button className="br2" onClick={worker.decrement}>
        -
      </button>
      <p className="dib mr1 ml1">{count}</p>
      <button className="br2" onClick={worker.increment}>
        +
      </button>
    </>
  );
}
