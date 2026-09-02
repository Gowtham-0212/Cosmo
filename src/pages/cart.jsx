import { useContext } from "react";
import { cartContext} from "../context/CartContext";

function Cart()
{
    const {cart,increase,decrease,erase}=useContext(cartContext)
   
    return(
        <>  {cart.length==0?
            <h1 id="empty-msg">OOPS Cart is empty . . .</h1>:<>
        
            <div className="cart-container">
                {cart.map(item => (
                <div className="cart-card">
                    <div className="cart-pro-img">
                        <img 
                        src={item.image}
                        alt="none" />
                    </div>
        
                <div className="cart-details">
                    <h3>{item.name}</h3>
                    <div className="cart-sub-details">
                        <div className="cart-price">
                            <i className="fa-solid fa-indian-rupee-sign"></i>
                            <h2>{item.price}</h2>
                        </div>
                       
                       <div className="cart-rating">
                            <i className="fa-solid fa-star"></i>
                            <p>{item.rating}</p>
                       </div>
                       <div className="cart-product-color">
                            <h4>Color : {item.color}</h4>
                       </div>
                        
                    </div>
                </div>
                    <div className="quantity">
                        <h2>Quantity : {item.quantity}</h2>
                        <div className="cart-modify">
                            <button onClick={()=>increase(item)} id="inc">
                                +
                            </button>
                            <button onClick={()=>decrease(item)} id="dec">
                                -
                            </button>
                            <button onClick={()=>erase(item)} id="del">
                                <i class="fa-solid fa-trash-can"></i>
                            </button>
                        </div>

                    </div>
                </div>
                ))}
            </div>
            <div className="bill">
                <button>
                    <h4>Pay </h4>
                    <i class="fa-solid fa-indian-rupee-sign" id="rs"></i>
                    <h3>
                        { cart.reduce(
                            (t,i) => (t+i.price*i.quantity) ,0) }
                    </h3>
                </button>
            </div>
            </>}
        </>
    )
}

export default Cart;