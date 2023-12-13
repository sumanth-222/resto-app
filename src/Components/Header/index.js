import {IoMdCart} from 'react-icons/io'
import './index.css'

const Header = () => (
  <div className="header-container">
    <h1 className="website-name">UNI Resto Cafe</h1>
    <div className="orders">
      <p className="order">My Orders</p>
      <IoMdCart className="cart-icon" />
    </div>
  </div>
)

export default Header
