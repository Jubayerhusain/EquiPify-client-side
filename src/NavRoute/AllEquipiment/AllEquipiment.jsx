import React from 'react'
import { useLoaderData } from 'react-router-dom'

function AllEquipiment() {
    const allProduct = useLoaderData();
    console.log(allProduct);
    return (
        <div>
            
        </div>
    )
}

export default AllEquipiment
