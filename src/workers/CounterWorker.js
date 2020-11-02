let count = 0;
const increment = () => count++;
const decrement = () => count--;

onmessage = (event) => {
  console.log("CounterWorker recevied a message!\n", event);
  const action = event.data;
  switch (action.type) {
    case "increment":
      increment();
      break;
    case "decrement":
      decrement();
      break;
    default:
      throw new Error(
        `Unknown action type passed to CounterWorker: ${action.type}`
      );
  }
  postMessage({ type: "update", count });
};
