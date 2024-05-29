import { Link } from 'react-router-dom';
import './Item.css'
import PropTypes from 'prop-types';

const Item = (props) => {

    
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}><img onClick={window.scrollTo({top:0, behavior: 'smooth' })} src={props.image} alt=''/></Link>
      <p>{props.name}</p>
      <div className='item-prices'>
        <div className='item-price-new'>
        ${props.new_price}
        </div>
        <div className='item-price-old'>
        ${props.old_price}
        </div>
      </div>
    </div>
  )
}

Item.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  new_price: PropTypes.number.isRequired,
  old_price: PropTypes.number.isRequired,
};

export default Item
