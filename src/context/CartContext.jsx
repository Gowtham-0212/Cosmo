import { createContext,useState } from "react"
export const cartContext = createContext()

function CartContext({children}) 
{
    const [cart,setCart]=useState([])
    const [showPopup, setShowPopup] = useState(false);

   const addtocart = (item) => {

    const avail = cart.find(i => i.id === item.id);

    if (avail) {

        setCart(
            cart.map(i =>
                i.id === item.id
                    ? { ...i, quantity: i.quantity + 1 }
                    : i
            )
        );
        // console.log(item.quantity)

    } else {

        setCart([
            ...cart,
            { ...item, quantity: 1 }
        ]);
    }
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 2000);};
    const increase=(item) => {
        setCart(
            cart.map(i => i.id==item.id?{...i,quantity:i.quantity+1}
                :i
            ))
    }

    const decrease=(item) => {
        setCart(
            cart.map(i => i.id==item.id?{...i,quantity:i.quantity-1}
                :i
            ).filter(i => i.quantity>0))
    }

    const erase=(item) => {
        setCart(
            cart.filter(i => i.id!==item.id))
    }
       


  return (
  <>
    <cartContext.Provider 
        value={{cart,setCart,addtocart,increase,decrease,showPopup,erase}}>
        {children}
    </cartContext.Provider>
  </>  )
}

export default CartContext