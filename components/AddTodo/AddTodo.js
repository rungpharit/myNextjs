import React, { Component } from 'react';

class AddTodo extends Component {
  state = {
    title:''

  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title : ''});
    
  }
  onChange = (e) =>{
    this.setState({ [e.target.name] : e.target.value});
    console.log("e: ",e.target.name);
  }
  render() { 
    return ( 
      <div>
        <form onSubmit = {this.onSubmit} style = {{ display : 'flex', marginBottom : '10px' }}>
          <input 
            type="text"
            name="title"
            style = {add }
            placeholder = "Add Todo ..."
            value = {this.state.title}
            onChange={this.onChange}
          />
          <input
            type= "submit"
            value = "Submit"
            style = {butt}
          />
        </form>
      </div>
     );
  }
}

const butt = {
  flex : '1',
  display: 'inline-block',
  border: 'none',
  background: '#555',
  color: '#fff',
  padding: '7px 20px',
  cursor: 'pointer'
}

const add = {
  flex : '10', 
  padding : '5px' 
}
 
export default AddTodo;