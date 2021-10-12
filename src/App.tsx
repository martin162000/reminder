import React, { useState } from 'react';
import './scss/App.scss';


import {Switch, Route, Redirect} from 'react-router-dom';

import Home from './components/Home'
import Add from './components/Add'
import Post from './components/Post'


function App() {

    const [allPosts, setAllPosts] = useState(() => {
    const saved:any = localStorage.getItem("Data");
    const initialValue = JSON.parse(saved);
   return initialValue || "";
});

      // CALLBACK
      const handleChange = (data:any) => {
        setAllPosts(data)
  }


  return (
    <div className="App">
          
        <div className="reminder">
        <h1> Reminder </h1>
          

          <Switch>


              <Route exact path="/">
                  <Redirect to="/home" />
              </Route>

              <Route path="/reminder">
                  <Redirect to="/home" />
              </Route>

              <Route path="/home" exact >
                <Home 
                     postsFromLocalStorage = {allPosts}
                     onChange = {handleChange}
                 />
              </Route>

              <Route path="/add"> 
                  <Add 
                        postsFromLocalStorage = {allPosts}
                        onChange = {handleChange}
                    />
              </Route>
              
              <Route path="/post/:postId" component={Post}>
                  <Post
                        postsFromLocalStorage = {allPosts}
                        onChange = {handleChange}
                    />
              </Route>

           </Switch>
        </div>


    </div>
  );
}

export default App;
