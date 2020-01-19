import React, { Component } from 'react'
import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import ShowTodo from '../components/ShowTodo/ShowTodo';
import AddTodo from '../components/AddTodo/AddTodo';
import fetch from 'isomorphic-unfetch';

class Index extends Component {
  state = { 
    todos : [
      {
        id:1,
        title:'Take out the trash',
      },
       {
        id:2,
        title:'Dinnner with wife',
      },
      {
        id:3,
        title:'Meeting with boss',
      }
    ]
  };

    delTodos = (id) => {
      console.log("del: ",id);
      this.setState({todos:[...this.state.todos.filter((todo) => todo.id !== id)]});
    }

    addTodo = (title) => {
      const newTodo = {
        id:4,
        title:title,
      }
      this.setState({ todos : [...this.state.todos, newTodo]})
      
    }

   
  render() {
    console.log(this.state.todos)
    console.log(this.props)
    
    return (
      <div style={all}>
      <Head>
        <title>Todo</title>
      </Head>
      <Navbar/>
      <AddTodo addTodo={this.addTodo}/>
      <ShowTodo todos={this.state.todos} delTodos = {this.delTodos}/>
       
    </div>
    );
  }
  
}
 Index.getInitialProps = async function(){
  const res = await fetch('http://localhost:5000/api/todos');
  const data = await res.json();

  return {
    data: data
  }
}
const all ={
  padding : '0',
  margin : '0px',
 
}

export default Index;

