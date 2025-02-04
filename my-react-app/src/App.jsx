import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Products from './Products'
import About from './About'
import Contact from './Contact'
import ProductDetails from './ProductDetails'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:productId" element={<ProductDetails />}>
        <Route index element={<h1>Product information</h1>}/>
        <Route path="reviews" element={<h1>All reviews</h1>}/>
      </Route>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  )
}

export default App
