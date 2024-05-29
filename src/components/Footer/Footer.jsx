import './Footer.css'
import instagram_icon from '../../assets/instagram_icon.png'
import pinterest_icon from '../../assets/pinterest_icon.png'
import whatsapp_icon from '../../assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>
      <p>S<span>tudio.</span></p>
    </div>
     <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
     </ul>
     <div className='footer-socila-icon'>
     <div className='footer-icon-container'>
        <img  src={instagram_icon} alt=''/>
     </div>
     <div className='footer-icon-container'>
        <img  src={pinterest_icon} alt=''/>
     </div>
     <div className='footer-icon-container'>
        <img  src={whatsapp_icon} alt=''/>
     </div>
     </div>
     <div className='footer-copyright'>
     <hr/>
     <p>copyright @ 2024 - All Right Reserverd</p>
     </div>
    </div>
  )
}

export default Footer