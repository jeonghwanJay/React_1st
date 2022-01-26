import React from 'react'
import {Route} from 'react-router-dom';
import Review from './Review'
import Main from './Main'

function App() {


  return (
    <div className="App">
      <Route path="/" exact>
        <Main/>
      </Route>
      <Route path="/review/:day">
      <Review/>
      </Route>
    </div>
  );
}

export default App;


