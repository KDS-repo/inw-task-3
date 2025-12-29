import { Routes, Route } from 'react-router-dom'
import Login from "./Login.jsx"
import Page from "./Page.jsx"
import Details from './Details.jsx'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path='/' element={<Page />}>
      </Route>
      <Route path="/article" element={<Details />} />
    </Routes>
  )
}

export default App