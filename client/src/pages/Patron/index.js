import React, { useState } from 'react';
import './style.css';
import Navigation from "../../components/NAVBAR";
import API from '../../lib/API';
import { Redirect } from 'react-router-dom';
function Patron() {
	const [ redirectToReferrer, setRedirectToReferrer ] = useState(false);
	const [ registrationError, setRegistrationError ] = useState(null);
	const [ whatIamLookingFor, setWhatIamLookingFor ] = useState([{ category: ""}]);
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ passwordChecker, setPasswordChecker ] = useState('');
	const [ name, setName ] = useState('');
	const [ keepMePosted, setKeepMePosted ] = useState(false);

	const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== passwordChecker) {
			return setRegistrationError(
				'Please check to make sure your Password is written correctly in both fields, thank you.'
			);
		}

		API.Users
			.create({
        email: email,
				password: password,
				name: name,
        keepMePosted: keepMePosted,
        whatIamLookingFor: whatIamLookingFor
      })
			.then((data) => {
				setRedirectToReferrer(true);
			})
			.catch((err) => {
				setRegistrationError(
					'Something went wrong! Please check your registration form is complete and resubmit.  Thank you!'
				);
			});
	};

	if (redirectToReferrer) {
		return <Redirect to="/login" />;
	}

	return (
    <>
    <Navigation />
		<main className="body animated slideInLeft">
			<img
				src="farmFreshMarketLogo2.png"
				className="img-fluid"
				alt="Farm Fresh Market Logo 2"
				id="farmFreshMarketLogo2"
			/>

			<nav className="navbar navbar-light #388e3c green darken-2 text-white">
				<a className="navbar-brand text-white" href="#">
					Farm Fresh Market
				</a>

				<button
					className="navbar-toggler toggler-example #1b5e20 green darken-4 darken-3 text-white"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent41"
					aria-controls="navbarSupportedContent41"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="white-text">
						<i className="fas fa-bars fa-1x" />
					</span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent41">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<a className="nav-link text-white" href="#">
								Home <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" href="#">
								Map
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" href="#">
								Farmers
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" href="#">
								Requests
							</a>
						</li>
					</ul>
				</div>
			</nav>

			{registrationError ? <div>{registrationError}</div> : null}


			<form className="text-center border border-light p-5" onSubmit={e => handleSubmit(e)}>
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
					onChange={e => {
            const newArray = whatIamLookingFor
            newArray[0].category = e.target.value
            setWhatIamLookingFor(newArray)
          }}
					type="text"
					id="defaultContactFormEmail"
					className="form-control mb-4"
					placeholder="add a favorite category of food or produce"
				/>

				<button className="btn btn-info btn-block #6d4c41 brown darken-1" type="submit">
					Register!!!
				</button>
			</form>

			<footer className="page-footer font-small #388e3c green darken-2 animated slideInLeft">
				<div className="footer-copyright text-center py-4 font-weight-bold">
					© 2020 Copyright:
					<a href="https://github.com/ccollins1975/farm-fresh-market">Farm Fresh Market</a>
					and powered by Charlotte Agricultural Tracking Services (C.A.T.S.)
				</div>
			</footer>

			
		</main>
    </>
	);
}
export default Patron;
