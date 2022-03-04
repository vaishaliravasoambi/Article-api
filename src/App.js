
import './App.css';
import Article from "./Components/Article/Article1.jsx"
import Login from './Components/Login/Login';
import {Route,Switch,Redirect,BrowserRouter} from "react-router-dom"
import NewItem from './Components/NewArticle/NewItem';
import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      isAuthenticated:false
    }
    this.getId = this.getId.bind(this);
  }

  getId (e) {
    this.setState({
     isAuthenticated:true,
      id: e.target.value
    })
  }
  render() {
    console.log("ID",this.state)
    return (
      
        <div className="App">
          <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Login getId={this.getId}  />
          </Route>

        {this.state.isAuthenticated ?<Route path="/article" exact >
          <Article id = {this.state.id}/>
          </Route>:<Redirect to="/"/>}
        <Route path="/new"  exact component={NewItem}   />
       </Switch>
       </BrowserRouter>
      </div>
    )
  }
}

