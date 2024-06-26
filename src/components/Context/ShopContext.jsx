import { createContext, useState} from "react";
import  propTypes  from 'prop-types'
import  all_product  from '../../assets/all_product'


export const ShopContext = createContext(null);

const getDefaultCart = () =>{
    const cart = {};
    for (let index = 0; index < all_product.length; index++){
        cart[all_product[index].id] = 0;
    }
    return cart;
};

const ShopContextProvider =(props)=>{

    
    const [cartItems, setCartItems] = useState(getDefaultCart());
   
    const addToCart = (itemId)=> {
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]+1}));

       
    }
    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}))
     }
    const getTotalCartAmount =() =>{
        let totalAmount = 0;
        for(const item in cartItems)
            {
                if(cartItems[item]>0){
                    let itemInfo = all_product.find((product) =>product.id===Number(item))
                    totalAmount += itemInfo.new_price * cartItems[item];
                }
                
            }
            return totalAmount;
    }

    const getTotalCartItems = () =>{
        let totalItems = 0;
        for(const item in cartItems)
            {
                if(cartItems[item]>0)
                    {
                        totalItems+= cartItems[item];
                    }
            }
            return totalItems;
    }

    const contextValue = {getTotalCartItems, getTotalCartAmount,all_product, cartItems, addToCart, removeFromCart }; 

    return(
        <ShopContext.Provider value={contextValue}>
        {props.children}
        </ShopContext.Provider>
    )


};

    ShopContextProvider.propTypes = {
        children: propTypes.node.isRequired
    };
    
export default ShopContextProvider