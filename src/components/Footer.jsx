import React from "react";
 
const Footer = () => {
  return (
    <footer className="footerWrapper">
      <div className="footerContent">
        <div className="footerAbout">
          <h3>About Us</h3>
          <p>
            We are a team of passionate developers dedicated to creating
            innovative web solutions. Our mission is to deliver exceptional
            user experiences through cutting-edge technology and design.
          </p>
        </div>

        <div className="footerLinks">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/personnel">Personnel</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/paths">Paths</a></li>
          </ul>
        </div>

        <div className="footerSocial">
          <h3>Follow Us</h3>
          <ul className="socialLinks">
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footerBottom">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
