import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';
import FindCollection from './FindCollection';
import Navbar from './Navbar';
import Slider from './Slider';
import SeachBaroption from './SeachBaroption';
import Footer from './Footer';


const Home = () => {

    const [data, setData] = useState([]);
    const [category, setCategory] = useState([]);
    const [discount,setDiscount]=useState("");
    const [selectedCategory, setSelectedCategory] = useState('headphone');
    let sam = [];
   
  const fetchData = async () => {
    try {
      let response = await fetch("http://localhost:5200/products/all");
    
      // Check if the response is OK (status code 200-299)
      if (response.ok) {
        const data = await response.json(); // Parse the JSON data from the response
        setData(data.message.product)
        setCategory(data.message.Categories)
      } else {
        console.log("Error: Unable to fetch data", response.status);
      }
    } catch (error) {
      console.log('Error fetching data:', error); 
    }
    
    
    setDiscount(Math.floor(Math.random() * 8))
  };
  

  const findbyCategory = (event) => {
    const category = event.target.textContent;
    
    setSelectedCategory(category);
  };


 


  const num1 = Math.floor(Math.random() * (data.length - 5 + 1)) + 5;
 

  useEffect(() => {
    fetchData(); // Call the fetchData function when the component mounts
  }, []);


  return (
    <div>
      <Navbar />
      <Slider />
 
      <div className='live-sell-section'>
        <h1>sale is <h1> live now asdasdasdas</h1></h1>


       <div className='card-section'>
       {
  data.map((item, index) => {
    if (index > num1 && index <= num1+5) {
     
      return (
        <div key={index}>
          <Link to={"/productDetail/" + item._id}>
            <div>
              <img
                src={"http://localhost:5200/images/" + item.productImg[0]}
                alt=""
              />
              <h5>{item.productOffer}</h5>
            </div>
          </Link>
          <h6>{item.productKeySpecfication}
          <p><i className="fa-solid fa-star"></i>{item.productRating}</p></h6>
          <h2>{item.productName}</h2>
          <h1>
            ₹{item.productPrice}{" "}
            <p>
              <del style={{ fontSize: "0.8vw", color: "red" }}>
                ₹{item.productPrice * discount}
              </del>
            </p>
          </h1>
        </div>
      );
    } else {
      return null; // This ensures nothing gets rendered if the index is less than 5
    }
  })
}

      </div>
  
      <h1>Big  <h1> Deal</h1></h1>
      <div className='bigdeal'>
        
      </div>




        <div className='all-offer' onClick={findbyCategory}> 
          <p>headphone</p><p>Wireless Bluetooth Earbuds</p><p>SmartWatch</p> <p>speaker</p><p>gaming earbuds</p><p>gaming earbuds</p> <p>power bank</p></div>
     
    
     
     
      <div className='card-section'>
       {
  data.map((item, index) => {
   
  
    
    if (item.productCategory  == selectedCategory  ) {
     
      return (
        <div key={index}>
          <Link to={"/productDetail/" + item._id}>
            <div>
              <img
                src={"http://localhost:5200/images/" + item.productImg[0]}
                alt=""
              />
              <h5>{item.productOffer}</h5>
            </div>
          </Link>
          <h6>{item.productKeySpecfication}
          <p><i className="fa-solid fa-star"></i>{item.productRating}</p></h6>
          <h2>{item.productName}</h2>
          <h1 style={{ display: "flex", justifyContent: "space-between" }}>
            ₹{item.productPrice}{" "}
            <p>
              <del style={{ fontSize: "0.8vw", color: "red" }}>
                ₹{item.productPrice * discount.toFixed(2)}
              </del>
            </p>
          </h1>
        </div>
      );
    } else {
      return null; // This ensures nothing gets rendered if the index is less than 5
    }
  })
}

      </div>

      <h1>Shop By  <h1> Categories</h1></h1>

      <div className='sel-by-category'>
    

    <SeachBaroption  brand="2"/>
 



      </div>



      <h1>Shop by  <h1> lifestyle  </h1></h1>

 <div className='shop-by-lifestyle'>

  <div className='shop-by-lifestyle-cards'>
  <div className='shop-by-lifestyle-cards-imgback'>
  <img src="./image/pho1.webp" alt=""/>
  </div>
    <div className='lifestyle-card-detail'>
      <h2>For fitness</h2>
      <p>View all <i className="fa-regular fa-circle-right"></i></p>
    </div>



  </div>
  
  <div className='shop-by-lifestyle-cards'>
  <div className='shop-by-lifestyle-cards-imgback'>
  <img src="./image/IMG20230329101716-Photoroom.png" alt=""/>
  </div>

    <div className='lifestyle-card-detail'>
      <h2>For fitness</h2>
      <p>View all <i className="fa-regular fa-circle-right"></i></p>
    </div>



  </div>

  <div className='shop-by-lifestyle-cards'>
  <div className='shop-by-lifestyle-cards-imgback'>
  <img src="./image/sam sam.png" alt=""/>
  </div>


    <div className='lifestyle-card-detail'>
      <h2>For fitness</h2>
      <p>View all <i className="fa-regular fa-circle-right"></i></p>
    </div>



  </div>

  <div className='shop-by-lifestyle-cards'>
    <div className='shop-by-lifestyle-cards-imgback'>
  <img src="./image/IMG_20240206_154711_825-Photoroom.png" alt=""/>
  </div>
    <div className='lifestyle-card-detail'>
      <h2>For fitness</h2>
      <p>View all <i className="fa-regular fa-circle-right"></i></p>

    </div>



  </div>
  
  
  
  </div>      

      </div>
   
   
   <Footer />
    </div>

  )
}

export default Home
