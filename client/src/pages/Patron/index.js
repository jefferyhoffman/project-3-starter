import React, { useState } from "react";
import "./style.css";
import Navigation from "../../components/NAVBAR";
import API from "../../lib/API";
import { Redirect } from "react-router-dom";
import LOGO from "../../components/LOGO";
import Footer from "../../components/Footer";
function Patron() {
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  const [registrationError, setRegistrationError] = useState(null);
  const [whatIamLookingFor, setWhatIamLookingFor] = useState([
    { category: "" },
  ]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordChecker, setPasswordChecker] = useState("");
  const [name, setName] = useState("");
  const [keepMePosted, setKeepMePosted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== passwordChecker) {
      return setRegistrationError(
        "Please check to make sure your Password is written correctly in both fields, thank you."
      );
    }

    API.Users.create({
      email: email,
      password: password,
      name: name,
      keepMePosted: keepMePosted,
      whatIamLookingFor: whatIamLookingFor,
    })
      .then((data) => {
        setRedirectToReferrer(true);
      })
      .catch((err) => {
        setRegistrationError(
          "Something went wrong! Please check your registration form is complete and resubmit.  Thank you!"
        );
      });
  };

  if (redirectToReferrer) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="Patron">
      <LOGO />
      <Navigation />

      {registrationError ? <div>{registrationError}</div> : null}

      <form
        className="text-center border border-light p-5"
        onSubmit={(e) => handleSubmit(e)}
      >
        <p className="h4 mb-4">Patron Registration</p>
		
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          id="defaultContactFormName"
          className="form-control mb-4"
          placeholder="Name"
        />

        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="defaultContactFormEmail"
          className="form-control mb-4"
          placeholder="E-mail"
        />

        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="defaultContactFormEmail"
          className="form-control mb-4"
          placeholder="password"
        />

        <input
          onChange={(e) => setPasswordChecker(e.target.value)}
          type="password"
          id="defaultContactFormEmail"
          className="form-control mb-4"
          placeholder="password"
        />

        <div className="form-group">
          <label className="mr-2" for="keepMePosted">
            Keep Me Posted
          </label>
          <input
            onChange={(e) => setKeepMePosted(!keepMePosted)}
            name="keepMePosted"
            id="keepMePosted"
            type="checkbox"
          />
        </div>

        <input
          onChange={(e) => {
            const newArray = whatIamLookingFor;
            newArray[0].category = e.target.value;
            setWhatIamLookingFor(newArray);
          }}
          type="text"
          id="defaultContactFormEmail"
          className="form-control mb-4"
          placeholder="add a favorite category of food or produce"
        />

        <button
          className="btn btn-info btn-block #6d4c41 brown darken-1"
          type="submit"
        >
          Register!!!
        </button>
      </form>
      <Footer />
    </div>
  );
}
export default Patron;
