import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';


class App extends Component {
  render() {
    return (
      <div className="App">
       <Counter></Counter>
       <LoadComments></LoadComments>
      </div>
    );
  }
}

function LoadComments(){
  const [comments, setComments] = useState([]);
  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
      .then(data => setComments(data))
  }, [])

  return(
    <div>
      <h2>Comments: {comments.length}</h2>
      {
        comments.map( comment => <Comment  name={comment.name} email={comment.email} body={comment.body}></Comment> )
      }
    </div>
  )
}

function Comment(props){
  return(
    <div className='item-container'>
      <h4>Name: {props.name} </h4>
      <h4>Email: {props.email} </h4>
      <p>details: {props.body} </p>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  return(
    <div>
      <h1>Counter: {count} </h1>
      <button className='btn' onClick={increaseCount}> Increase </button>
      <button className='btn' onClick={decreaseCount}> Decrease </button>
    </div>
  )
}

export default App;
