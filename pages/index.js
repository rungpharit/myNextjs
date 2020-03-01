import React, { Component } from 'react'
import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import ShowTodo from '../components/ShowTodo/ShowTodo';
import AddTodo from '../components/AddTodo/AddTodo';
import fetch from 'isomorphic-unfetch';

import Picture from '../components/picture'

import axios from 'axios';


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
    ],
  };

    delTodos = (id) => {
      // console.log("del: ",id);
      // this.setState({todos:[...this.state.todos.filter((todo) => todo.id !== id)]});

      axios.delete('http://localhost:5000/api/todos/',{
        id,
      })
      .then(console.log(id));
    }

    addTodo = (title) => {
      // console.log("add: ",title)
      // const newTodo = {
      //   id:4,
      //   title:title,
      // }
      // this.setState({ todos : [...this.state.todos, newTodo]})

      axios.post('http://localhost:5000/api/todos/',{
        title,
      })
      .then(console.log(title));
    }

  render() {
    //console.log(this.state.todos)
    console.log("from Db",this.props)
    
    return (
      <div >
      <Head>
        <title>Todo</title>
      </Head>
      <Navbar/>
      <AddTodo addTodo={this.addTodo}/>
      <ShowTodo todos={this.state.todos} delTodos = {this.delTodos} data = {this.props.data}/>
      <Picture/>
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

export default Index;

