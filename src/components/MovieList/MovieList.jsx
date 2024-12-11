import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./MovieList.css";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function MovieList() {
  const dispatch = useDispatch();
  const history = useHistory();
  const movies = useSelector((store) => store.movies);

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  const handleClick = (id) => {
    dispatch({
      type: "MOVIE_DETAILS",
      payload: id,
    });
    history.push("/details");
  };

  return (
    <main>
      <h1>MovieList</h1>
      <section className="movies">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={5}>
            {movies.map((movie) => {
              return (
                <Grid size={2}>
                  <Card
                    data-testid="movieItem"
                    onClick={() => handleClick(movie.id)}
                    key={movie.id}
                    sx={{ maxWidth: 375 }}
                  >
                    <CardMedia
                      data-testid="toDetails"
                      sx={{ height: 500 }}
                      image={movie.poster}
                      title={movie.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {movie.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </section>
    </main>
  );
}

export default MovieList;
