import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light">
      <div className="container mt-3">
        <section className="newsletter mt-5">
          <div className="row">
            <div className="col-md-6 mb-4 mx-auto">
              <div className="card newsletter-card">
                <div className="card-body">
                  <h5 className="card-title fw-bold mb-4 text-light">Subscribe to Our Newsletter</h5>
                  <form>
                    <div className="input-group mb-3">
                      <input type="email" className="form-control" placeholder="Enter your email" />
                      <button className="btn btn-primary" type="submit">Subscribe</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="social-media d-flex justify-content-center p-4">
          <div className="me-5">
            <span className="fw-bold text-light">Social Networks:</span>
          </div>
          <div className="social-icons">
            <a href="/" className="text-light me-4" title="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="/" className="text-light me-4" title="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="/" className="text-light me-4" title="Google"><i className="fab fa-google"></i></a>
            <a href="/" className="text-light me-4" title="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="/" className="text-light me-4" title="Linkedin"><i className="fab fa-linkedin"></i></a>
            <a href="/" className="text-light me-4" title="Github"><i className="fab fa-github"></i></a>
          </div>
        </section>

        <section className="links mt-5 text-light">
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <h6 className="fw-bold text-light">Contact Information</h6>
              <p><i className="fas fa-map-marker-alt me-2 text-light"></i>Shivalik vihar, Haldwani, Uttrakhand, India </p>
              <p><i className="fas fa-envelope me-2 text-light"></i>pankajbhandari2010@gmail.com</p>
              <p><i className="fas fa-phone-alt me-2 text-light"></i>+91 1234567890</p>
            </div>
            <div className="col-md-4 mb-4">
              <h6 className="fw-bold text-light">Useful links</h6>
              <p><a href="/" className="text-light">Privacy Policy</a></p>
              <p><a href="/" className="text-light">Terms and Conditions</a></p>
              <p><a href="/" className="text-light">FAQs</a></p>
              <p><a href="/" className="text-light">Support</a></p>
            </div>
            <div className="col-md-4 mb-4">
              <h6 className="fw-bold text-light">Additional Links</h6>
              <p><a href="/" className="text-light">About Us</a></p>
              <p><a href="/" className="text-light">Blog</a></p>
              <p><a href="/" className="text-light">Returns</a></p>
              <p><a href="/" className="text-light">Track Order</a></p>
            </div>
          </div>
        </section>
      </div>

      <hr className="bg-light" />

      <div className="text-center p-3 text-light">
        © 2024 Style Mantra. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer
