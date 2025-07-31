import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = ({ setUser }) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [cmpass, setCmpass] = useState('');

  const navigate = useNavigate();

  const sign = (e) => {
    e.preventDefault();
    setUser([{ Name: firstname, Names: lastname, Email: email, Mobile: mobile, Pass: password, Confirmpassword: cmpass }]);
    navigate('/login');
  };
return (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundImage: 'url("src/assets/signup/pexels-padrinan-19670.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}>
    <style>
      {`
        .main {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 50px;
          flex-direction: column;
        }
        .move {
          width: 50vw;
          display: flex;
          justify-content: flex-end;
        }
        .sign-before {
          background-color: #FF96F5;
          width: 30vw;
          height: 60vh;
          border-radius: 10px 0 0 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
          .sign-before h1{
        font-size:30px;
        text-align:center;
        font-family:italic;
        }
        .sign-before img {
          width: 25vw;
          height: 30vh;
          margin-top: 20px;
        }
           .sign-before:hover {
            box-shadow: inset 0 0 10px #ff03e6ff;
        }
        .border {
            cursor:pointer;
            background-color: #ffffffe6;
            padding: 20px;
            border-radius: 0px 10px 10px 0px;
            width:40vw;
            gap:10px;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            text_align:center;
            margin: 0 auto;
        }
          .border:hover{
            box-shadow: inset 0 0 10px #363636e6;
            }
        .header {
          color: #d7168aff;
          font-weight:bold;
          font-size: 15px;
          text-align: center;
        }
        .alignn input {
          width: 200px;
          height: 4vh;
          padding: 10px;
          margin: 5px 0;
          border-radius: 5px;
          border: 0.5px solid grey;
        }
        .set {
           height:6vh;
           width:13vw;
           overflow:hidden;
           text-align:center;
           padding: 10px 20px;
            background-color: #ffc800;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        .set:hover {
          background-color: #ffaa00;
          color: white;
        }
        .foot {
          background-color: #d3fad4ff;
          padding-left:250px;
          padding-top:10px;
          margin-top:70px;         
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

    <div className="main">
      <form className="move" onSubmit={sign}>
        <div className="sign-before">
          <img src="src/assets/signup/3d.png" alt="Logo" />
          <h1>"Join the GK family"</h1>
        </div>
        <div className="border">
          <div className="header"><span>Sign Up</span></div>
          <div className="alignn">
            <input type="text" placeholder="First Name" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
          </div>
          <div className="alignn">
            <input type="text" placeholder="Last Name" value={lastname} onChange={(e) => setLastname(e.target.value)} />
          </div>
          <div className="alignn">
            <input type="text" placeholder="Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} />
          </div>
          <div className="alignn">
            <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="alignn">
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="alignn">
            <input type="password" placeholder="Confirm Password" value={cmpass} onChange={(e) => setCmpass(e.target.value)} />
          </div>
          <button type="submit" className="set"><span className="forgett">Sign up</span></button>
        </div>
      </form>
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

export default Signup;
