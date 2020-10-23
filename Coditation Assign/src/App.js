import React, { Component } from "react";
// import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import FetchDataContainer from "./FetchDataContainer";
import {  BrowserRouter, Route, Router, Switch } from "react-router-dom";
// import CurrentUser from "./CurrentUser";
// import history from './Componenthistory'
class App extends Component {
  constructor(props) {
    super(props)
  
    
  }
  
  render (){
  return(
  

    <div className="App">

    <Provider store={store}>
      <BrowserRouter>
      {/* <Router history={history}> */}
    <Switch>
      <Route path="/" component={FetchDataContainer}/>
   {/* <Route path='/login/:login' component={CurrentUser} /> */}
   </Switch>
   </BrowserRouter>
   {/* </Router> */}
    </Provider>
    </div>

  );
}
}

export default App;
