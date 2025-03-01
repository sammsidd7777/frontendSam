import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';

const FindCollection = () => {
  const [data, setData] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [value, setValue] = useState(3000); // Price range state
  const [filterOpen, setFilterOpen] = useState(false);
  const { id } = useParams(); // Get the category ID from URL params

  // Fetch product data
  const fetchData = async () => {
    try {
      let response = await fetch("https://newstorebackend.vercel.app/products/all");
      if (response.ok) {
        const result = await response.json();
        setData(result.message.product);
        setDiscount(Math.floor(Math.random() * 8) / 100); // Random discount between 0% to 7%
      } else {
        console.log("Error: Unable to fetch data", response.status);
      }
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  // Price range change handler
  const handlePriceChange = (event) => {
    setValue(event.target.value);
  };

  // Toggle filter visibility
  const FilterToggle = () => {
    setFilterOpen(!filterOpen);
  };

  // Handle Add to Cart functionality
  const AddtoCardhandle = async (productId) => {
    console.log("Product ID:", productId);

    try {
      let response = await fetch(`https://newstorebackend.vercel.app/cart/add/${productId}`, { credentials: "include" });

      if (response.ok) {
        alert("Added to cart successfully");
      } else {
        throw new Error("Failed to add to cart");
      }
    } catch (error) {
      console.error('Error during adding to cart:', error.message);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data when component mounts
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1vw" }}>
      <Navbar />

      <div className='findCollecyion_id'>
        <p>Home <i className="fa-solid fa-chevron-right"></i></p>{id}
      </div>

      <h1 style={{ margin: "0vw 0vw 0vw 1vw" }}>{id}</h1>

      {/* Filter Button */}
      <div className='filter-button-div'>
        <button className='filter-button' onClick={FilterToggle}>
          <i className="fa-solid fa-sliders"></i> Filter by <i className="fa-solid fa-chevron-down"></i>
        </button>
        {filterOpen && (
          <div className='filter-menu'>
            <button className='filter-button'>
              <label>Price</label>
              <input
                type="range"
                min="0"
                max="20000"
                value={value}
                onChange={handlePriceChange}
              />
              <h2>${value}</h2>
            </button>
          </div>
        )}
      </div>

      {/* Product Section */}
      <div className='findcollection-section'>
        {data
          .filter(item => item.productCategory == id ) // Filter by category and price
          .map((item, index) => (
            <div key={item._id || index} className='findCollection-card'>
              <div className='card-img'>
                <img
                  src={"https://newstorebackend.vercel.app/images/" + item.productImg[0]}
                  alt={item.productName}
                />
                <h5>{item.productKeySpecfication}</h5>
              </div>
              <div className='card-detail'>
                <h5>
                  {item.productRating}
                  <i className="fa-solid fa-star"></i> |{" "}
                  <p>{(discount * 100).toFixed(0)}% off</p>
                </h5>
                <h1>{item.productName}</h1>
                <h1>
                  ₹{item.productPrice}
                  <p>MRP: <del>{(item.productPrice * (1 - discount)).toFixed(2)}</del></p>
                  <h6 style={{ color: "green" }}>
                    {Math.round(((item.productPrice * (1 - discount)) / item.productPrice) * 100)}% off
                  </h6>
                </h1>
                <button onClick={() => AddtoCardhandle(item._id)}>Add to cart</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FindCollection;
