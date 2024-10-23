import React, { useEffect, useState } from 'react';

export default function Api() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users/3')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setData(data);  
          setLoading(false); 
        })
        .catch((error) => {
          setError(error);
          setLoading(false); 
        });
    }, []); 
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>Error: {error.message}</p>;
    }
  
    return (
        <div>
          <h1>API დან მომაქ მონაცემები</h1>
          <div>
              <h1>id: {data.id}</h1>
              <h1>name: {data.name}</h1>
              <h1>username: {data.username}</h1>
              <h1>phone: {data.phone}</h1>
          </div>
        </div>
      );
}
