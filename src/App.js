import React, { useEffect, useState } from 'react';
import Amplify, { Auth, Hub } from 'aws-amplify';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import awsconfig from './aws-exports';

import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';

Amplify.configure(awsconfig);

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    Hub.listen('auth', ({ payload: { event, data } }) => {
      switch (event) {
        case 'signIn':
        case 'cognitoHostedUI':
          getUser().then(userData => setUser(userData));
          break;
        case 'signOut':
          setUser(null);
          break;
        case 'signIn_failure':
        case 'cognitoHostedUI_failure':
          console.log('Sign in failure', data);
          break;
      }
    });

    getUser().then(userData => setUser(userData));
  }, []);

  function getUser() {
    return Auth.currentAuthenticatedUser()
      .then(userData => userData)
      .catch(() => console.log('Not signed in'));
  }

  return (
    <Router>
      <div>
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Cheff Burger</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/buy_ingredients">Buy Ingredients</Nav.Link>
            <Nav.Link href="/menu">Menu</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        <header className="bg-dark py-5">
          <div className="container px-4 px-lg-5 my-5">
            <div className="text-center text-white">
              <h1 className="display-4 fw-bolder">Cheff Burger</h1>
              <p className="lead fw-normal text-white-50 mb-0">Mas caro, mas rico!</p>
            </div>
          </div>
        </header>
        {/* Section*/}

        <Route path="/" exact component={home} />
        <Route exact path="/menu" component={menu}/>
        <Route path="/about" component={about} />
        <Route path="/contact" component={contact} />
        <Route path="/cart" component={cart} />
        <Route path="/buy_ingredients" component={buy_ingredients} />
    
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

const buy_ingredients = () => (
  <div className="container px-4 px-lg-5 mt-5">
  <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
    <div className="col mb-5">
      <div id="ingredients1" className="card h-100">
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
      <div id="ingredients2" className="card h-100">
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
      <div id="ingredients3" className="card h-100">
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
      <div id="ingredients4" className="card h-100">
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
      <div id="ingredients5" className="card h-100">
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
      <div id="ingredients6" className="card h-100">
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
