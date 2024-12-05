import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Categories from './../Categories/Categoreis';

function CategoryProducts() {
    const categories = useLoaderData();
    console.log(categories);
    return (
        <div>
            <h2>Categories {categories.length}</h2>
        </div>
    )
}

export default CategoryProducts
