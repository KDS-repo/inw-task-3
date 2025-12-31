import { Routes, Route } from 'react-router-dom'
import Login from "./Login.jsx"
import FrontPage from "./FrontPage.jsx"
import Details from './Details.jsx'
import Layout from './Layout.jsx'
import './index.css'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path='/' element={<Layout />}>
        <Route index element={<FrontPage />} />
        <Route path="article/:id" element={<Details />} />
      </Route>
    </Routes>
  )
}

export default App