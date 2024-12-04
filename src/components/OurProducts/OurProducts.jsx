import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function OurProduct({ products }) {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // AOS animation initialization
    }, []);

    const handleViewDetails = (productId) => {
        // Replace this with navigation logic or functionality
        alert(`View details for product ID: ${productId}`);
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4 text-center">
                Popular Products ({products.slice(0, 6).length})
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-14">
                {products.slice(0, 6).map((product, index) => (
                    <div
                        key={index}
                        data-aos="fade-up"
                        className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
                    >
                        <img
                            src={product.image}
                            alt={product.itemName}
                            className="w-full h-40 object-cover rounded-t-lg mb-4"
                        />
                        <h2 className="text-lg font-semibold mb-2">{product.itemName}</h2>
                        <p className="text-gray-600">Processing Time: {product.processingTime}</p>
                        <p className="text-gray-600">Category: {product.categoryName}</p>
                        <p className="text-blue-500 font-bold mt-2">Price: ${product.price}</p>
                        <p className={`mt-2 ${product.stockStatus === 'In Stock' ? 'text-green-500' : 'text-red-500'}`}>
                            Stock Status: {product.stockStatus}
                        </p>
                        <p className="text-yellow-500 font-bold mt-2">Rating: {product.rating}★</p>
                        <button
                            onClick={() => handleViewDetails(product.id)}
                            className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                        >
                            View Details
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OurProduct;
