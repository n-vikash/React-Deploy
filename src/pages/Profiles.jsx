import "../App.css";
import { map } from "lodash-es";
import { students } from "../data/data";
import { Link } from "react-router-dom";
const Profiles = () => {
  return (
    <div className="profiles-page">
      <div className="page-heading">
        <p>OUR STUDENTS</p>
        <h2>Student Profiles</h2>
        <span>Select a student to view their complete profile</span>
      </div>

      <ul className="profiles">
        {map(students, (ele) => (
          <li className="profile-name" key={ele.id}>
            <Link to={`/Profiles/${ele.id}`}>{ele.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profiles;
