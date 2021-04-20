import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class movieList extends Component {
    state = {
        movies: getMovies()
      };

    handleDelete = movie => {
        const moviesOk = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies: moviesOk});
    }

    renderNoItems() {
        if (this.state.movies.length === 0) return <h3 className="p-3">There are no items in the database</h3>
        return <h3 className="p-3">Showing {this.state.movies.length} in the database </h3>
    }
    render() { 
        return (
            <main className="container">
            <div>{this.renderNoItems()}</div>
            {this.state.movies.length !== 0 && (
            <table className="table">
            <thead>
                <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                </tr>
            </thead>
            <tbody>
                {this.state.movies.map(movie => (
                    <tr key={movie.title}>
                        <td>{ movie.title }</td>
                        <td>{ movie.genre.name }</td>
                        <td>{ movie.numberInStock }</td>
                        <td>{ movie.dailyRentalRate }</td>
                        <td>
                            <button className="btn btn-danger" onClick={() => this.handleDelete(movie)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
            </table>
            )}
          </main>
        );
    }
    
}
 
export default movieList;
