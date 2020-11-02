import Counter from "./components/Counter";
import GitHubCorner from "./components/GitHubCorner";

function App() {
  return (
    <>
      <GitHubCorner url="https://github.com/bryik/cra-web-workers" />
      <div
        className="helvetica pa3 ma3"
        style={{ margin: "0 auto", maxWidth: "960px" }}
      >
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
          The increment and decrement buttons below are wired up to a web
          worker; this offloads the high intensity computation of...adding or
          subtracting by 1.
        </p>
        <div className="ml3 mb3">
          <Counter />
        </div>
      </div>
    </>
  );
}

export default App;
