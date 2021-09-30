import React from "react";
import { Link } from "react-router-dom";
import Table from "./table";

const MovieTable = (props: { onDelete: any; movies?: any }) => {
  const columns = [
    {
      path: "title",
      label: "Title",
      content: (movie: { _id: any; title: string | number }) => (
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      ),
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "delete",
      content: (movie: any) => (
        <button
          onClick={() => props.onDelete(movie)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];

  const { movies } = props;
  return <Table columns={columns} data={movies} />;
};

export default MovieTable;
