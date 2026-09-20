import { useContext } from "react";
import { userContext } from "../components/userContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(userContext);
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
      <div className="details-page">
        <div className="page-heading">
          <p>STUDENT INFORMATION</p>
          <h2>Academic Details</h2>
          <span>Information about our student community</span>
        </div>

        <div className="details-grid">
          <div className="info-box">
            <div className="info-icon">01</div>
            <h3>Personal Information</h3>
            <p>View student names, age and personal profile information.</p>
          </div>

          <div className="info-box">
            <div className="info-icon">02</div>
            <h3>Academic Information</h3>
            <p>Explore courses, branches and academic information.</p>
          </div>

          <div className="info-box">
            <div className="info-icon">03</div>
            <h3>College Information</h3>
            <p>Find information about the student's college and education.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
