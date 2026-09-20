const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-text">
          <p className="small-title">WELCOME TO</p>

          <h2>
            Student <span>Profile</span>
          </h2>

          <p>
            Explore student information, academic details, courses and profiles
            in one place.
          </p>

          <div className="hero-buttons">
            <a href="/Profiles">View Profiles</a>
            <a href="/Details">Learn More</a>
          </div>
        </div>

        <div className="hero-box">
          <h3>Student Portal</h3>
          <p>Manage and explore student information.</p>

          <div className="mini-stats">
            <div>
              <strong>03</strong>
              <span>Students</span>
            </div>

            <div>
              <strong>01</strong>
              <span>Course</span>
            </div>

            <div>
              <strong>CSE</strong>
              <span>Branch</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
