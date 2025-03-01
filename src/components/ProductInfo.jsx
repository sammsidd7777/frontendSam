import React, { useEffect, useState } from 'react'

import { Link, useParams } from 'react-router-dom';
import Navbar from './Navbar';

const ProductInfo = () => {

    const [productName, setProductname] = useState('') // Initialize with empty string instead of array
    const [productCategory, setProductCategory] = useState('')
    const [productDescription, setProductDescription] = useState("")
    const [productPrice, setProductPrice] = useState('') // Initialize with empty string instead of array
    const [productRating, setProductRating] = useState('') // Initialize with empty string instead of array
    const [productDescriptionImg, setProductDescriptionImg] = useState([]) // Initialize with empty string instead of array
    const [productImg, setProductImg] = useState('')
    const [imgposition, setimgpositon] = useState('')
    const [discount, setDiscount] = useState("")
    const [similar,setSimilar]=useState([])
    const params = useParams();

    const fetchData = async () => {
        const id = params.id;
        try {

            const response = await fetch(`https://newstorebackend.vercel.app/products/detail/${id}`)

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            let data = await response.json();
            console.log(data)

          

            setProductname(data.message.product_detail.productName)
            setProductCategory(data.message.product_detail.productCategory)
            setProductDescription(data.message.product_detail.productDescription)
            setProductPrice(data.message.product_detail.productPrice + 1)
            setProductRating(data.message.product_detail.productRating)
            setProductDescriptionImg(data.message.product_detail.productDescriptionImg
            )
            setProductImg(data.message.product_detail.productImg)


            setSimilar(data.message.similar)

        } catch (error) {
            console.log('Error fetching product data:', error.message);
        }


      


        setDiscount(Math.floor(Math.random() * 8))

    }

   
    const AddtoCardhandle =async()=>{

        const productId = params.id

        console.log(productId)

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

    const chnageimg = (item) => {

        setimgpositon(item)

    }



    useEffect(() => {
        fetchData();
    }, [Link]);

    return (
        <div className="product-detail-page">
            <Navbar />

            <div className="product-detail-page__img-info">
                <div className="product-detail-page__image-collection">
                    <div className="product-detail-page__image-options">
                        <img src={"https://newstorebackend.vercel.app/images/" + productImg[1]} onClick={() => chnageimg(1)} alt="" />
                        <img src={"https://newstorebackend.vercel.app/images/" + productImg[2]} onClick={() => chnageimg(2)} alt="" />
                        <img src={"https://newstorebackend.vercel.app/images/" + productImg[3]} onClick={() => chnageimg(3)} alt="" />
                        <img src={"https://newstorebackend.vercel.app/images/" + productImg[0]} onClick={() => chnageimg(0)} alt="" />

                    </div>
                    <div className="product-detail-page__main-image">
                        <img
                            src={`https://newstorebackend.vercel.app/images/${productImg[imgposition] || productImg[0]}`}
                            alt="Product"
                        />

                    </div>
                </div>
                <div className="product-detail-page__info">
                    <p style={{ display: "flex", gap: "2vw" }}> <p><i className="fa-solid fa-star"></i>{productRating}</p> <p>Earn upto {discount * 33} boat reward point on this product</p></p>
                    <h1>{productName}</h1>
                    <h3>{productDescription}</h3>
                    <p>
                        <h1>₹{productPrice - 1}</h1>
                        <p>MRP:  ₹ <del> {productPrice * discount}</del> </p>
                        <p>  {(productPrice * discount - productPrice) / (productPrice * discount / 100)}% off</p>

                    </p>

                    <div className='Active-offers'>
                        <h2>Active offers</h2>

                        <div className='Active-offer-section'>
                            <div className='Active-offer-card'>
                                <p>More than 2 item</p>

                                <h4>Get 5% off</h4>

                                <h3>₹ {(productPrice / 100 * 95) * 2-1}</h3>

                                <div>MOST popular</div>

                            </div>

                            <div className='Active-offer-card'>
                                <p>More than 5 item</p>

                                <h4>Get 7% off</h4>

                                <h3>₹ {(Math.floor(productPrice / 100 * 97) * 5-1)}</h3>

                                <div>MOST Value</div>

                            </div>


                            <div className='Active-offer-card'>
                                <p>More than 10 item</p>

                                <h4>Get 5% off</h4>

                                <h3>₹ {(productPrice / 100 * 90) * 10-1}</h3>

                                <div>MOST saving</div>

                            </div>




                        </div>




                    </div>
                    <div className='add-buy-button'>
                        <button onClick={AddtoCardhandle}>Add to cart</button>
                        <button> buy Now</button>

                    </div>
                </div>
            </div>

            <div className="product-detail-page__description">
                <img src={"https://newstorebackend.vercel.app/images/" + productDescriptionImg[0]} alt="" />
                <img src={"https://newstorebackend.vercel.app/images/" + productDescriptionImg[1]} alt="" />
            </div>






            <div className="similar-deal">
          {similar.map((item) => (
         
            <div key={item._id} className="similar-card-section">
              <Link to={"/productDetail/" + item._id}>
                <img
                  src={"https://newstorebackend.vercel.app/images/"+item.productImg[1]   }
                  alt="" style={{ marginTop:"3vw"}}
                />
              </Link>
              <h2>{item.productName}<i className="fa-regular fa-circle-check" style={{color:"green ",fontSize:"0.8vw"}}></i></h2>
             
                            <h1>₹{item.productPrice} <del style={{color:"red",fontSize:"1vw"}}>{item.productPrice*discount}</del> </h1>
              <h4>
               {item.productRating}<i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
              </h4>
                <Link to={"/productDetail/" +item._id}  >  <button onClick={()=>updatepage()}>view product</button> </Link>
            </div>
          ))}
        </div>
        </div>

    )
}

export default ProductInfo;
