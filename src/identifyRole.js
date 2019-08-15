import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function identifyRole() {
  return (
    <div className="roles">
      <h2> Are You A </h2>
      <Link to="/Register/student">
        <Button>Student</Button>
      </Link>
      <Link to="/Register/admin">
        <Button>Admin</Button>
      </Link>
    </div>
  );
}

export default identifyRole;
