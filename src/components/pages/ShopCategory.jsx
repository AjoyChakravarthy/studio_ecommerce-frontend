import './CSS/ShopCategory.css'
import  PropTypes  from 'prop-types'
import dropdown_icon from '../../assets/dropdown_icon.png'
import all_product from '../../assets/all_product'
import Item from '../../components/Item/Item'


const ShopCategory = (props) => {
  
  return (
    <div className="shop-category">
      <img className='shopcategory-banner' src={props.banner} alt={'${props.category} Banner'}/>
      <div className='shopcategory_indexSort'>
        <p>
        <span>Showing 1-12</span> Out of 36 products
        </p>
        <div className='shopcategory-sort'>
          Sort by <img src={dropdown_icon} alt='Sort Icon' />
        </div>
      </div>

      <div className='shopcategory-products'>
        {all_product.map((item)=>{
          if (props.category === item.category) {
            return (
              <Item
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }

        })}
      </div>
      <div className='shopcategory-loadmore'>
        Explore More
      </div>
    </div>
  )
}
ShopCategory.propTypes = {
  banner: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
};

export default ShopCategory
