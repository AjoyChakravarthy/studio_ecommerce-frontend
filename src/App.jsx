

import Navbar from './components/Navbar/Navbar'
import { HashRouter,Route, Routes,} from 'react-router-dom'
import Shop from './components/pages/Shop'
import ShopCategory from './components/pages/ShopCategory'
import Product from './components/pages/Product'
import Cart from './components/pages/Cart'
import LoginSignup from './components/pages/LoginSignup'
import Footer from './components/Footer/Footer'
import banner_men from './assets/banner_men.png';
import banner_women from './assets/banner_women.png';
import banner_kid from './assets/banner_kids.png';

function App() {
  

  return (
    <div>
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop/>}/> 
        <Route path='/mens' element={<ShopCategory banner={banner_men} category="men"/>}/>
        <Route path='/womens' element={<ShopCategory banner={banner_women} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={banner_kid} category="kid"/>}/>
        <Route path='product' element={<Product/>}>
          <Route path='/product/:productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer />
     </HashRouter>
    </div>
  )
}

export default App
