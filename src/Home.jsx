import React from 'react';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'

import img1 from './assets/carousal/deals-img4-1216x600.jpg';
import img2 from './assets/carousal/image5.avif';
import img3 from './assets/carousal/laptop-coupons.jpg';

const Home = () => {
  return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#dededeff',
      }}>
      <style>
        {`
        .second-categorey {
          display: flex;         
          justify-content: center;  
          border: 0px solid black;
          height: 40vh;
          width: 80vw;
          gap: 15px;
          padding: 10px;
          margin: auto;                 
          margin-top: 50px;
          position: relative;
          left: -150px;
        }
        .carousel-image{
          height: 40vh;
          width:50vw;
          object-fit: cover;
        }
           .foot {
           background-color: #d3fad4ff;
            padding-left:100px;
            padding-top:10px;
            margin-top: auto; 
            display: flex;
            flex-direction: column;
            align-items: center;
        }
          .foote:hover{
          color:#d7168aff;
          }
             .forgett {
          font-weight: bold;
        }
          .copy{
          text-align:center;
          padding-right:200px;
          padding-top:15px;
          }
        `}
      </style>

      <div style={{
        display:'flex',
      }}>
        <div className='second-categorey'>

          <div id="carouselExampleFade" className="carousel slide carousel-fade">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1}className="d-block carousel-image" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img2} className="d-block carousel-image" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img3} className="d-block carousel-image" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

        </div>
      </div>
      
    <div className="foot">
      <footer style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'start',
        gap: '50px'
      }}>
        <div>
          <strong className="foote">Exclusive</strong><br />
          <span>Subscribe</span><br />
          <span>Get 10% off your first order</span>
        </div>
        <div>
          <strong className="foote">Support</strong><br />
          <span>111 Bijoy sarani, Dhaka</span><br />
          <span>exclusive@gmail.com</span><br />
          <span>+88015-88888-9999</span>
        </div>
        <div>
          <strong className="foote">Account</strong><br />
          <span>My Account</span><br />
          <span>Login / Register</span><br />
          <span>Cart</span><br />
          <span>Wishlist</span><br />
          <span>Shop</span>
        </div>
        <div>
          <strong className="foote">Quick Link</strong><br />
          <span>Privacy Policy</span><br />
          <span>Terms Of Use</span><br />
          <span>FAQ</span><br />
          <span>Contact</span>
        </div>
        <div>
          <strong className="foote">Download App</strong><br />
          <span>Save $3 with App New User Only</span><br />
          <img src="logo" alt="Andriode" /><br />
          <img src="logo" alt="iphone" />
        </div>
      </footer>
      <p className='copy'>© 2025 GK Infotech. All Rights Reserved.</p>
    </div>
    </div>
  );
};

export default Home;
