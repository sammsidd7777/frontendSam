import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const SeachBaroption = () => {




  const [category, setCategory] = useState([]);


  // setx(props);
  const fetchData = async () => {
    try {
      let response = await fetch("https://newstorebackend.vercel.app/products/all");

      // Check if the response is OK (status code 200-299)
      if (response.ok) {
        const data = await response.json(); // Parse the JSON data from the response

        setCategory(data.message.Categories)
      } else {
        console.log("Error: Unable to fetch data", response.status);
      }
    } catch (error) {
      console.log('Error fetching data:', error);
    }



  };


  useEffect(() => {
    fetchData()
  }, [])




  return (

    <>

      {



        category.map((item, index) => {

          console.log(item)

          return (
            <div key={index} >

              <img
                src={"https://newstorebackend.vercel.app/images/" + item.img[1]}
                alt={item.cag}
              />


              <Link to={"/findCollection/" + item.cag}>
                <h1>{item.cag}</h1>
              </Link>



            </div>
          )
        }

        )}

    </>


  )
}


export default SeachBaroption
