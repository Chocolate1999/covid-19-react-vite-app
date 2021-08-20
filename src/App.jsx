import React, { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0);
  
  useEffect(()=>{
    console.log('Hello React 17 + Vite App!', count)
  }, [count])

  return (
    <>
      Count: {count}
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </>
  );
}

export default App
