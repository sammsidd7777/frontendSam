import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SeachBaroption from '../ApiCalles/SeachBaroption';
import LoginForm from '../../forms/LoginForm';
import SingupForm from '../../forms/SingupForm';
import { useSelector } from 'react-redux';
import { cCount } from '../../redux/feature/cart/cartSlice';
import { HandleLogout } from '../functionhelper/HelperFunctions';

import { ShoppingBag, User2, XCircleIcon } from 'lucide-react';
import Carditem from '../ApiCalles/Carditem';

const Navbar = () => {
  const navigate = useNavigate();
  const backendUrl = import.meta.env.VITE_BACKEND_PORT;
  const cartCounts = useSelector(cCount);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const [username, setUsername] = useState('');
  const [userlogin, setUserlogin] = useState(false);
  const [isAutocatAlertVisible, setIsAutocatAlertVisible] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [openSearchbarOption, setOpenSearchbarOption] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  // // const [isSingup, setisSingup] = useState(false);
  // // const [islogIn, setislogIn] = useState(true);
  // // const [login,setLogin]=useState(false)
  // const [sam,setsam]=useState(true)
  const [logindata,setlogindata]=useState(false)
  const [singdata,setsingdata]=useState(false)




  // Check user login status
  const checkUserLogin = async () => {
    try {
      let response = await fetch(`${backendUrl}/user/h`, { credentials: "include" });

      if (!response.ok) {
        throw new Error(error);
       
      }

      response = await response.json();
      setUsername(response.message.userName);
      setlogindata(!logindata);
      console.log("setlogin true") 
    } catch (error) {
    
      console.log("set sing up true")
      setsingdata(!singdata);
  
      
    }
  };

  // Handle login check
  const loginuserCheck = async () => {
     checkUserLogin();  // Assuming this function returns a boolean
  
    console.log("isLoggedIn")
    // if (isLoggedIn) {
    //   setlogindata(true);
    //   setsingdata(false);
    // } else {
    //   setlogindata(false);
    //   setsingdata(true);
    // }
  };
  

  

  const logouthandle = async () => {
    try {
      let response = await fetch(`${backendUrl}/user/logout`, { credentials: "include" });
  
 
      if (!response.ok) {
        throw new Error('Logout failed, try again!');
      }
  
   
      const result = await response.json();
  
  
      closeModal();
  
  
      
   
  
    } catch (error) {
      // Log the error if any occurs
      console.error("Error during logout:", error.message);
    }
  };
  

  // Modal toggle functions for signup and login
  const singupformToggle = () => {
    setIsModalOpen(true);
    setModalType('singup');
  };

  const switchToLogin = () => {
    setIsModalOpen(true);
    setModalType('login');
  };

  const loginformToggle = () => {
    setIsModalOpen(true);
    setModalType('login');
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setlogindata(false);
    setsingdata(false);

  };

  const togglecloseform = () => {
    closeModal()

  }

  // Toggle cart visibility
  const toggleCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };


  // Logout functionality
;

  return (
    <>
      <div className="Navbar">
        <div className="navbar-top">
          <p>Get 5% off on first order | Code</p>
          <p>WELCOME | <Link to={"/findCollection"}>Shop Now!</Link></p>
        </div>
        <header>
          <Link to={"/"}>
            <img
              className="h-11"
              src="https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_small_3067da8c-a83b-46dd-b28b-6ef1e16ccd17_1.svg?v=1732879309"
              alt="boAt logo"
            /></Link>
          <p onClick={() => setShowCategory(!showCategory)}>Categories</p>
          <p>Boat Personalization</p>
          <p>Corporate Order</p>
          <p onMouseEnter={() => setIsMoreOpen(true)} onMouseLeave={() => setIsMoreOpen(false)}>More</p>
          <div>
            <input type="search" placeholder="Search" onClick={() => setOpenSearchbarOption(!openSearchbarOption)} style={{ color: "red" }} />
          </div>

          <div style={{ display: "flex", gap: "2vw" }}>
            <User2 onClick={loginuserCheck} />
            <ShoppingBag onClick={toggleCartOpen} />
          </div>
        </header>

        {
          logindata && (
            <div className="logigdata">
            <h2>Hi, {username} <XCircleIcon onClick={closeModal} /></h2>
            <p><Link to="/profile">Account</Link></p>
            <p><Link to="/profile">manage </Link></p>
            <button onClick={logouthandle}>Logout</button>
          </div>
          )
        }
        
        
      {singdata && (
        <div className="logigdata">
          <button onClick={loginformToggle}>Login</button>
          <button onClick={singupformToggle}>Sign-up</button>
        </div>
      )}
      </div>

      {/* User login state display */}
     
       
   



{isModalOpen && modalType === 'login' && <LoginForm logine={togglecloseform} />}
{isModalOpen && modalType === 'singup' && <SingupForm switchToLogin={switchToLogin} />}



      {/* "More" dropdown */}
      {isMoreOpen && (
        <div className="isMoreOpen">
          <p>Daily deals</p>
          <p>Blogs</p>
          <p>Refee & Earn</p>
          <p>Careers</p>
          <p>Social responsibility</p>
          <p>Store locator</p>
          <p>Boat community</p>
        </div>
      )}

      {/* Cart popup */}
      {isCartOpen && (
        <div className="cart-popup-section">
          <header>Your cart <i className="fa-regular fa-circle-xmark" onClick={toggleCartOpen}></i></header>
          <h5>Get up to boat reward points on this order</h5>
          <Carditem />
        </div>
      )}

      {/* Search bar options */}
      {showCategory && <SeachBaroption />}

      {/* Autocat alert */}
      {isAutocatAlertVisible && (
        <div className="login-wrapper" style={{ textAlign: "center" }}>
          <h2>Hi, User</h2>
          <h5>Please log in to your account</h5>
        </div>
      )}

      {/* Search bar options dropdown */}
      {openSearchbarOption && (
        <div className="seach-bar-options">
          <SeachBaroption />
        </div>
      )}

   
    </>
  );
};

export default Navbar;
