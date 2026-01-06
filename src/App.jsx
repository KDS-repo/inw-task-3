import { Routes, Route } from 'react-router-dom'
import Login from "./Login.jsx"
import FrontPage from "./FrontPage.jsx"
import Details from './Details.jsx'
import Layout from './Layout.jsx'
import './index.css'

import images from '../img/index.js'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setLoading, setArticlesList } from './redux/articleSlice.js'
//import { useSelector } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  //const { loading } = useSelector((state) => state.articles)

  useEffect(() => {
    dispatch(setLoading(true))
    //console.log("loading 1 is:", loading)
    function fetchPosts() {
      fetch('https://dummyjson.com/posts?limit=28')
        .then((response) => response.json())
        .then((data) => {
          const imagesArray = Object.values(images)
          const postsWithImages = data.posts.map((post, index) => ({
            ...post,
            image: imagesArray[index]
            // images[index]?.url could be useful if I work with images[] as objects
          }));
          dispatch(setArticlesList(postsWithImages))
        })
        .catch((error) => console.log('Failed to fetch posts:', error))
        .finally(() => dispatch(setLoading(false)))
    }
    fetchPosts()
  }, [dispatch])

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