import React from 'react'
import { useParams } from 'react-router-dom'
import data from "../../public/data/data.json";
import Products from '../components/products/products';

function Search() 
{
    const {userInput}=useParams();
    
    const filtered=data.filter(
        i => i.name.toLowerCase().includes(userInput.toLowerCase())
    )
  return (
  <>
    <div className="search-container" >
        {filtered.length ===0 ? <h1 style={{marginLeft:'5%',marginTop:'5%'}}>Sorry no products match...</h1>:
        filtered.map(
            item => (
                <Products
                    key={item.id}
                    item={item}
                    categoryName={item.category}
                />
            )
        )}
    </div>
    {console.log(filtered)}
 </>)
}

export default Search