import React, { useState,useEffect } from 'react'
import Navbar from './Navbar';


const Shopnow = () => {

    const [data, setData] = useState([]);
  const [value, setValue] = useState("3000");
    const [filterOpen, setFilterOpen] = useState(false);
   // Price range filter value

   
     const [discount,setDiscount]=useState(""); 
    // Fetch data from the server
    const fetchData = async () => {
      try {
        let response = await fetch("https://newstorebackend.vercel.app/products/all");
  
        if (response.ok) {
          const data = await response.json();
          setData(data.message.product);
          setDiscount(Math.floor(Math.random() * 8)) // Save the products in the state
        } else {
          console.log("Error: Unable to fetch data", response.status);
        }
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    const FilterToggle = () => {
        setFilterOpen(!filterOpen);
      };
  
    const handlePriceChange = (event) => {
        setValue(event.target.value);
      };
    const AddtoCardhandle =async(item,)=>{
  
      const productId = await  item 
  
      console.log(productId,"pro")
  
      try {
          let response = await fetch('https://newstorebackend.vercel.app/cart/add/'+productId, {credentials:"include"})
              
          if(response.ok){
              alert("add to cart succesfullt")
          }
          else{
              throw new Error(error);
              
          }
         
  
        } catch (error) {
          console.error('Error during login:', error.message);
        }
  }
  
    useEffect(() => {
      fetchData(); // Fetch data when component mounts
    }, []);





  return (
    <div style={{display:"flex",flexDirection:"column"
        ,gap:"1vw"
      }}>
        <Navbar />
  
          <div className='findCollecyion_id'><p>Home<i className="fa-solid fa-chevron-right"></i></p>product</div>
  
     
          <div className='all-offer'  > 
        <p>Allproduct</p>  <p>headphone</p><p>Wireless Bluetooth Earbuds</p><p>SmartWatch</p> <p>speaker</p><p>gaming earbuds</p><p>gaming earbuds</p> <p>power bank</p></div>
     
  
  
        <div className='filter-button-div'>
        <button className='filter-button' onClick={FilterToggle}>
          <i className="fa-solid fa-sliders"></i> Filter by <i className="fa-solid fa-chevron-down"></i>
        </button>
        {filterOpen && (
          <button className='filter-button' style={{ width: "20vw" }}>
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
        )}
      </div>
  
      <div className='findcollection-section'>
  
        {
            
        
          data
          .filter(item=> item.productPrice <= value)
          
          
          
          
          .map((item, index) => (
              <div key={index} className='findCollection-card'>
                <div className='card-img'>
                <img
                  src={"https://newstorebackend.vercel.app/images/" + item.productImg[0]}
                  alt=""
                />
                <h5>{item.productKeySpecfication}</h5>
                </div>
                <div className='card-detail'>
                  <h5 >{item.productRating}<i className="fa-solid fa-star"></i> | <p>{discount*100}<i className="fa-solid fa-comment"></i></p></h5>
                <h1>{item.productName}</h1>
                <h1>
              ₹{item.productPrice}
              <p>MRP:   <del> {item.productPrice * discount}</del> </p>
  
            <h6 style={{color:"green"}}>  {Math.round((item.productPrice - (item.productPrice * (discount / 100))) / item.productPrice * 100)}% off
            </h6>
              </h1>
                <button onClick={()=>AddtoCardhandle(item._id)}>Add to cart</button>
                </div>
              </div>
            ))
        }
  
        {
          
        }
        </div>
  
        <div className='findcollection-section'>
  
        {
          // Filter products by category (assuming 'productCategory' is the field you're comparing)
          data
            .map((item, index) => (
              <div key={index} className='findCollection-card'>
                <div className='card-img'>
                <img
                  src={"https://newstorebackend.vercel.app/images/" + item.productImg[0]}
                  alt=""
                />
                <h5>{item.productKeySpecfication}</h5>
                </div>
                <div className='card-detail'>
                  <h5 >{item.productRating}<i className="fa-solid fa-star"></i> | <p>{discount*100}<i className="fa-solid fa-comment"></i></p></h5>
                <h1>{item.productName}</h1>
                <h1>
              ₹{item.productPrice}
              <p>MRP:   <del> {item.productPrice * discount}</del> </p>
  
            <h6 style={{color:"green"}}>  {Math.round((item.productPrice - (item.productPrice * (discount / 100))) / item.productPrice * 100)}% off
            </h6>
              </h1>
                <button onClick={()=>AddtoCardhandle(item._id)}>Add to cart</button>
                </div>
              </div>
            ))
        }
  
        {
          
        }
        </div>
      </div>
  )
}

export default Shopnow
