import React from "react";
import { useState } from "react";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const [showUserData, setShowUserData] = useState(false);

  const updateFirstName = (e) => {
    setFirstName(e?.target?.value);
  };
  const updateSurname = (e) => {
    setSurname(e?.target?.value);
  };
  const updateEmail = (e) => {
    setEmail(e?.target?.value);
  };
  const updatePassword = (e) => {
    setPassword(e?.target?.value);
  };

  let setData = () => {
    let userData = {
      FirstName: firstName,
      Surname: surname,
      Email: email,
      Password: password,
    };
    localStorage.setItem("userDetails", JSON.stringify(userData));

    // setShowUserData(true);
  };
  // getting data from local storage
  let getData = JSON.parse(localStorage.getItem("userDetails")) || {};

  return (
    <div className="container">
      <div className="row d-flex justify-content-center my-4">
        <div className="col-md-4">
          <div className="">
            <h1 className="display-2 fw-bold" style={{ color: "blue" }}>
              facebook
            </h1>
            <div
              style={{ backgroundColor: "#ffffff" }}
              className="py-3 rounded-3"
            >
              <h4 className="fw-bold">Create a new account</h4>
              <p>It's quick and easy.</p>
              <hr />
              <form className="row g-3 px-2">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      aria-label="First name"
                      onChange={(e) => updateFirstName(e)}
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Surname"
                      aria-label="Surname"
                      onChange={(e) => updateSurname(e)}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="Mobile nummber or email address"
                    onChange={(e) => updateEmail(e)}
                  />
                </div>
                <div className="col-12">
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword4"
                    placeholder="New password"
                    onChange={(e) => updatePassword(e)}
                  />
                </div>

                {/* <div className="form-group">
                  <p className="text-start mb-0">Date of Birth ?</p>
                  <div className="row">
                    <div className="col">
                      <select className="form-control" id="dobMonth">
                        <option value="" selected disabled>
                          Month
                        </option>
                        <option value="01">January</option>
                        <option value="02">February</option>
                        <option value="03">March</option>
                        <option value="04">April</option>
                        <option value="05">May</option>
                        <option value="06">June</option>
                        <option value="07">July</option>
                        <option value="08">August</option>
                        <option value="09">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                      </select>
                    </div>
                    <div className="col">
                      <select className="form-control" id="dobDay">
                        <option value="" selected disabled>
                          Day
                        </option>
                      </select>
                    </div>
                    <div className="col">
                      <select className="form-control" id="dobYear">
                        <option value="" selected disabled>
                          Year
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="input-group">
                  <div className="row">
                    <div className="col">
                      <div
                        className="col input-group-text"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          backgroundColor: "#fff",
                        }}
                      >
                        <label htmlFor="" className="pe-4">
                          Female
                        </label>
                        <input
                          className="form-check-input mt-0"
                          type="radio"
                          name="gender"
                          value=""
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div
                        className="col input-group-text"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          backgroundColor: "#fff",
                        }}
                      >
                        <label htmlFor="" className="pe-4">
                          Male
                        </label>
                        <input
                          className="form-check-input mt-0"
                          type="radio"
                          name="gender"
                          value=""
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div
                        className="col input-group-text"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          backgroundColor: "#fff",
                        }}
                      >
                        <label htmlFor="" className="pe-4">
                          Custom
                        </label>
                        <input
                          className="form-check-input mt-0"
                          type="radio"
                          name="gender"
                          value=""
                        />
                      </div>
                    </div>
                  </div>
                </div> */}

                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-success px-5 fs-5 fw-700"
                    onClick={setData}
                  >
                    Sign up
                  </button>
                </div>
                <div className="col-12">
                  <a className="text-decoration-none fs-5" href="/">
                    Already have an account?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* UserData */}
      <div className="row">
        <div className="text-start">
          <h3>User Data :</h3>
          <ul className="list-styled">
            <li>{getData.FirstName}</li>
            <li>{getData.Surname}</li>
            <li>{getData.Email}</li>
            <li>{getData.Password}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Signup;
