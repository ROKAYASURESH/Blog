import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
export default function Home() {
    const [post, setPost]=useState([])
 
    useEffect(() => {
        document.title="Home"
        axios.get('https://jsonplaceholder.typicode.com/comments?postId=1')
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
        <div className="container">
            <h1>NEW BLOG LIST</h1>
            <table className='table table-striped table-hover'>
            <thead>
                <th>S.N</th>
                <th>Title</th>
            </thead>

            {post.map((item)=>(
            <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td><Link to={`details/${item.id}`}> View More</Link></td>
            </tr>
                
            
        ))}
        
        </table>
        </div>
    </>
  )
}
