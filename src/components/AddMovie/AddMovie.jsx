import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";

export default function AddMovie() {
  const [titleInput, setTitleInput] = useState("");
  const [imageInput, setImageInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [genre, setGenre] = useState("");

  const genres = useSelector(store => store.genres)

  const dispatch = useDispatch();
  const history = useHistory();

useEffect(() => {
    dispatch({type: 'FETCH_GENRES'})}, [])

  let movieToAdd = {
    title: titleInput,
    poster: imageInput,
    description: descriptionInput,
    genre_id: genre,
  };

  const handleTitle = (event) => {
    setTitleInput(event.target.value);
  };
  const handleImage = (event) => {
    setImageInput(event.target.value);
  };
  const handleDescription = (event) => {
    setDescriptionInput(event.target.value);
  };
  const handleChange = (event) => {
    setGenre(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
        type: 'ADD_MOVIE',
        payload: movieToAdd
    })
    history.push('/')
  }

  return (
    <div>
      <p>Add a Movie!</p>
      <form onSubmit={handleSubmit}>
        <input onChange={handleTitle} placeholder="Movie Title" />
        <input onChange={handleImage} placeholder="Poster Image URL" />
        <input onChange={handleDescription} placeholder="Movie Description" />
        <select value={genre} onChange={handleChange}>
            {genres.map((genre) => {
                return(
                    <option value={genre.id}>{genre.name}</option>
                )
            })}
        </select>
        <button onClick={() => history.push('/')} >Cancel</button>
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}
