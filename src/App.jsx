import Home from './pages/home'
import Navbar from "./components/navbar/navbar"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Cart from './pages/cart'
import Category from './pages/category'
import Subnav from './components/subNav/subnav'
import ProductDetails from './components/productDetails/prodetail'
import Search from './pages/Search'
import Footer from './components/footer/Footer'



function App() {
 

  return (
    <>
       
        <BrowserRouter>

          <Navbar/>

          <Subnav/>

          <Routes>

            <Route path="/" element={<Home/>}/>

             <Route path="/cart" element={<Cart/>}/>

            <Route path="/categorypage/:categoryName" element={<Category/>}/>

            <Route path="/product/:categoryName/:id" element={<ProductDetails />}/>

            <Route path='/search/:userInput' element={<Search/>}/>

          </Routes>

          <Footer/>

        </BrowserRouter>
    </>
  )
}

export default App
