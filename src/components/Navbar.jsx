import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SeachBaroption from './SeachBaroption';

const Navbar = () => {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMoreopen, setIsMoreopen] = useState(false);
  const [modalType, setModalType] = useState('');
  const [username, setUsername] = useState('');
  const [openprofile, setOpenprofile] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isAutocatAlertVisible, setIsAutocatAlertVisible] = useState(false);
  const [IsCartOpen,setIsCartOpen]= useState(false)
  const [CartItem,setCartItem]=useState([])
  const [totalprice,setTotalpprice]=useState("")
  const[openSeachbarOption,setopenSeachbarOption]=useState(false)
  const [showCategory,setShowCategory]=useState(false)

  

  const [formData, setFormData] = useState({    name: '',    email: '',    phone: '',    password: '',  });

  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });



  // Signup handler
  const handleSignup = async (event) => {
    event.preventDefault();
    const { name, email, phone, password } = formData;
    const userData = { name, email, phone, password };

    try {
      let response = await fetch('https://newstorebackend.vercel.app/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const error = await response.json();
        setErrorMessage(error.message); // Display the error message
      } else {
        alert('Signup successful');
        switchToLogin();
      }
    } catch (error) {
      setErrorMessage('An error occurred during signup. Please try again.');
      console.error('Error during signup:', error);
    }
  };

  // Login handler
  const handleLogin = async (event) => {
    event.preventDefault();
    const { email, password } = loginForm;
    const userData = { email, password };

    try {
      let response = await fetch('https://newstorebackend.vercel.app/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
        credentials: "include"
      });

      if (!response.ok) {
        const error = await response.json();
        setErrorMessage(error.message); // Show error message to user
      } else {
        alert('Login successful');



        {
          document.getElementsByClassName("singup-profile")[0].style.display = "none";
          document.getElementsByClassName("login-profile")[0].style.display = "block";

        }

        toggleModal();
      }
    } catch (error) {
      setErrorMessage('An error occurred during login. Please try again.');
      console.error('Error during login:', error);
    }
  };

  // Logout handler
  const handleLogout = async () => {


    try {
      let response = await fetch('https://newstorebackend.vercel.app/user/logout', { credentials: "include" })

      if (!response.ok) {
        throw new Error(error);

      }

      toggleModals()
      {
        document.getElementsByClassName("singup-profile")[0].style.display = "block";
        document.getElementsByClassName("login-profile")[0].style.display = "none";

      }

    } catch (error) {
      alert(error.message)
    }
  }

  // Toggle modal visibility

  const toggleModals = async () => {
    setOpenprofile(!openprofile);
    await checkUserLogin()
  };


  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Switch to signup modal
  const switchToSignup = () => {
    setModalType('signup');
  };

  // Switch to login modal
  const switchToLogin = () => {
    setModalType('login');
  };



  const ToggleshowCategory =()=>{
    setShowCategory(!showCategory)
  }

  // User login check
  const checkUserLogin = async () => {
    try {
      // Attempt to fetch user information
      let response = await fetch("https://newstorebackend.vercel.app/user/current", { credentials: "include" })

      if (response.ok) {
        // If successful, parse the response data
        const data = await response.json();

        setUsername(data.message.name);


        document.getElementsByClassName("singup-profile")[0].style.display = "none";
        document.getElementsByClassName("login-profile")[0].style.display = "block";




      } else {
        document.getElementsByClassName("singup-profile")[0].style.display = "block";
        document.getElementsByClassName("login-profile")[0].style.display = "none";
      }
    } catch (error) {
      console.log(error.message); // Logs the error message
    }
  };

  const toggleAlertTemporarily = () => {
    setIsAutocatAlertVisible(!isAutocatAlertVisible);
  
    setTimeout(() => {
      setIsAutocatAlertVisible(false);
    }, 2000);
  };

  const ToggleCartOpen=()=>{

    setIsCartOpen(!IsCartOpen)
    getCartitem()


  }

  const tongleSeachbarOprtion=()=>{
    setopenSeachbarOption(!openSeachbarOption)
  }

  const toggleMore=()=>{
    setIsMoreopen(!isMoreopen)
    
  
  }


  const deleteItemformCard=async(item)=>{
   try {
    const id = item
    let respone = await fetch("https://newstorebackend.vercel.app/cart/Deletecartitem/"+id,{credentials:"include"})
    if(respone.ok){
      const data = await respone.json()
      console.log(data)
      
    }else{
      alert("product remove")
    }
   } catch (error) {
    
   }
   }

  async function getCartitem() {
        try {
          let respone = await fetch("https://newstorebackend.vercel.app/cart/all",{credentials:"include"})
          if(!respone.ok){
            throw new Error(error);
            
          }
          else{
           const data = await respone.json()
           console.log(data)
           setCartItem(data.message.Cartdata)
           setTotalpprice(data.message.totalPrice)
          }
          
        } catch (error) {
          
        }   
  }

  const UpdateQuantity = async(item,quantitys) => {

    console.log(item,quantitys)


    const cartItemId = item;
    const quantity = quantitys;

    let respone = await fetch("https://newstorebackend.vercel.app/cart/updateQuntity/"+cartItemId+"/"+quantity
    ,{credentials:"include"})

    if(!respone.ok){
      
      alert("cart item not updated")
      
    }


    getCartitem()
   
  };
  


  useEffect(() => { 
    checkUserLogin()
  }, [])

  return (
    <>
      <div className="Navbar">
        <div className="navbar-top">
          <p>Get 5% off on first order | Code</p>
          <p>
            WELCOME | <Link to={"/findCollection"}>Shop Now!</Link>
          </p>
        </div>
        <header>
          <img
            className="h-11"
            src="https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_small_3067da8c-a83b-46dd-b28b-6ef1e16ccd17_1.svg?v=1732879309"
            alt="boAt logo"
          />
          <div style={{ width: '5vw' }}></div>
          <p onClick={ToggleshowCategory}>Categories</p>
          <p>Boat Personalization</p>
          <p>Corporate Order</p>
          <p onMouseEnter={toggleMore} onMouseLeave={toggleMore}>More </p>
          <div style={{ width: '15vw' }}></div>
          <div>
            <input type="search" placeholder="Search" onClick={tongleSeachbarOprtion} />
          </div>
          <div>
            <p className='login-profile'> <i className="fa-solid fa-user" onClick={toggleModals} ></i><i className="fa-solid fa-cart-plus" onClick={ToggleCartOpen}></i></p>
            <p className='singup-profile'>   <i className="fa-regular fa-user" onClick={toggleModal}></i> <i className="fa-solid fa-bag-shopping" onClick={toggleAlertTemporarily}></i></p>
          
          </div>
        </header>
      </div>




{
  isMoreopen &&(
    <div className='isMoreOpen'> 
      <p>Daily deals</p>
      <p>Blogs</p>
      <p>Refee & Earn</p>
      <p>Careers</p>
      <p>Social responsbility</p>
      <p>Store locator</p>
      <p>Boat community</p>

    </div>
  )
}



{IsCartOpen &&( 
  <div className='cart-popup-section'>
    <div className='cart-popup-header'>
 <header>Yourcart <i className="fa-regular fa-circle-xmark" onClick={ToggleCartOpen}></i></header>
  <h5>Get upto boat reward point on this order</h5></div>


<div id='sam'>

   <div className='show-cart-item'>
    {
      CartItem.map((item,index)=>{
        return(
          <div key={index} className='show-cart-card'>
            <img
                            src={"https://newstorebackend.vercel.app/images/"+item.productImg}
                            alt=""
                        />
            <div className='show-cart-card-detail'><h4>{item.productTitle}</h4>
            <h5>  ₹{item.productPrice}  <del>{item.productPrice*3}</del></h5>
            
            </div>
            <div className='show-card-min-max-button'>
            <i className="fa-solid fa-trash-can" onClick={()=>deleteItemformCard(item._id)}></i>



         <div>
  <i className="fa-solid fa-minus" onClick={() => UpdateQuantity(item._id,item.quantity-1)}></i>
  {item.quantity}
  <i className="fa-solid fa-plus" onClick={() => UpdateQuantity(item._id, item.quantity + 1)}></i>
</div>






            </div>




          </div>



        )
      })

    }
   </div> 

   </div>

   

   <div className='show-cart-card-price'>

    <div><h2> ₹{totalprice}</h2><p>Inclusive of all tax</p></div>

    <button>Pay Now</button>
   </div>

   
   
   
   
   
   
   
   
  

 






  </div>
)

}


{showCategory &&(
  <div className='showCategory'>

    <SeachBaroption />




  </div>
)}


      {isAutocatAlertVisible && (
        <div className="login-wrapper" style={{textAlign:"center"}}>
          <h2>Hi, User  </h2>
          <h5>Please login your account</h5>
          
        </div>
      )}


      {openSeachbarOption && (
         
         <div className='seach-bar-options'>
            <SeachBaroption /></div>


        

        )
      }
 
      {openprofile && (
        <div className="login-wrapper">
          <h2>Hi,  {username}  <i className="fa-solid fa-xmark" onClick={toggleModals}></i> </h2>
          <p>manege order</p>
          <p>Account</p>
          
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}

      {isModalOpen && (
        <div className="login-wrapper">
          <h2>
            Hi boatHead
            <i className="fa-solid fa-xmark" onClick={toggleModal}></i>
          </h2>
          <button onClick={switchToLogin}>Login</button>
          <button onClick={switchToSignup}>Signup</button>
        </div>
      )}

      {/* Login Modal */}
      {isModalOpen && modalType === 'login' && (
        <div className="login-modal">
          <h1>Get started</h1>
          <p>Please enter your Email and password to continue</p>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              name="email"
              value={loginForm.email}
              onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
              placeholder="Enter Email"
            />
            <input
              type="password"
              name="password"
              value={loginForm.password}
              onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
              placeholder="Enter Password"
            />
            <button type="submit">Login</button>
          </form>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <h6 style={{ textAlign: 'end' }}>
            By confirming, you agree to boAt's Terms and Conditions and Privacy Policy.
          </h6>
        </div>
      )}

      {/* Signup Modal */}
      {isModalOpen && modalType === 'signup' && (
        <div className="login-modal">
          <h1>Get Signup</h1>
          <p>Please enter your details to continue</p>
          <form onSubmit={handleSignup}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter Name"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Enter Email"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="Enter Phone"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              placeholder="Enter Password"
            />
            <button type="submit">Signup</button>
          </form>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <h6 style={{ display: 'flex', alignItems: 'center' }}>
            By confirming, you agree to boAt's Terms and Conditions and Privacy Policy.
          </h6>
        </div>
      )}
    </>
  );
};

export default Navbar;
