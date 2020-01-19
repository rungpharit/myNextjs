import React, { Component } from 'react';

class TodoItem extends Component {
  render() { 
    const {id,title} = this.props.todoItem
    return ( 
      <div style ={getStyle}>
        <p style = {{ margin : '3px'}}>
          {title}
          <button 
            onClick={this.props.delTodo.bind(this,id)}
            style={btnStyle}>x
            </button>
        </p>
      </div>
     );
  }
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding : '3px 5px',
  borderRadius : '50%',
  cursor: 'pointer',
  float: 'right'
}

const getStyle={
  background: '#f4f4f4',
  padding:'3px',
  borderBottom: '1px #ccc dotted',
}


 
export default TodoItem;