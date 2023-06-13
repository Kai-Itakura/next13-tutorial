'use client'

import { useState } from 'react'

const Header = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Header</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <div>{count}</div>
    </>
  )
}

export default Header
