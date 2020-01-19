import React, { Component } from 'react';

class TodoItem extends Component {
  render() { 
    const {id,title} = this.props.todoItem
    return ( 
      <div>
        <p>
          {title}
          <button onClick={this.props.delTodo.bind(this,id)}>x</button>
        </p>
      </div>
     );
  }
}
 
export default TodoItem;