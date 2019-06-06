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
						<Modal {...this.props.calendarInfo}
						 onChange={this.handleServiceChange}
						 handleModalUpdate={this.props.handleModalUpdate}
						 total = {this.props.total} 
						 premiumPckg = {this.props.premiumPckg}
						 upgradedPckg = {this.props.upgradedPckg}
						 standardPckg = {this.props.standardPckg}
						 aeration = {this.props.aeration}
						 reseeding = {this.props.reseeding}
						 trimming = {this.props.trimming}
						 pineNeedles = {this.props.pineNeedles}
						 leafRemoval =  {this.props.leafRemoval}
						 pesticide = {this.props.pesticide}
						 pruning = {this.props.pruning}
						 soil = {this.props.soil}
						 mulch = {this.props.mulch}
						 />
					</div>
				</div>
			</div>
		)
	}
}


export default Schedule;
