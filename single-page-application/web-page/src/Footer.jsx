import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footerleft">
            <h3>CarWorld</h3>
            <p>&copy; 2024 CarWorld. All rights reserved.</p>
          </div>

          <div className="footer-center">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Cars</a>
              </li>
              <li>
                <a href="#">Service</a>
              </li>
            </ul>
          </div>

          <div className="footer-right">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#" className="social-icon">
                FaceBook
              </a>
              <a href="#" className="social-icon">
                Instagram
              </a>
              <a href="#" className="social-icon">
                Twitter
              </a>
              <a href="#" className="social-icon">
                YouTube
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
