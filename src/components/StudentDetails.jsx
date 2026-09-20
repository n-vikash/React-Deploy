import React from "react";
import "../App.css";
import { useParams } from "react-router-dom";
import { students } from "../data/data";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const StudentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const student = students.find((user) => user.id === Number(id));

  console.log(student);

  if (!student) {
    return (
      <main className="student-details-page">
        <div className="student-not-found">
          <h1>Student Not Found</h1>
          <p>No student exists with ID {id}.</p>
        </div>
      </main>
    );
  }

  return (
    <>
      <button className="back">
        <Link className="back-link" onClick={() => navigate(-1)}>
          ← back
        </Link>
      </button>
      <main className="student-details-page">
        <div className="student-details-container">
          <div className="student-profile">
            <img
              src={student.src}
              alt={student.name}
              className="student-profile-image"
            />

            <div className="student-profile-info">
              <h1>{student.name}</h1>
              <p>Student Profile</p>
            </div>
          </div>

          <div className="student-information">
            <h2>Student Information</h2>

            <div className="student-info-grid">
              <div className="info-item">
                <span>ID</span>
                <strong>{student.id}</strong>
              </div>

              <div className="info-item">
                <span>Name</span>
                <strong>{student.name}</strong>
              </div>

              <div className="info-item">
                <span>Age</span>
                <strong>{student.age}</strong>
              </div>

              <div className="info-item">
                <span>Course</span>
                <strong>{student.course}</strong>
              </div>

              <div className="info-item">
                <span>Branch</span>
                <strong>{student.branch}</strong>
              </div>

              <div className="info-item">
                <span>College</span>
                <strong>{student.college}</strong>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default StudentDetails;
