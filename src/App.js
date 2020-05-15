import React, { Component } from "react";
import "./App.css";
import apiKey from "./apiKey";

import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";

import MovieCard from "./components/MovieCard";
import MovieDialog from "./components/MovieDialog";

const useStyles = makeStyles(( theme ) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

class App extends Component {
  state = {
    movies: [],
    selectedMovie: null,
    searchText: null,
  };

  selectMovie = (movie) => this.setState({ selectedMovie: movie });

  clearMovie = () => this.setState({ selectedMovie: null });

  search = async (e) => {
    e.preventDefault();

    const { searchText } = this.state;
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchText}&page=1&include_adult=false`
    );
    const json = await response.json();
    console.log(json);
    this.setState({ movies: json.results });
  };

  searchTextChanged = (e) => this.setState({ searchText: e.target.value });

  async componentDidMount() {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
    );
    const json = await response.json();
    this.setState({ movies: json.results });
  }

  render() {
    const { movies, selectedMovie, searchText } = this.state;

    return (
      <div className="App">
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" className="titleBar">
              Top Movies
            </Typography>
            <form onSubmit={this.search}>
              <Input
                type="search"
                value={searchText}
                onChange={this.searchTextChanged}
                placeholder="Sear"
              ></Input>
            </form>
          </Toolbar>
        </AppBar>
        <div className="movies">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              selectMovie={this.selectMovie}
            />
          ))}
        </div>
        <MovieDialog movie={selectedMovie} handleClose={this.clearMovie} />
      </div>
    );
  }
}

export default withStyles(useStyles)(App);
