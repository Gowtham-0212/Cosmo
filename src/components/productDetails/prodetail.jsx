import './prodetail.css';
import Mobiledescription from '../description/mobiledescription';
import Camerasdescription from '../description/camerasdescription';
import Audiodescription from '../description/audiodescription';
import Console from '../description/consoledescription';
import Controller from '../description/controller';
import Wheel from '../description/wheel';
import Tv from '../description/tv';
import Homeapp from '../description/homeapp';

import { useParams } from "react-router-dom";
import { useContext } from "react";

import { cartContext } from "../../context/CartContext";
import data from "../../../public/data/data.json"; 


function Prodetail() {

    const { addtocart, showPopup } = useContext(cartContext);

    const { categoryName, id } = useParams();

    const chosen = data.find(
        (item) =>
            item.category === categoryName &&
            item.id === Number(id)
    );

    if (!chosen) {
        return <h2>Product not found...</h2>;
    }


    return (
        <>

            <div className="detail-wrap">
                <div className="detail-img">
                    <img
                        src={chosen.image}
                        alt={chosen.name}/>
                </div>
                <hr />

                {showPopup && (
                    <div className="popup">
                        <i className="fa-solid fa-square-check"></i>
                        <h4>Added to Cart</h4>
                    </div>
                )}

                <div className="pro-description">

                    <div className="pro-header">
                        <h1>{chosen.name}</h1>
                        <p>Brand - {chosen.brand.toUpperCase()} </p>
                    </div>

                    <div className="pro-des-price">
                        <i className="fa-solid fa-indian-rupee-sign"></i>
                        <h2>{chosen.price}</h2>
                        <h4>.00</h4>
                    </div>

                    <div className="pro-spec">
                        {chosen.ram !== undefined && (
                            <p>RAM {chosen.ram} |</p> )}

                        {chosen.storage !== undefined && (
                            <p>STORAGE {chosen.storage} |</p> )}

                        {chosen.color !== undefined && (
                            <p> Color : {chosen.color.toUpperCase()} </p> )}
                    </div>

                    <div className="cart-button">
                        <button onClick={() => addtocart(chosen)}>
                            Add to Cart
                        </button>
                    </div>

                    <div className="pro-para">
                        <h2>Description</h2>
                            <div className="long-details">
                                {categoryName === "mobiles" && (
                            <Mobiledescription chosen={chosen} /> )}

                        {categoryName === "laptops" && (
                            <Mobiledescription chosen={chosen} /> )}

                        {categoryName === "cameras" && (
                            <Camerasdescription chosen={chosen} /> )}

                        {categoryName === "tv&entertainment" && (
                            <Tv chosen={chosen} /> )}

                        {categoryName === "audio" && (
                            <Audiodescription chosen={chosen} /> )}

                        {categoryName === "gaming" &&
                            chosen.type === "console" && (
                                <Console chosen={chosen} /> ) }


                        {categoryName === "gaming" &&
                            chosen.type === "controller" && (
                                <Controller chosen={chosen} /> )}

                        {categoryName === "gaming" &&
                            chosen.type === "wheel" && (
                                <Wheel chosen={chosen} /> )}

                        {categoryName === "homeAppliances" && (
                            <Homeapp chosen={chosen} /> )}
                            </div>
                        
                    </div>
                </div>
            </div>


            {/* Temporary content */}
            <ul>
                <li>Hello World</li>
                <li>Hello World</li>
                <li>Hello World</li>
                <li>Hello World</li>
                <li>Hello World</li>
            </ul>

        </>
    );
}


export default Prodetail;