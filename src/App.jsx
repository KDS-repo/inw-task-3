import { Routes, Route } from 'react-router-dom'
import Page from "./Page.jsx"

function App() {
  return (
    <Routes>
      <Route path='/' element={<Page />}>
      </Route>
    </Routes>
  )
}

export default App