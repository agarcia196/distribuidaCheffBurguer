import React, { useEffect, useState } from 'react';
import Amplify, { Auth, Hub } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

function Home() {
    return(
        <div>
        <nav className="menu menu-left">
          <div className="close-menu-btn icon-menu active">&nbsp;</div>    
          <ul>
            <li className="active"><a href="index.html">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="food.html">Our Food</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="contact.html">login</a></li>
          </ul>
        </nav>
        <div className="menu-btn"><span className="icon-menu">&nbsp;</span> Menu</div>
        <div className="site-overlay" />
        <div id="container">
          <div className="container">
            <div className="main-container row">
              <div id="logo">
                <a href="index.html">
                  <div className="logo-icon"><img src="img/logo.png" /></div>
                  <div className="logo-type">Cheff Burger</div>
                  <div className="logo-slogan">Más caro, más riko</div> 
                </a>
              </div>
            </div>
          </div>
          <div id="full-width-slider" className="full-width">
            <div className="triangle top" />
            <div className="inner" id="inner">


              <div className="slide" id="slide1">
                <div className="inner-slide">
                  <div className="slide-desc">
                    <h1>LOREM IPSUM DOLOR</h1>
                    <span className="sub-title">
                      <span className="sub-title-line">&nbsp;</span>
                      <h2>orci es eget</h2>
                      <span className="sub-title-line">&nbsp;</span>
                      <div className="clear" />
                    </span>
                    <p />
                  </div>
                  <img src="img/slider/1.jpg" width={1980} height={1040} />
                </div>
              </div>


              
              <div className="slide" id="slide2">
                <div className="inner-slide">
                  <div className="slide-desc">
                    <h1>LOREM IPSUM DOLOR</h1>
                    <span className="sub-title">
                      <span className="sub-title-line">&nbsp;</span>
                      <h2>orci es eget</h2>
                      <span className="sub-title-line">&nbsp;</span>
                      <div className="clear" />
                    </span>
                    <p />
                  </div>
                  <img src="img/slider/1.jpg" width={1980} height={1040} />
                </div>
              </div>
              <div className="slide" id="slide3">
                <div className="inner-slide">
                  <div className="slide-desc">
                    <h1>LOREM IPSUM DOLOR</h1>
                    <span className="sub-title">
                      <span className="sub-title-line">&nbsp;</span>
                      <h2>orci es eget</h2>
                      <span className="sub-title-line">&nbsp;</span>
                      <div className="clear" />
                    </span>
                    <p />
                  </div>
                  <img src="img/slider/1.jpg" width={1980} height={1040} />
                </div>
              </div>
            </div>
            <div className="controls">
              <a href="#" className="left"><span className="icon-slider prev">&nbsp;</span></a>
              <a href="#" className="right"><span className="icon-slider prev">&nbsp;</span></a>
            </div>
            <div className="slide-nav" />
            <div className="triangle bottom" />
          </div>
          <div className="clear" />
          <div className="triangle top promotion" />
          <div className="container promotion">
            <div id="promotion" className="main-container">
              <div className="row">
                <div className="promotion-title col">
                  <div className="title">
                    <h1>Check out our promotions</h1>
                    <h2 className="sub-title">maecenas sem ultricies lacinia</h2>
                  </div>
                </div>
                <div className="promotion-button col">
                  <div className="button-container">
                    <a className="button white-button" href="food.html">See all promotions</a>
                  </div>
                </div>
              </div>
              <div className="clear" />
              <ul id="promotion-product" className="row">
              </ul>
            </div>
            <div className="clear space-area" />
          </div>
          <div className="triangle bottom promotion" />
          <div className="clear" />
          <div className="container latest-updates">
            <div id="latest-updates" className="main-container">
              <div className="row">
                <div className="latest-news col">
                  <div className="title">
                    <h3>News</h3>
                  </div>
                  <ul id="list-updates">
                    <li>
                      <p className="date">30.07.2014</p>
                      <p>Lorem ipsum dolor sit amet adipisicing elit.</p>
                      <a href="#" className="icon-link arrow">&nbsp;</a>
                    </li>
                    <li>
                      <p className="date">24.07.2014</p>
                      <p>Quisque facilisis elit et tincidunt malesuada.</p>
                      <a href="#" className="icon-link arrow">&nbsp;</a>
                    </li>
                    <li>
                      <p className="date">14.07.2014</p>
                      <p>Morbi suscipit rhoncus. Maecenas uteros.</p>
                      <a href="#" className="icon-link arrow">&nbsp;</a>
                    </li>
                  </ul>
                  <div className="clear" />
                  <div className="button-container">
                    <a className="button grey-button">See All</a>
                  </div>
                </div>
                <div className="job-boards col">
                  <div className="title">
                    <h3>Job Board</h3>
                  </div>
                  <ul id="list-updates" className="jobs">
                    <li>
                      <p className="date">30.07.2014</p>
                      <p>Lorem ipsum dolor sit amet adipisicing elit.</p>
                      <a href="#" className="icon-link arrow">&nbsp;</a>
                    </li>
                    <li>
                      <p className="date">24.07.2014</p>
                      <p>Quisque facilisis elit et tincidunt malesuada.</p>
                      <a href="#" className="icon-link arrow">&nbsp;</a>
                    </li>
                  </ul>
                  <div className="clear" />
                  <div className="button-container">
                    <a className="button grey-button">See All</a>
                  </div>
                </div>
                <div className="clear" />
              </div>
            </div>
            <div className="clear space-area" />
          </div>
          <div className="clear" />
          <div className="triangle top footer" />
          <div className="container footer">
            <div id="footer" className="main-container">
              <div className="footer-top row">
                <div className="footer-info col">
                  <div className="footer-logo">
                    <div className="logo-icon"><img src="img/footer-logo.png" /></div>
                  </div>
                  <div className="footer-address">
                    Cheff Burger<br />523 Avenue Street, New York
                  </div>
                  <div className="footer-contact">
                    (432) 421 693 812<br /><a href="#">office@companyname.com</a>
                  </div>
                </div>
                <div className="footer-newsletter col">
                  <div className="footer-newsletter-container">
                    <form id="subscribe-newsletter">
                      <input type="email" className="footer-input-text" placeholder="Enter your email to join newsletter..." />
                      <input type="submit" className="button grey-button footer-input-submit" defaultValue="Subscribe" />
                    </form>
                  </div>
                </div>
                <div className="clear" />
              </div>
              <div className="footer-bottom row">
                <div className="footer-copyright col">
                  <div className="footer-copyright-text">Copyright 2014 Cheff Burger. Designed by Themezy. All rights reserved.</div>
                </div>
                <div className="footer-social-media col">
                  <div className="social-media-icon">
                    <span className="icon-social-media icon-facebook">&nbsp;</span>
                    <span className="icon-social-media icon-twitter">&nbsp;</span>
                    <span className="icon-social-media icon-google">&nbsp;</span>
                    <span className="icon-social-media icon-pinterest">&nbsp;</span>
                  </div>
                </div>
                <div className="clear" />
              </div>
            </div>
            <div className="clear" />
          </div>
        </div>

        
      </div>
    );
}

export default Home;