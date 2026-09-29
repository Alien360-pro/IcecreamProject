import "./contact.css";

function Contact() {
  return (
    <div className="contact-page">

      {/* Left Side */}
      <div className="side-decoration left-side">
        <div className="ice-cream">🍦</div>
        <div className="ice-cream">🍨</div>
        <div className="ice-cream">🍧</div>
      </div>

      {/* Main Content */}
      <div className="contact-content">

        <h1 className="text-center fw-bold text-primary wave-title">
          <span>C</span>
          <span>o</span>
          <span>n</span>
          <span>t</span>
          <span>a</span>
          <span>c</span>
          <span>t</span>
          <span>&nbsp;</span>
          <span>V</span>
          <span>.</span>
          <span>V</span>
          <span>.</span>
          <span>K</span>
        </h1>

        <div className="card contact-card shadow p-4 mx-auto mt-4">

          <h3>🍦 V.V.K Ice Cream</h3>

          <p>📍 Madurai, Tamil Nadu, India</p>

          <p>📞 +91 98765 43210</p>

          <p>📧 vvkisscream@gmail.com</p>

          <p>🕒 10:00 AM - 60:30 PM</p>

          <button className="btn btn-primary contact-btn">
            Contact Us 🍨
          </button>

        </div>

      </div>

      {/* Right Side */}
      <div className="side-decoration right-side">
        <div className="ice-cream">🍧</div>
        <div className="ice-cream">🍦</div>
        <div className="ice-cream">🍨</div>
      </div>

    </div>
  );
}

export default Contact