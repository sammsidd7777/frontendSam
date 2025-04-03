import React from 'react'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer_logo'>
                <img src="./image/footerlogo.svg" alt="" />
                <h1>Subscribe to our email alerts!</h1>
                <input type="text" placeholder='Enter  your gmail address' />





            </div>
            <div className='footer_shop_section'>

                <h5>Shop</h5>
                <div className='footer-detail-section'>
                    <p> True Wireless Earbuds  </p>
                    <p> Wireless Headphones</p>
                        <p>  Wired  Headphones</p>
                     
                        <p>     Wireless Speakers</p>
                        <p> Home Audio</p>
                        <p>  Mobile  Accessories</p>
                        <p>   Smart  Watches</p>
                        <p> tRebel</p>
                        <p> Misfit Trimmers</p>
                        <p> Refer & Earn</p>

                </div>
            </div>
            <div className='footer_help_section'>
                <h5>Help</h5>
                <div className='footer-detail-section'>
                    <p> Track Your Order  </p> <p>Warranty & Support </p> <p>Return Policy</p>  <p>Service Centers</p>  <p>Bulk Orders </p><p> Why Buy Direct</p>

                </div>
            </div>
            <div className='footer_company_section'>


                <h5>Company</h5>

                <div className='footer-detail-section'>

                    <p>About</p>   <p>boAt</p>  <p>News</p>  <p>Read Our Blog</p>  <p>Careers</p>  <p>Security </p> <p>Investor Relations</p>  <p>Social Responsibility</p>  <p>Warranty Policy</p>

                </div>

            </div>
        </div>     )
}

            export default Footer
