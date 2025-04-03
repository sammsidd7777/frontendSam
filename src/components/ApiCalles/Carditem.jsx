import React, { useEffect, useState, useCallback } from 'react';

const CardItem = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_PORT;
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true); // State to track loading status

  // Function to fetch cart items
  const getCartItems = useCallback(async () => {
    setLoading(true); // Set loading state to true when fetching
    try {
      const response = await fetch(`${backendUrl}/cart/all`, { credentials: 'include' });
      if (response.ok) {
        const data = await response.json();
        setCartItems(data.message.Cartdata);
        setTotalPrice(data.message.totalPrice);
        setError(''); 
      } else {
        setError('Failed to fetch cart items. Please try again.');
      }
    } catch (error) {
      setError('Error fetching cart items');
  
    } finally {
      setLoading(false); 
    }
  }, [backendUrl]);

  useEffect(() => {
    getCartItems();
  }, [getCartItems]); 

  const deleteItemFromCart = async (id) => {
    setLoading(true); 
    try {
     
    } catch (error) {
      setError('Error deleting item');
      console.error('Error deleting item:', error);
    } finally {
      setLoading(false); // Set loading state to false when done
    }
  };

 
  const updateQuantity = async (id, newQuantity) => {
 
    setLoading(true); 
    try {
    
     
    
   
    } catch (error) {
      setError('Error updating quantity');
      console.error('Error updating quantity:', error);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="cart-container">
  
      {error && <div className="error-message">{error}</div>}

      {/* Show loading state while fetching data */}
      {loading ? (
        <div className="loading">Loading cart items...</div>
      ) : (
        <div className="cart-item-list">
          {cartItems.length === 0 ? (
            <div className="empty-cart">Your cart is empty!</div>
          ) : (
            cartItems.map((item) => (
              <div key={item._id} className="cart-item">
                <img
                  src={`${backendUrl}/images/${item.productImg}`}
                  alt={item.productTitle}
                  onError={(e) => (e.target.src = '/path/to/default-image.jpg')} 
                />
                <div className="cart-item-details">
                  <h4>{item.productTitle}</h4>
                  <h5>
                    ₹{item.productPrice} <del>{item.productPrice * 3}</del>
                  </h5>
                </div>
                <div className="cart-item-actions">
                  <i
                    className="fa-solid fa-trash-can"
                    // onClick={() => deleteItemFromCart(item._id)}
                  ></i>
                  <div className="quantity-controls">
                    <i
                      className="fa-solid fa-minus"
                    //   onClick={() => updateQuantity(item._id, item.quantity - 1)}
                    ></i>
                    {item.quantity}
                    <i
                      className="fa-solid fa-plus"
                    //   onClick={() => updateQuantity(item._id, item.quantity + 1)}
                    ></i>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Show total price and payment section */}
      {!loading && cartItems.length > 0 && (
        <div className="cart-price">
          <h2>₹{totalPrice}</h2>
          <p>Inclusive of all taxes</p>
          <button>Pay Now</button>
        </div>
      )}
    </div>
  );
};

export default CardItem;
