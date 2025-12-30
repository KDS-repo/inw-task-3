import { Routes, Route } from 'react-router-dom'
import Login from "./Login.jsx"
import Page from "./Page.jsx"
import Details from './Details.jsx'
import './index.css'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path='/' element={<Page />}>
      </Route>
      <Route path="/article/:id" element={<Details />} />
    </Routes>
  )
}

export default App