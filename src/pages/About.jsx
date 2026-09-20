const About = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <div className="page-heading">
          <p>ABOUT THE PROJECT</p>
          <h2>Student Profile</h2>
        </div>

        <p className="about-description">
          Student Profile is a React-based application designed to display and
          explore student information through a simple and interactive
          interface.
        </p>

        <div className="technology-section">
          <h3>Technologies Used</h3>

          <div className="tech-list">
            <span>React</span>
            <span>JavaScript</span>
            <span>React Router</span>
            <span>CSS</span>
            <span>HTML</span>
          </div>
        </div>

        <div className="project-info">
          <div>
            <strong>03</strong>
            <span>Students</span>
          </div>

          <div>
            <strong>05</strong>
            <span>Pages</span>
          </div>

          <div>
            <strong>01</strong>
            <span>Project</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
