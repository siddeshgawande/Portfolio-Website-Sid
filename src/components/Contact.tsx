import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:siddeshgawande3@gmail.com" data-cursor="disable">
                siddeshgawande3@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+917972393573" data-cursor="disable">
                +91 7972393573
              </a>
            </p>
            <h4>Location</h4>
            <p>Nagpur, Maharashtra</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/siddeshgawande"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://linkedin.com/in/siddesh-gawande-03879a191"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://stackoverflow.com/users/30381217/siddesh-gawande"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Stack Overflow <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Siddesh Gawande</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
