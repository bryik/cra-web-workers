import Counter from "./components/Counter";

function App() {
  return (
    <main className="sans-serif ma3 pa3">
      <h1 className="f2 lh-title">Web workers in CRA</h1>
      <p className="f4 lh-copy measure">
        This is a demonstration of using{" "}
        <a href="https://github.com/webpack-contrib/worker-loader">
          worker-loader
        </a>{" "}
        to run a web worker in a create-react-app project. See{" "}
        <a href="https://github.com/facebook/create-react-app/pull/5886">
          this issue thread
        </a>{" "}
        for more details.
      </p>
      <p className="f4 lh-copy measure">
        The increment and decrement buttons below are wired up to a web worker;
        this offloads the high intensity computation of...adding or subtracting
        by 1.
      </p>
      <div className="ml3 mb3">
        <Counter />
      </div>
    </main>
  );
}

export default App;
