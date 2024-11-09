// App.js
import React, { useState } from 'react';
import './app.css';

const App = () => {
  const [rooms, setRooms] = useState(1);

  const incrementRooms = () => setRooms(rooms + 1);
  const decrementRooms = () => setRooms(rooms > 1 ? rooms - 1 : 1);

  return (
    <div className="main-container">
      <div className="child-container">
        <nav className="navbar">
          <div className="brand">
            <span className="brand-name">Brisphere</span>
          </div>
          <button className="menu-toggle">&#9776;</button>
          <ul className="nav-links">
            <li><a href="#discover">Discover</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Us</a></li>
          </ul>
        </nav>

        <div className="content">
          <div className="banner">
            {/* Left Section */}
            <div className="banner-left">
              <h1>Work from Ladakh</h1>
              <p>India’s first true digital tourism ecosystem</p>
              <div className="social-icons">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                  alt="Facebook"
                  className="social-icon"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                  alt="Instagram"
                  className="social-icon"
                />
              </div>
            </div>

            {/* Right Section */}
            <div className="banner-right">
              <img
                src="https://wallpapers.com/images/hd/beautiful-mountain-view-4yilsm73lxmzv6ww.jpg"
                alt="Beautiful Tour"
                className="tour-image"
              />
            </div>
          </div>

          <div className="booking-section">
            <div className="booking-fields">
              <div className="field">
                <label>Check-in</label>
                <input type="date" />
              </div>
              <div className="vertical-line"></div>

              <div className="field">
                <label>Check-out</label>
                <input type="date" />
              </div>
              <div className="vertical-line"></div>

              <div className="field">
                <label>Rooms Needed</label>
                <div className="room-control">
                  <button onClick={decrementRooms}>-</button>
                  <span>{rooms}</span>
                  <button onClick={incrementRooms}>+</button>
                </div>
              </div>
            </div>
            <button className="book-button">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
