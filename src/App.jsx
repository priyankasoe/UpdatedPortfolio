import { useState } from 'react'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
