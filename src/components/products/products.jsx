import { Link } from 'react-router-dom'
import './products.css'

function products({item,categoryName})
{
    return(
        <>
       

            <div className="card">
                 <Link to={`/product/${categoryName}/${item.id}`}>
                <div className="pro-img">
                    <img 
                    src={item.image}
                    alt="none" />
                </div>
                <div className="details">
                    <h3>{item.name}</h3>
                    <div className="sub-details">
                        <div className="price">
                            <i className="fa-solid fa-indian-rupee-sign"></i>
                            <h2>{item.price}</h2>
                        </div>
                       
                       <div className="rating">
                            <i className="fa-solid fa-star"></i>
                            <p>{item.rating}</p>
                       </div>
                        
                    </div>
                   <div className="description">
                        <p>
                            {item.ram && <> RAM {item.ram} | </>}
                            {item.storage && <> STORAGE {item.storage} | </>}
                            {item.color && <> Instock colors: {item.color}</>}
                        </p>
                    </div>
                </div>
                </Link>
            </div>
            {/* {console.log(categoryName)} */}


            
        </>
    )
}

export default products