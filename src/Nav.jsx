import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

  const inputRef=useRef()

  const focusInput=()=>{
    inputRef.current.focus()
  }
  return (
    <div>
      <style>{`
        .nave li {
          padding: 10px 20px;
          transition: all 0.3s ease-in-out;
          text-align: center;
          border-radius: 5px;
          text-decoration: none;
          color: #000000;
          list-style: none;
        }
        .nave li:hover {
          background-color: #d7168aff;
          color: #ffffff;
          border: 1px solid #d7168aff;
          cursor: pointer;
          font-weight: bold;
          box-shadow: 0px 0px 20px 0px #ffffff;
        }
        .nave li a {
            text-decoration: none;
            color: black;
            display: inline-block;
            width: 100%;
            height: 100%;
          }

          .nave li:hover a {
            color: white;
          }
        .search-button {
          height: 100%;
          padding: 0 15px;
          background-color: #d7168aff;
          color: white;
          border: none;
          font-weight: bold;
          cursor: pointer;
        }
        .search-button:hover {
          background-color: #ffc800ff;
          color: #ffffff;
        }
        .loog {
          color: #000000ff;
          font-weight: normal;
          text-decoration: none;
        }
        .loog:hover {
          color: #d7168aff;
          font-weight: bold;
        }
        .heart {
          background-image: url("src/assets/nav/heart1.png");
          cursor: pointer;
          height: 30px;
          width: 30px;
          margin:10px;
          background-size: cover;
        }
        .heart:hover {
          background-image: url("src/assets/nav/heart2.png");
        }
        .vechile {
          background-image: url("src/assets/nav/emptybuy.png");
          cursor: pointer;
          height: 30px;
          width: 30px;
          margin:10px;
          background-size: cover;
        }
        .vechile:hover {
          background-image: url("src/assets/nav/fullbuy.png");
        }
        .nave ul {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 30px;
          padding: 0;
          margin: 0;
        }
      `}</style>

      
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 30px',
          backgroundColor: '#fafafa',
          borderBottom: '1px solid #007BFF',
        }}
      >
        <img
          src="src/assets/nav/3d.png"
          alt="logo"
          style={{ width: '100px', height: '80px', borderRadius: '50%' }}
        />

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            border: '1px solid green',
            borderRadius: '10px',
            overflow: 'hidden',
            height: '40px',
            width: '50%',
            backgroundColor: 'white',
          }}
        >
          <input ref={inputRef}
            type="text"
            placeholder="What are you looking for?"
            style={{
              border: 'none',
              flex: 1,
              height: '100%',
              paddingLeft: '10px',
              fontSize: '16px',
              outline: 'none',
            }}
          />
          <button onClick={focusInput} className="search-button">Search</button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <Link className="loog" to="/login">Login</Link>
          <Link className="loog" to="/signup">Signup</Link>
          
          <Link to={"/Whistlist"}><p className="heart" /></Link>
          <Link to={"/Cart"}><p className="vechile" /></Link>
        </div>
      </div>

      
      <div
        style={{
          backgroundColor: '#d3fad4ff',
          padding: '10px 0',
          boxShadow: '0 2px 4px 1px #00000033',
        }}
      >
        <div className="nave"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: '500',
            fontSize: '12px',
          }}
        >
          <ul>
            <li><Link className="nave" to="/">HOME</Link></li>
            <li><Link to="/products">PRODUCTS</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/service">SERVICE</Link></li>
            <li><Link className="nave" to="/contact">CONTACT</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
