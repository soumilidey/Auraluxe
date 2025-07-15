import '/src/components/Footer.css'

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-content">
        <div className="cta-section">
          <h1>Get Personalised Feed<br /><span>with ReadRiot</span></h1>
          <p>
            Sign up for our newsletter and get personalised feed on your email, curated just for you!
          </p>
          <div className="cta-buttons">
            <a href="/contact/">
              <button className="btn btn-primary">Get a Quote</button>
            </a>

                 <a
        href="http://localhost:3000"
        className="btn btn-secondary"
      >
        <span className="inline-flex items-center gap-2">
          Explore Solutions&nbsp;
          <img
            className="arrow arrow-default"
            src="src/assets/rightward-arrow.png"
            alt="→"
          />
          <img
            className="arrow arrow-hover"
            src="src/assets/rightward-arrow-black.png"
            alt="→"
          />
        </span>
      </a>
          </div>
        </div>
      </div>

      <div className="contact-banner">
        <div className="info-section">
          <div className="info-column">
            <a href="/terms-and-conditions/" target="_blank">Terms And Conditions</a>
            <a href="/refund-policy/" target="_blank">Refund Policy</a>
            <a href="/privacy-policy/" target="_blank">Privacy Policy</a>
          </div>

          <div className="info-column"></div>

          <div className="info-column">
            <div style={{ textAlign: "right" }}>
              <a href="https://instagram.com/">
                <img src="../src/assets/instagram-logo.png" style={{ width: "20px", height: "20px", verticalAlign: "middle" }} alt="instagram" />
                <span style={{ marginLeft: "6px" }}>@luminolens</span>
              </a>
              <a href="https://www.linkedin.com/in/">
                <img src="../src/assets/linkedin-logo.png" style={{ width: "20px", height: "20px", verticalAlign: "middle" }} alt="linkedin" />
                <span style={{ marginLeft: "6px" }}>Lumino_Lens</span>
              </a>
              <a href="https://www.facebook.com/">
                <img src="../src/assets/facebook-logo.png" style={{ width: "20px", height: "20px", verticalAlign: "middle" }} alt="facebook" />
                <span style={{ marginLeft: "6px" }}>LuminoLens</span>
              </a>
              <address style={{ marginTop: "1rem" }}>
                Readriot Headquarters<br />
                Opposite Chitra Vihar,<br />
                West Bengal, Kolkata-700107
              </address>
            </div>
          </div>
        </div>

        <div className="top-row">
          <div className="contact-coloumn">
<div className="contact-coloumn">
<div
  className="whatsapp"
  style={{
    display: "flex",
    alignItems: "center",
    gap: "15px",
    flexWrap: "wrap" // optional for small screens
  }}
>
  <h3 className="get-in-touch m-0" style={{ margin: 0 }}>Contact us on</h3>

  <a
    href="https://wa.me/919876543210"
    target="_blank"
    className="btn-secondary"
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      textDecoration: "none",
      whiteSpace: "nowrap" // prevents button text wrap
    }}
  >
    <span style={{ fontSize: "1rem" }}>WhatsApp</span>
    <img
      src="../src/assets/whatsapp-logo.png"
      alt="whatsapp"
      style={{
        width: "24px",
        height: "24px",
        verticalAlign: "middle",
        marginTop: "2px"
      }}
    />
  </a>
</div>
</div>


            <p style={{ marginTop: "1rem", marginLeft: "15px", color: "#d1d5db", fontFamily: "Poppins" }}>
              Call us on +91 9876543210 to get instant assistance.
            </p>
          </div>

          <p className="copyright">2025 ReadRiot. All Rights Reserved.</p>
        </div>

        <p className="email">support@readriot.com</p>
      </div>
    </footer>
  )
}

export default Footer
