import React from 'react';
import "./bootstrap.min.css";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import CreateTodo from './components/create-todo.component';
import EditTodo from './components/edit-todo.component'
import TodosList from './components/todos-list.component'

function App() {
  return (
   <div className="container">
     <Router>
      
      
      
        <h2>Todo_App</h2>
      
      <Route path="/" exact component={TodosList} />
      <Route path="/edit/:id" exact component={EditTodo} />
      <Route path="/create" exact component={CreateTodo} />
      
      </Router>
   </div>
  );
}

export default App;
