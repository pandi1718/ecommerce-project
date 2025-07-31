import React from 'react'

const Whistlist = () => {
  return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#dededeff',
      }}>
      <style>
        {`
       
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

        .box1{
         width:80vw;
         min-height:50vh;
         background-color:#ffffff;
         display:flex;
         flex-direction:column;
         align-item:center;
         margin:0;
        }
         .box1 h1{
         font-size:20px;
         }
         .box1:hover{
         color:#d7168aff;
         }
        `}
      </style>

    <div className='box1'>

        <Link to="/home">Home</Link>

        
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
}

export default Whistlist