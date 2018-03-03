import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'

const YOUTUBE_KEY = 'AIzaSyCXhMsWNEYzzWlWtlK2nqGWN7eGncsGPyg';

const App = () => {
  return (
    
    <div>
        <SearchBar />
    </div>

  ); 
}

ReactDOM.render(<App/>, document.querySelector('.container'));
