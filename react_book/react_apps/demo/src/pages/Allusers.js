/** @format */

import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function Allusers() {
  const [alluser, setAllusers] = useState([]);
  // console.log(alluser);

  useEffect(() => {
    fetch('http://localhost:3004/list-users')
      .then((response) => response.json())
      .then((data) => setAllusers(data))
      .catch((error) => console.log(error));
  }, []);

  const buttonDelectHandler = (e) => {
    // console.log(e.target.id);
    axios
      .delete(`http://localhost:3004/delete/${e.target.id}`)
      .then(( response ) => response.json())
      .then(( data ) => data)
      .catch(({message} ) => console.log(message))
      setAllusers([...data, alluser]);
  };
  return (
    <ul>
      <li>name----email----password</li>
      {alluser.map((v) => (
        <li key={v.id}>
          {v.username}----{v.email}----{v.password}{' '}
          <button
            id={v.id}
            className='btn  btn-danger'
            onClick={buttonDelectHandler}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
}
