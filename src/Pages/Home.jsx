import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FindCollection from './FindCollection';
import SeachBaroption from '../components/ApiCalles/SeachBaroption';
import Navbar from '../components/smallComponents/Navbar';
import Footer from '../components/smallComponents/Footer';
import Slider from '../components/smallComponents/Slider';

const Home = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_PORT;

  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [discount, setDiscount] = useState("");
  const [selectedCategory, setSelectedCategory] = useState('headphone');
  let sam = [];

  const fetchData = async () => {
    try {
      let response = await fetch(`${backendUrl}/products/all`);

      // Check if the response is OK (status code 200-299)
      if (response.ok) {
        const data = await response.json(); // Parse the JSON data from the response
        setData(data.message.product);
        setCategory(data.message.Categories);
      } else {
        console.log("Error: Unable to fetch data", response.status);
      }
    } catch (error) {
      console.log('Error fetching data:', error);
    }

    setDiscount(Math.floor(Math.random() * 8));
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
    <div style={{ display: "flex", flexDirection: "column", gap: "2vw" }}>
      <Navbar />
      <Slider />

      <div className='live-sell-section'>
        <h1>Live Offers</h1>
        <div className='card-section'>
          {
            data.map((item, index) => {
              if (index > num1 && index <= num1 + 5) {

                return (
                  <div key={index}>
                    <Link to={"/productDetail/" + item._id}>
                      <div>
                        <img
                          src={`${backendUrl}/images/` + item.productImg[0]}
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
                return null;
              }
            })
          }
        </div>

        <div className='all-offer' onClick={findbyCategory}>
          <p>headphone</p><p>Wireless Bluetooth Earbuds</p><p>SmartWatch</p> 
          <p>speaker</p><p>gaming earbuds</p><p>power bank</p>
        </div>

        <div className='card-section'>
          {
            data.map((item, index) => {
              if (item.productCategory == selectedCategory) {
                return (
                  <div key={index}>
                    <Link to={"/productDetail/" + item._id}>
                      <div>
                        <img
                          src={`${backendUrl}/images/` + item.productImg[0]}
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
                return null;
              }
            })
          }
        </div>

        <h1>Exclusive Offers</h1>
        <div className='bigdeal'>
          <div className='card-section' >
            {
              data.map((item, index) => {
                if (index > num1 && index <= num1 + 5) {
                  return (
                    <div key={index}>
                      <Link to={"/productDetail/" + item._id}>
                        <div>
                          <img
                            src={`${backendUrl}/images/` + item.productImg[0]}
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
                  return null;
                }
              })
            }
          </div>
        </div>

        <h1 style={{marginTop:"10vw"}}>Shop By Categories</h1>
        <div className='sel-by-category'>
          <SeachBaroption />
        </div>

        <h1>Shop by <span style={{ color: 'purple' }}>Lifestyle</span></h1>

        <div className='shop-by-lifestyle'>
          <div className='shop-by-lifestyle-cards'>
            <div className='shop-by-lifestyle-cards-imgback'>
              <img src="./image/pho1.webp" alt="" />
            </div>
            <div className='lifestyle-card-detail'>
              <h2>For fitness</h2>
              <p>View all <i className="fa-regular fa-circle-right"></i></p>
            </div>
          </div>

          <div className='shop-by-lifestyle-cards'>
            <div className='shop-by-lifestyle-cards-imgback'>
              <img src="./image/IMG20230329101716-Photoroom.png" alt="" />
            </div>
            <div className='lifestyle-card-detail'>
              <h2>For fitness</h2>
              <p>View all <i className="fa-regular fa-circle-right"></i></p>
            </div>
          </div>

          <div className='shop-by-lifestyle-cards'>
            <div className='shop-by-lifestyle-cards-imgback'>
              <img src="./image/sam sam.png" alt="" />
            </div>
            <div className='lifestyle-card-detail'>
              <h2>For fitness</h2>
              <p>View all <i className="fa-regular fa-circle-right"></i></p>
            </div>
          </div>

          <div className='shop-by-lifestyle-cards'>
            <div className='shop-by-lifestyle-cards-imgback'>
              <img src="./image/IMG_20240206_154711_825-Photoroom.png" alt="" />
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
  );
};

export default Home;
