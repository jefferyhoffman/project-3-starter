import React, { Component } from 'react';
import Calendar from 'react-calendar';
import './Scheduling.css';
import '../../components/Form/Form.css';
import Modal from '../../components/Modal/modal.js';
import Checkout from '../Checkout/Checkout';

class Schedule extends Component {

	componentDidMount() {

	}

	render() {
		let { date, showModal } = this.props.calendarInfo;
		console.log(this.props);
		return (
			<div>
				<Calendar
					onChange={this.props.handleServiceChange}
					value={date}
				/>
				<div id="myModal" className="modal" style={showModal ? { display: 'block' } : { display: 'none' }}>
					<div className="modal-content">
						<span className="close" onClick={this.props.closeModal}>&times;</span>
						<Modal {...this.props.calendarInfo} onChange={this.handleServiceChange} />
						{/* <Checkout {...this.state} /> */}
					</div>
				</div>
			</div>
		)
	}
}


export default Schedule;
