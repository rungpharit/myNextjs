import React, { Component } from 'react';
import TodoItem from './TodoItem'

class ShowTodo extends Component {

  render() { 
   console.log("Show: ",this.props.todos)
    return ( 
      this.props.todos.map((todo) => (
        <TodoItem key={todo.id} todoItem={todo} delTodo = {this.props.delTodos}/>
      ))
     );
  }
}
 
export default ShowTodo;