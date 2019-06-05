import React, { Component } from 'react';
import Calendar from 'react-calendar';
import './Scheduling.css';
import '../../components/Form/Form.css';
import Modal from '../../components/Modal/modal.js';

class Schedule extends Component {
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
			{/* <Form></Form> */}
			<Modal></Modal>
						{/* <p>{this.state.modalMessage}</p>
						{data.map(info =>
							<Info {...info} />)} */}

					</div>
				</div>
			</div>
		)
	}
}


export default Schedule;
