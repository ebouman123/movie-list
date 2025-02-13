import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { takeEvery, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery("FETCH_MOVIES", fetchAllMovies);
  yield takeEvery("MOVIE_DETAILS", fetchSpecificMovie);
  yield takeEvery("ADD_MOVIE", addMovie);
  yield takeEvery("FETCH_GENRES", fetchAllGenres);
}

function* fetchAllMovies() {
  try {
    // Get the movies:
    const moviesResponse = yield axios.get("/api/movies");
    // Set the value of the movies reducer:
    yield put({
      type: "SET_MOVIES",
      payload: moviesResponse.data,
    });
  } catch (error) {
    console.log("fetchAllMovies error:", error);
  }
}

// GET for specific movies with their movieID
function* fetchSpecificMovie(action) {
  try {
    const movieDetailsResponse = yield axios.get(
      `/api/movies/${action.payload}`
    );
    yield put({ type: "SET_MOVIES", payload: movieDetailsResponse.data });
  } catch (error) {
    console.error("fetchSpecificMovie Error", error);
  }
}

function* fetchAllGenres() {
  try {
    // Get the genres:
    const genresResponse = yield axios.get("/api/genres");
    yield put({
      type: "SET_GENRES",
      payload: genresResponse.data,
    });
  } catch (error) {
    console.log("fetchAllGenres error:", error);
  }
}

function* addMovie(action) {
  try {
    yield axios.post("/api/movies", action.payload);
    yield put({ type: "FETCH_MOVIES" });
  } catch (error) {
    console.error("addMovie Error", error);
  }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return action.payload;
    default:
      return state;
  }
};

// Keeps track of the ID of the movie that was clicked
const details = (state = 0, action) => {
  if (action.type === "DETAILS") {
    return action.payload;
  } else {
    return state;
  }
};

//! For stretch goals
// Used to store the movie genres
const genres = (state = [], action) => {
  switch (action.type) {
    case "SET_GENRES":
      return action.payload;
    default:
      return state;
  }
};

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    genres,
    details,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

export default storeInstance;
