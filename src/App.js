import "./css/App.css";
import Portfolio from "./Portfolio";
import Authentication from "./Authentication";
import Header from "./Header";

function App() {
  return (
    <div>
      <Header></Header>
      {localStorage.getItem("isLoggedIn") && <Portfolio></Portfolio>}
      {!localStorage.getItem("isLoggedIn") && <Authentication></Authentication>}
      {/* <div className="App container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div>
          <ul className="list-group">
            <button
              className="list-group-item"
              data-bs-toggle="collapse"
              data-bs-target="#content"
              aria-expanded="false"
              aria-controls="content"
            >
              Content
            </button>
            <button
              className="list-group-item"
              data-bs-toggle="collapse"
              data-bs-target="#experience"
              aria-expanded="false"
              aria-controls="experience"
            >
              Experience
            </button>
            <button
              className="list-group-item"
              data-bs-toggle="collapse"
              data-bs-target="#education"
              aria-expanded="false"
              aria-controls="education"
            >
              Education
            </button>
            <button
              className="list-group-item"
              data-bs-toggle="collapse"
              data-bs-target="#otherPlatforms"
              aria-expanded="false"
              aria-controls="otherPlatforms"
            >
              Other Platforms
            </button>
          </ul>
          <ul className="list-group collapse" id="content">
            <li className="list-group-item">
              <h2>Tic Tac Toe Game</h2>
              <p style={{ margin: "auto", width: "50%" }}>
                Tic Tac Toe game using React and JS. Learning areas:
              </p>
              <ul
                style={{ "text-align": "left", margin: "auto", width: "50%" }}
              >
                <li>
                  Use of an array of objects for tracking and changing repeated
                  cells of the Tic Tac Toe game. Using the array reduced the
                  number of useStates as well as an reduction in code
                  duplication, complexity and increased readability.
                </li>
                <li>
                  Comparing matrices for winning patterns. Using '.every'
                  instead of '.map' due to the ability to exit the loop if
                  winning patterns found. '.map' could still be used but
                  '.every' allows for shorter code runtime and simplicity.
                </li>
                <li>
                  Use of '.fill' for the initiation of the array of cell
                  objects. Reduced code duplication and would allow for easier
                  adjustments if more or less cells needed to be added or
                  additional parameters needed to be added to each cell.
                </li>
              </ul>
            </li>
            <li className="list-group-item">Connect Four Game</li>
            <li className="list-group-item">Water Sports Website Redesign</li>
            <li className="list-group-item">6 Barrels Website Redesign</li>
          </ul>
        </div>
      </div> */}
      </div>
  );
}

export default App;
