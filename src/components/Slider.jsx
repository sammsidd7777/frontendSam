import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const Slider = () => {

  const [data, setData] = useState([])
  const [count, setCount] = useState(0)

  const fatchdata = async () => {

    try {


      let response = await fetch("https://newstorebackend.vercel.app/admin/slider",)
      if (!response) {
        throw new Error(error);
      }

      const sam = await response.json()



      setData(sam.message[0].Sliderimage)


    } catch (error) {

      // console.log(error.message)
    }


  }



  const decrement = () => {
    if (count <= 0) {
      setCount(3); // Prevent count from going below 0
    } else if (data.length >= count) {
      setCount(count - 1); // Decrement count if the condition is met
    }
  }





  const increment = () => {
    if (data.length === count + 1) {
      setCount(0);
    } else if (data.length > count) {
      setCount(count + 1);
    }
  }





  useEffect(() => {
    fatchdata()

  }, [])


  return (





    <div className='slider'>

      <img src={"https://newstorebackend.vercel.app/images/" + data[count]} alt="" />
      <button className='slider-botton-left' onClick={decrement}><i className="fa-solid fa-circle-arrow-left"></i></button>

      <button className='slider-botton' onClick={increment}><i class="fa-solid fa-circle-arrow-right"></i></button>


      <div className='options'>
        <div>
          <img src="https://www.boat-lifestyle.com/cdn/shop/files/Group_334305_small.svg?v=1682336123" alt="" />

          <div>
            <h6>1 Year</h6>
            <p>Warranty</p>
          </div>


        </div>

        <div>
          <img src="https://www.boat-lifestyle.com/cdn/shop/files/Group_334304_small.svg?v=1682336123" alt="" />

          <div>
            <h6 >7-day</h6>
            <p> replacement</p>
          </div>


        </div>



        <div>
          <img src="https://www.boat-lifestyle.com/cdn/shop/files/Group_334303_small.svg?v=1682336123" alt="" />

          <div>
            <h6>Free exprees</h6>
            <p>Delivery</p>
          </div>


        </div>


        <div>
          <img src="https://www.boat-lifestyle.com/cdn/shop/files/Group_334302_small.svg?v=1682336123" alt="" />

          <div>
            <h6>GST</h6>
            <p>Billing</p>
          </div>


        </div>


      </div>


    </div>


  )
}

export default Slider
