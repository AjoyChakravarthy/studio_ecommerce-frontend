import './Navbar.css'
import cart_icon from '../../assets/cart_icon.png'
import dropdown_menu from '../../assets/dropdown_menu.png'
import { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'

const Navbar = () => {

    const [menu, setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();
    const dropdown_toggle = () =>{
        menuRef.current.classList.toggle("nav-menu-show");
        event.target.classList.toggle('open')
    }

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <p>S<span>tudio.</span></p>
        </div>
        <div className='dropdown-menu'><p>Menu</p><img className='nav-dropdown' onClick={dropdown_toggle}  src={dropdown_menu} alt=''/></div>
        <ul ref={menuRef} className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none', color:'#626262'}} to='/'>Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none', color:'#626262'}}  to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none',color:'#626262'}}  to='womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none',color:'#626262'}}  to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
            <Link to='/login'><button>Sign Up</button></Link>
            <Link to='cart'><img src={cart_icon} alt='Shopping Cart' /></Link>
            <div className='nav-cart-count'>{getTotalCartItems()}</div>
        </div>

    </div>
  )
}

export default Navbar
