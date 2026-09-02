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
        {filtered.map(
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