import { useState } from 'react'
import logo from '../../assets/logo.png'
import './navbar.css'
import {Link,useNavigate} from 'react-router-dom'
import { useContext } from "react";
import { cartContext} from "../../context/CartContext";

function Navbar()
{
    const [showLogin, setShowLogin] = useState(false);
    const [inp,seInp]=useState("")
    const [showSearch, setShowSearch] = useState(false);

    const {cart}=useContext(cartContext)
    const navi=useNavigate();

    const handle=()=>  { if (inp.trim() !== "") 
        {
        navi(`/search/${inp}`) } }

    return(
        <>
            <nav>
                <div className="logo">
                    <Link to={"/"}> <img src={logo} alt="logo" /> </Link>
                </div>

                <div className={`search-box ${showSearch ? "search-active" : ""}`}>

                    <input
                        type="text"
                        value={inp}
                        name={inp}
                        onChange={(e) => seInp(e.target.value)}
                        className="inp-box"
                        placeholder="Search Your Product..."
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handle();
                            }  }} />

                    <button
                        onClick={() => {
                        
                            if (!showSearch) {
                                setShowSearch(true);
                            } else {
                                handle();
                            } }} >
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
                <div className='lo-ca'>
                    <button className="login-btn" onClick={() => setShowLogin(true)}>
                            <span className="login-text">Login</span>
                            <i className="fa-solid fa-user login-icon"></i>
                        </button>

                    <Link to={"/cart"}>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </Link>

                    <div className={cart.length > 0 ? "count" : "cart-empty"}>
                        {cart.length}
                     </div>
                </div>
            </nav>
            {showLogin && (
                <div className="login-overlay">
                    <div className="login-box">

                    <div className='login-inner'>
                        <h1 id='head'>Login</h1>
                        <button
                        className="close"
                        onClick={() => setShowLogin(false)}>
                        ✕
                    </button>
                    </div>
                    

                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <p>Didn't have an account? <a>click here</a></p>
                    <button className='lo-bu'>Login</button>

                    </div>
                </div>)}
        </>
    )
}

export default Navbar;