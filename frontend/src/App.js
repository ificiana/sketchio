import React from 'react'
import { socket } from './services/socket';
import { useEffect, useState } from 'react'

function App() {
  useEffect(()=>{
    socket.on("connect", () => {
      console.log(socket.connected); // true
    });
    socket.on("disconnect", () => {
      console.log(socket.connected); // false
    });
  });
  return (
    <h1>Sketchio</h1>
  );
}

export default App;
