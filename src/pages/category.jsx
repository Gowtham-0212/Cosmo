import { useParams } from "react-router-dom";
import { useState } from "react";
import Products from "../components/products/products";
import data from "../../public/data/data.json";

function Category() {

    const { categoryName } = useParams();

    const [selectedPrice, setSelectedPrice] = useState("all");
    const [brand, setBrand] = useState("all");
    const [sort, setSort] = useState("all");


    // Get only the current category
    const categoryProducts = data.filter(
        (product) => product.category === categoryName
    );


    // Get brands from that category
    const brands = [
        ...new Set(categoryProducts.map(product => product.brand))
    ];


    // Filter brand + price
    const filteredProducts = categoryProducts.filter((product) => {

        const brandMatch =
            brand === "all" || product.brand === brand;

        let priceMatch = true;

        if (selectedPrice === "30000") {
            priceMatch = product.price < 30000;
        }

        if (selectedPrice === "50000") {
            priceMatch = product.price < 50000;
        }

        if (selectedPrice === "50001") {
            priceMatch = product.price > 50000;
        }

        return brandMatch && priceMatch;
    });


    // Copy filtered array before sorting
    let sortedProducts = [...filteredProducts];


    // Sorting
    if (sort === "A to Z") {
        sortedProducts.sort((a, b) =>
            a.name.localeCompare(b.name)
        );
    }

    if (sort === "Z to A") {
        sortedProducts.sort((a, b) =>
            b.name.localeCompare(a.name)
        );
    }

    if (sort === "L to H") {
        sortedProducts.sort((a, b) =>
            a.price - b.price
        );
    }

    if (sort === "H to L") {
        sortedProducts.sort((a, b) =>
            b.price - a.price
        );
    }


    return (
        <> <div className="select">
            <select value={brand} onChange={(e) => setBrand(e.target.value)}>
                <option value="all">All Brands</option>
                {brands.map((brandName) => (
                    <option key={brandName} value={brandName}>
                        {brandName}
                    </option>
                ))}
            </select>

            <select
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)} >
                <option value="all">All Prices</option>
                <option value="30000">Below ₹30,000</option>
                <option value="50000">₹30,000 - ₹50,000</option>
                <option value="50001">Above ₹50,000</option>
            </select>

            <select value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="all">Sort</option>
                <option value="A to Z">A to Z</option>
                <option value="Z to A">Z to A</option>
                <option value="L to H">Low to High</option>
                <option value="H to L">High to Low</option>
            </select>
            </div>
            <div className="container">

                {sortedProducts.length === 0 ? (
                    <h2 className="no-match">
                        Sorry No products found...
                    </h2>
                ) : (
                    sortedProducts.map((product) => (
                        <Products
                            key={product.id}
                            item={product}
                            categoryName={categoryName}
                        />
                    ))
                )}

            </div>
        </>
    );
}

export default Category;