import { Routes, Route } from 'react-router-dom'
import Login from "./Login.jsx"
import Page from "./Page.jsx"

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path='/' element={<Page />}>
      </Route>
    </Routes>
  )
}

export default App