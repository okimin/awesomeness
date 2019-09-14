import React, { useEffect, useState } from "react";
import { withAuthenticator } from "aws-amplify-react";
import { Auth } from "aws-amplify";

const signUpConfig = {
  header: "Register To Be Part Of The Hive",
  hideAllDefaults: true,
  defaultCountryCode: "1",
  signUpFields: [
    {
      label: "Email",
      key: "email",
      required: true,
      displayOrder: 1,
      type: "string"
    },
    {
      label: "Username",
      key: "username",
      required: true,
      displayOrder: 2,
      type: "string"
    },
    {
      label: "Password",
      key: "password",
      required: true,
      displayOrder: 3,
      type: "password"
    },
    {
      label: "Are you an Facillitator or Student?",
      key: "user_type",
      required: true,
      displayOrder: 4,
      type: "string",
      custom: true
    }
  ]
};

function App() {
  const [isStudent, updateStudentInfo] = useState(false);
  const [isFacilitator, updateFacilitatorInfo] = useState(false);
  var userType = "";
  useEffect(() => {
    /* Get the AWS credentials for the current user from Identity Pools.  */
    Auth.currentSession()
      .then(cognitoUser => {
        const {
          idToken: { payload }
        } = cognitoUser;
        /* Loop through the groups that the user is a member of */
        /* Set isStudent to true if the user is part of the STUDENTS group */
        payload["cognito:groups"] &&
          payload["cognito:groups"].forEach(group => {
            if (group === "STUDENTS") {
              updateStudentInfo(true);
              userType = "Student";
            } else if (group === "FACILITATORS") {
              updateFacilitatorInfo(true);
              userType = "Facilitator";
            }
          });
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        {(isStudent || isFacilitator) && <h1>Welcome, {userType}!</h1>}
      </header>
    </div>
  );
}

export default withAuthenticator(
  App,
  { signUpConfig },
  { includeGreetings: true }
);
