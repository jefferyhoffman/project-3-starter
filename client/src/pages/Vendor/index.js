import React, { useState } from "react";
import "./style.css";
import Navigation from "../../components/NAVBAR";
import API from "../../lib/API";
import { Redirect } from "react-router-dom";
import LOGO from "../../components/LOGO";
import Footer from "../../components/Footer";

function Vendor() {
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  const [registrationError, setRegistrationError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordChecker, setPasswordChecker] = useState("");
  const [name, setName] = useState("");
  const [keepMePosted, setKeepMePosted] = useState(false);
  const [isVendor, setIsVendor] = useState(true);
  const [vendorLocations, setVendorLocations] = useState([
    {
      name: "",
      streetAddress: "",
      city: "",
      state: "",
      zipCode: 28078,
      daysAtLocation: "",
      hoursAtLocation: "",
    },
  ]);
  const [locationCount, setLocationCount] = useState(1);
  const [allVendorProducts, setAllVendorProducts] = useState([
    { name: "", isFeatured: false },
  ]);
  const [productCount, setProductCount] = useState(1);

  const createLocationDivs = () => {
    const numArray = [];
    for (let i = 0; i < locationCount; i++) {
      numArray.push(1);
    }
    return numArray;
  };

  const createProductDivs = () => {
    const numArray = [];
    for (let i = 0; i < productCount; i++) {
      numArray.push(i);
    }
    return numArray;
  };

  const helpSetProducts = (eventValue, numVal) => {
    const newArray = allVendorProducts;
    if (newArray[numVal]) {
      newArray[numVal].name = eventValue;
    } else {
      newArray.push({ name: eventValue, isFeatured: false });
    }
    setAllVendorProducts(newArray);
  };

  const helpSetProductsFeatured = (numVal) => {
    const newArray = allVendorProducts;
    console.log(!newArray[numVal].isFeatured);
    if (newArray[numVal]) {
      newArray[numVal].isFeatured = !newArray[numVal].isFeatured;
    } else {
      newArray.push({ name: "", isFeatured: true });
    }
    setAllVendorProducts(newArray);
  };

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
      isVendor: isVendor,
      vendorLocations: vendorLocations,
      allVendorProducts: allVendorProducts,
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
    <div className="Vendor">
      <LOGO />
      <Navigation />

      {registrationError ? <div>{registrationError}</div> : null}

      <form
        onSubmit={(e) => handleSubmit(e)}
        className="text-center border border-light p-5"
        action="#!"
      >
        <p className="h4 mb-4">Vendor Registration</p>

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

        <div className="form-group">
          <label>Your Location</label>
          {/* <button onClick={(e) => setLocationCount(locationCount + 1)} className="btn btn-primary m-2">
						Add Location
					</button>
					<button onClick={(e) => setLocationCount(locationCount - 1)} className="btn btn-secondary m-2">
						Subtract Location
					</button> */}
          <div className="form-group border border-primary rounded">
            <input
              onChange={(e) => {
                const newArray = vendorLocations;
                newArray[0].name = e.target.value;
                setVendorLocations(newArray);
              }}
              className="form-control my-4"
              placeholder="Market Name"
              type="text"
            />
            <input
              onChange={(e) => {
                const newArray = vendorLocations;
                newArray[0].streetAddress = e.target.value;
                setVendorLocations(newArray);
              }}
              className="form-control my-4"
              placeholder="Street Address"
              type="text"
            />
            <input
              onChange={(e) => {
                const newArray = vendorLocations;
                newArray[0].city = e.target.value;
                setVendorLocations(newArray);
              }}
              className="form-control mb-4"
              placeholder="City"
              type="text"
            />
            <input
              onChange={(e) => {
                const newArray = vendorLocations;
                newArray[0].state = e.target.value;
                setVendorLocations(newArray);
              }}
              className="form-control mb-4"
              placeholder="State (please use state abbreviations)"
              type="text"
            />
            <input
              onChange={(e) => {
                const newArray = vendorLocations;
                newArray[0].zipCode = e.target.value;
                setVendorLocations(newArray);
              }}
              className="form-control mb-4"
              placeholder="Zip Code"
              type="number"
            />
            <input
              onChange={(e) => {
                const newArray = vendorLocations;
                newArray[0].daysAtLocation = e.target.value;
                setVendorLocations(newArray);
              }}
              className="form-control mb-4"
              placeholder="Days At Location"
              type="text"
            />
            <input
              onChange={(e) => {
                const newArray = vendorLocations;
                newArray[0].hoursAtLocation = e.target.value;
                setVendorLocations(newArray);
              }}
              className="form-control mb-4"
              placeholder="Hours At Location"
              type="text"
            />
          </div>

          {/* {locationCount > 0 ? (
						createLocationDivs().map((val) => {
							return (
								<div className="form-group border border-primary rounded">
									<input  className="form-control my-4" placeholder="Market Name" type="text" />
									<input className="form-control my-4" placeholder="Street Address" type="text" />
									<input className="form-control mb-4" placeholder="City" type="text" />
									<input
										className="form-control mb-4"
										placeholder="State (please use state abbreviations)"
										type="text"
									/>
									<input className="form-control mb-4" placeholder="Zip Code" type="number" />
									<input className="form-control mb-4" placeholder="Days At Location" type="text" />
									<input className="form-control mb-4" placeholder="Hours At Location" type="text" />
								</div>
							);
						})
					) : null} */}
        </div>

        <div className="form-group">
          <label>Your Products</label>
          <button
            onClick={(e) => setProductCount(productCount + 1)}
            className="btn btn-primary m-2"
          >
            Add Product
          </button>
          <button
            onClick={(e) => setProductCount(productCount - 1)}
            className="btn btn-secondary m-2"
          >
            Subtract Product
          </button>
          {locationCount > 0
            ? createProductDivs().map((val) => {
                return (
                  <div className="form-group border border-primary rounded">
                    <input
                      id={val}
                      onChange={(e) =>
                        helpSetProducts(e.target.value, e.target.id)
                      }
                      className="form-control my-4"
                      placeholder="Product Name"
                      type="text"
                    />
                    <label className="mr-2" for="featuredProduct">
                      Featured Product
                    </label>
                    <input
                      onChange={(e) => helpSetProductsFeatured(e.target.id)}
                      name="featuredProduct"
                      id={val}
                      type="checkbox"
                    />
                  </div>
                );
              })
            : null}
        </div>

        <button
          className="btn btn-info btn-block #6d4c41 brown darken-1"
          type="submit"
        >
          Register!!!
        </button>
      </form>
      <Footer />
    </div>

    // </>
  );
}
export default Vendor;
