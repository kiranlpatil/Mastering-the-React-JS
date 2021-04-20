import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import MovieList from './components/movieList'
 
ReactDOM.render(<MovieList />,
  document.getElementById('root')
);

reportWebVitals();
