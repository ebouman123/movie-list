import {
  Route,
  HashRouter as Router,
  Link,
  useLocation,
} from "react-router-dom";
import MovieList from "../MovieList/MovieList";
import AddMovie from "../AddMovie/AddMovie";
import Details from "../Details/Details";
import "./App.css";

function App() {
  const location = useLocation();
  console.log(location);
  return (
      <div className="App">
        <h1>The Movies Saga!</h1>
        <nav>
          {location.pathname === "/" && (<Link to="/addMovie">Add a Movie</Link>)}
        </nav>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/details">
          <Details />
        </Route>
        <Route path="/addMovie">
          <AddMovie />
        </Route>
      </div>
  );
}

export default App;
