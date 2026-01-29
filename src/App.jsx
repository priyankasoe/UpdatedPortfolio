import { useState } from 'react'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { WritingDetail } from "./pages/WritingDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="writing/:id" element={<WritingDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route index element={<Home />} />
//           <Route path="*" element={<NotFound /> } />
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

export default App
