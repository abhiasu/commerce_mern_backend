import React, { Component } from 'react';

class FooterComponent extends Component {
 
    render() { 
        return (  <React.Fragment><footer>
          <div className="container">
              <div className="row">
                  <div className="col-lg-4">
                      <div className="footer-text">
                          <h3>WAWA</h3>
                          <p>Commerce software that powers the next genertion of digital experience.</p>
                      </div>
                  </div>
                  <div className="col-lg-4">
                      <div className="footer-link">
                          <h3>Assistance</h3>
                          <ul>
                              <li><a href="">About Us</a></li>
                              <li><a href="">Contact</a></li>
                              <li><a href="">Shipping & Returns</a></li>
                              <li><a href="">Terms & Conditions</a></li>
                          </ul>
                      </div>
                  </div>
                  <div className="col-lg-4">
                      <div className="footer-social">
                          <h3>Find On Online</h3>
                          <ul>
                              <li><a href=""><i className="fab fa-facebook-square"></i> Facebook</a></li>
                              <li><a href=""><i className="fab fa-twitter-square"></i> twitter</a></li>
                              <li><a href=""><i className="fab fa-instagram"></i> instagram</a></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </footer></React.Fragment>);
    }
}
 
export default FooterComponent;