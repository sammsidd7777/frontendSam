import React, { useState } from 'react'

const SingupForm = ({switchToLogin}) => {
    const backendUrl = import.meta.env.VITE_BACKEND_PORT;

      const [errorMessage, setErrorMessage] = useState(''); 
    const [formData, setFormData] = useState({   
        name: '',    email: '',    phone: '',    password: '', 
        });
   
    
   
   
     // Signup handler
     const handleSignup = async (event) => {
       event.preventDefault();
       const { name, email, phone, password } = formData;
       const userData = { name, email, phone, password };
   
       try {
         let response = await fetch(`${backendUrl}/user/signup`, {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify(userData),
         });
   
         if (!response.ok) {
           const error = await response.json();
           setErrorMessage(error.message); 
           alert('error in')// Display the error message
         } else {
           alert('Signup successful');
           switchToLogin();
         }
       } catch (error) {
         setErrorMessage('An error occurred during signup. Please try again.');
         console.error('Error during signup:', error);
       }
     };


  return (
    <div className="login-modal">
    <h1>Get Signup</h1>
    <p>Please enter your details to continue</p>
    <form onSubmit={handleSignup}>
      <input
        type="text"
        name="name"
        id='name'
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="Enter Name"
      />
      <input
        type="email"
        name="email"
        id='email'
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        placeholder="Enter Email"
      />
      <input
        type="tel"
        id='phone'
        name="phone"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        placeholder="Enter Phone"
      />
      <input
        type="password"
        name="password"
        id='password'
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
  )
}

export default SingupForm
