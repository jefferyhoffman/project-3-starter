import React, { Component } from 'react';
import Calendar from 'react-calendar';
import './Scheduling.css';
import '../../components/Form/Form.css';
// import Form from '../../components/Form/Form.js';
import Services from '../../components/Services/Services.js';
import '../../components/Services/Services.css'



// const data = [
// 	{ service: 'Lawn Maintenance', price: '+ $50.00'},
// 	{ service: 'Aeration', price: '+ $50.00'},
// 	{ service: 'Seed/Fertilizer', price: '+ $50.00'},
// 	{ service: 'Tree/Bush Trimming', price: '+ $50.00'},
// 	{ service: 'Pine Needles', price: '+ $50.00'},
// 	{ service: 'Leaf Removal', price: '+ $50.00'},
// 	{ service: 'Planting', price: '+ $50.00'},
// 	{ service: 'Soil Testing', price: '+ $50.00'},
// 	{ service: 'Pesticide Treatments', price: '+ $50.00'},
// ];

// const Info = props =>
// 	<div className='pure-u-1-3'>
// 		<h2>{props.service}</h2>
// 		<p>{props.price}</p>
// 	</div>



class App extends Component {
	state = {
		date: new Date(),
		showModal: false,
		// modalMessage: 'loading...'
	}

	componentDidMount() {

	}

	onChange = (date) => {
		this.setState({ date, showModal: true })
	}

	closeModal = () => {
		this.setState({
			showModal: false
		})
	}


	render() {
		return (
			<div>
				<Calendar
					onChange={this.onChange}
					value={this.state.date}
				/>
				<div id="myModal" className="modal" style={this.state.showModal ? { display: 'block' } : { display: 'none' }}>
					<div className="modal-content">
						<span className="close" onClick={this.closeModal}>&times;</span>
						<Services></Services>
						{/* <p>{this.state.modalMessage}</p>
						{data.map(info =>
							<Info {...info} />)} */}

					</div>
				</div>
			</div>
		)
	}
}


export default App;
