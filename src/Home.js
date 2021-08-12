import React, { useEffect, useState } from 'react';
import Amplify, { Auth, Hub } from 'aws-amplify';
import awsconfig from './aws-exports';
import { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

Amplify.configure(awsconfig);

export default function Home() {
    return(
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
              <a className="navbar-brand" href="/">Inicio</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                  <li className="nav-item"><a className="nav-link active" aria-current="page" href="/menu">Menú</a></li>
                  <li className="nav-item"><a className="nav-link" href="/about">Nosotros</a></li>
                  <li className="nav-item"><a className="nav-link" href="/contact">Contacto</a></li>
                </ul>
                <form className="d-flex">
                  <a className="nav-link btn btn-outline-dark text-black" href="/cart">
                      <i className="bi-cart-fill me-1 text-black"/>
                      Cart
                      <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                  </a>
                </form>
              </div>
            </div>
          </nav>
          {/* Header*/}
          <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
              <div className="text-center text-white">
                <h1 className="display-4 fw-bolder">Cheff Burger</h1>
                <p className="lead fw-normal text-white-50 mb-0">Mas caro, mas rico!</p>
              </div>
            </div>
          </header>
          {/* Section*/}
          <Route path = "/" exact component={home} />
          <Route path = "/menu" component={menu}/>
          <Route path = "/about" component={about}/>
          <Route path = "/contact" component={contact}/>
          <Route path = "/cart" component={cart}/>
          
          {/* Footer*/}
          <footer className="py-5 bg-dark">
            <div className="container"><p className="m-0 text-center text-white">Copyright ©CheffBurger 2021</p></div>
          </footer>
          {/* Bootstrap core JS*/}
          {/* Core theme JS*/}
        </div>
      </Router>
    );
}

const home = () => (
  <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
              <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center mb-5">
                <h1 className="text-center">Bienvenido!</h1>
              </div>
              <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center mb-5">
                <h1 className="text-center mt-5">Hamburguesas Destacadas</h1>
              </div>
              <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                <div className="col mb-5">
                  <div id="menu1" className="card h-100">
                    {/* Product image*/}
                    <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                    {/* Product details*/}
                    <div className="card-body p-4">
                      
                      <div id="menu1" className="text-center">
                        <h2></h2>
                        {/* Product name*/}
                        <h5 text="" className="fw-bolder"></h5>
                        <div className="d-flex justify-content-center small text-warning mb-2">
                          <div className="bi-star-fill" />
                          <div className="bi-star-fill" />
                          <div className="bi-star-fill" />
                          <div className="bi-star-fill" />
                          <div className="bi-star-fill" />
                        </div>
                        <p></p>
                        {/* Product price*/}
                        <p id="precio"></p>
                      </div>
                    </div>
                    {/* Product actions*/}
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Agregar al carrito</a></div>
                    </div>
                  </div>
                  
                </div>

                <div className="col mb-5">
                  <div id="menu2" className="card h-100">
                    {/* Product image*/}
                    <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                    {/* Product details*/}
                    <div className="card-body p-4">
                      
                      <div id="menu2" className="text-center">
                        <h2></h2>
                        {/* Product name*/}
                        <h5 text="" className="fw-bolder"></h5>
                        <div className="d-flex justify-content-center small text-warning mb-2">
                          <div className="bi-star-fill" />
                          <div className="bi-star-fill" />
                          <div className="bi-star-fill" />
                          <div className="bi-star-fill" />
                          <div className="bi-star-fill" />
                        </div>
                        <p></p>
                        {/* Product price*/}
                        <p id="precio"></p>
                      </div>
                    </div>
                    {/* Product actions*/}
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Agregar al carrito</a></div>
                    </div>
                  </div>
                  
                </div>

                <div className="col mb-5">
                  <div id="menu3" className="card h-100">
                    {/* Product image*/}
                    <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                    {/* Product details*/}
                    <div className="card-body p-4">
                      
                      <div id="menu3" className="text-center">
                        <h2></h2>
                        {/* Product name*/}
                        <h5 text="" className="fw-bolder"></h5>
                        <div className="d-flex justify-content-center small text-warning mb-2">
                          <div className="bi-star-fill" />
                          <div className="bi-star-fill" />
                          <div className="bi-star-fill" />
                          <div className="bi-star-fill" />
                          <div className="bi-star-fill" />
                        </div>
                        <p></p>
                        {/* Product price*/}
                        <p id="precio"></p>
                      </div>
                    </div>
                    {/* Product actions*/}
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Agregar al carrito</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
);

const about = () => (
  <div className="container px-4 px-lg-5 mt-5">
    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center mb-5">
      <h1 className="text-center">Nosotros!</h1>
    </div>
    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-2 justify-content-center mb-5 mt-5">
      <h2 className="text-center">Estudiantes de la Universidad del Buho que consiguieron contrato con la multinacional Cheff Burger para hacer su sitio web super escalable, seguro y rapido</h2>
    </div>
  </div>
);

const menu = () => (
  <div className="container px-4 px-lg-5 mt-5">
    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
    <div className="col mb-5">
      <div id="menu1" className="card h-100">
        {/* Product image*/}
        <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
        {/* Product details*/}
        <div className="card-body p-4">
          
          <div id="menu1" className="text-center">
            <h2></h2>
            {/* Product name*/}
            <h5 text="" className="fw-bolder"></h5>
            <div className="d-flex justify-content-center small text-warning mb-2">
              <div className="bi-star-fill" />
              <div className="bi-star-fill" />
              <div className="bi-star-fill" />
              <div className="bi-star-fill" />
              <div className="bi-star-fill" />
            </div>
            <p></p>
            {/* Product price*/}
            <p id="precio"></p>
          </div>
        </div>
        {/* Product actions*/}
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Agregar al carrito</a></div>
        </div>
      </div>
      
    </div>

    <div className="col mb-5">
      <div id="menu2" className="card h-100">
        {/* Product image*/}
        <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
        {/* Product details*/}
        <div className="card-body p-4">
          
          <div id="menu2" className="text-center">
            <h2></h2>
            {/* Product name*/}
            <h5 text="" className="fw-bolder"></h5>
            <div className="d-flex justify-content-center small text-warning mb-2">
              <div className="bi-star-fill" />
              <div className="bi-star-fill" />
              <div className="bi-star-fill" />
              <div className="bi-star-fill" />
              <div className="bi-star-fill" />
            </div>
            <p></p>
            {/* Product price*/}
            <p id="precio"></p>
          </div>
        </div>
        {/* Product actions*/}
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Agregar al carrito</a></div>
        </div>
      </div>
      
    </div>

    <div className="col mb-5">
      <div id="menu3" className="card h-100">
        {/* Product image*/}
        <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
        {/* Product details*/}
        <div className="card-body p-4">
          
          <div id="menu3" className="text-center">
            <h2></h2>
            {/* Product name*/}
            <h5 text="" className="fw-bolder"></h5>
            <div className="d-flex justify-content-center small text-warning mb-2">
              <div className="bi-star-fill" />
              <div className="bi-star-fill" />
              <div className="bi-star-fill" />
              <div className="bi-star-fill" />
              <div className="bi-star-fill" />
            </div>
            <p></p>
            {/* Product price*/}
            <p id="precio"></p>
          </div>
        </div>
        {/* Product actions*/}
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Agregar al carrito</a></div>
        </div>
      </div>
    </div>
  </div>
  <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
    <div className="col mb-5">
      <div id="menu4" className="card h-100">
        {/* Product image*/}
        <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
        {/* Product details*/}
        <div className="card-body p-4">
          
          <div id="menu4" className="text-center">
            <h2></h2>
            {/* Product name*/}
            <h5 text="" className="fw-bolder"></h5>
            <div className="d-flex justify-content-center small text-warning mb-2">
              <div className="bi-star-fill" />
              <div className="bi-star-fill" />
              <div className="bi-star-fill" />
              <div className="bi-star-fill" />
              <div className="bi-star-fill" />
            </div>
            <p></p>
            {/* Product price*/}
            <p id="precio"></p>
          </div>
        </div>
        {/* Product actions*/}
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Agregar al carrito</a></div>
        </div>
      </div>
      
    </div>

    <div className="col mb-5">
      <div id="menu5" className="card h-100">
        {/* Product image*/}
        <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
        {/* Product details*/}
        <div className="card-body p-4">
          
          <div id="menu5" className="text-center">
            <h2></h2>
            {/* Product name*/}
            <h5 text="" className="fw-bolder"></h5>
            <div className="d-flex justify-content-center small text-warning mb-2">
              <div className="bi-star-fill" />
              <div className="bi-star-fill" />
              <div className="bi-star-fill" />
              <div className="bi-star-fill" />
              <div className="bi-star-fill" />
            </div>
            <p></p>
            {/* Product price*/}
            <p id="precio"></p>
          </div>
        </div>
        {/* Product actions*/}
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Agregar al carrito</a></div>
        </div>
      </div>
      
    </div>

    <div className="col mb-5">
      <div id="menu6" className="card h-100">
        {/* Product image*/}
        <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
        {/* Product details*/}
        <div className="card-body p-4">
          
          <div id="menu6" className="text-center">
            <h2></h2>
            {/* Product name*/}
            <h5 text="" className="fw-bolder"></h5>
            <div className="d-flex justify-content-center small text-warning mb-2">
              <div className="bi-star-fill" />
              <div className="bi-star-fill" />
              <div className="bi-star-fill" />
              <div className="bi-star-fill" />
              <div className="bi-star-fill" />
            </div>
            <p></p>
            {/* Product price*/}
            <p id="precio"></p>
          </div>
        </div>
        {/* Product actions*/}
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Agregar al carrito</a></div>
        </div>
      </div>
    </div>
  </div>
</div>
);

const contact = () => (
  <div className="container px-4 px-lg-5 mt-5">
    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center mb-5">
      <h1 className="text-center">Información de Contacto</h1>
    </div>
    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center mb-5 mt-5">
      <h2 className="text-center">Fabio García : 301243124</h2>
    </div>
    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center mb-5 mt-5">
      <h2 className="text-center">Andrés Barrera : 301243125</h2>
    </div>
    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center mb-5 mt-5">
      <h2 className="text-center">Jeisson Anaya : 301243126</h2>
    </div>
    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center mb-5 mt-5">
      <h2 className="text-center">Alexis Vélez : 301243122</h2>
    </div>
  </div>
);

const cart = () => (
  <div className="container px-4 px-lg-5 mt-5">
    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center mb-5">
      <h1 className="text-center">Tu Carrito</h1>
    </div>
    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-2 justify-content-center mb-5 mt-5">
      <h2 className="text-center">Esta funcionalidad pronto estará disponible!</h2>
    </div>
  </div>
);
