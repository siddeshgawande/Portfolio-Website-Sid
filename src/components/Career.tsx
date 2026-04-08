import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Mindbowser Infotech Pvt Ltd</h5>
              </div>
              <h3>Nov 2023 - Present</h3>
            </div>
            <p>
              Delivering React Native apps end-to-end with cross-functional
              teams, optimizing architecture and performance, and shipping key
              features for healthcare and consumer products ahead of schedule.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Front-end Developer (Internship)</h4>
                <h5>AZEA Pvt Ltd</h5>
              </div>
              <h3>Jan 2023 - Mar 2023</h3>
            </div>
            <p>
              Designed and implemented responsive Android UI/UX features and
              collaborated with backend and design teams to deliver aligned
              product requirements.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E. Computer Science & Engineering</h4>
                <h5>Rajiv Gandhi College of Engineering & Research</h5>
              </div>
              <h3>Jun 2022</h3>
            </div>
            <p>
              Completed undergraduate studies in Computer Science and
              Engineering (CGPA 7.6), followed by a PG Diploma in Mobile
              Computing from Sunbeam Infotech, Pune.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
