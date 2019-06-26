import React from 'react';
import "./bootstrap.min.css";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import CreateTodo from './components/create-todo.component';
import EditTodo from './components/edit-todo.component'
import TodosList from './components/todos-list.component'
import Logo from './logo.png';
function App() {
  return (
    <Router>
        <div className="container">
          
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://codingthesmartway.com" target="_blank">
              <img src={Logo} width="40" height="40" alt="CodingTheSmartWay.com" />
            </a>
            <Link to="/" className="navbar-brand">Todo App</Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Todo</Link>
                </li>
              </ul>
            </div>
          </nav>

          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </div>
</Router>
   
       
      
     
  );
}

export default App;
