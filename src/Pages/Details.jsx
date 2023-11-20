import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Details() {
    let { id } = useParams();

    const [post, setPost]=useState([])
 
    useEffect(() => {
       
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(function (response) {
          // handle success
          console.log(response.data);
          setPost(response.data)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
          },[]);
  return (
    <>
    <div>Details{id}</div>
 
  <table border="1">
    <tr style={{backgroundColor:"blue"}}>
      <th>id</th>
      <th>title</th>
      <th>body</th>
    </tr>

    <tr><td>{post.id}</td>
      <td>{post.title}</td>
      <td>{post.body}</td>
    </tr>
  </table>
    </>
    
    
  )
}
