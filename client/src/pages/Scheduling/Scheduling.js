import React, { Component } from 'react';
import Calendar from 'react-calendar';
import './Scheduling.css';
import '../../components/Form/Form.css';
import Modal from '../../components/Modal/modal.js';
import Checkout from '../Checkout/Checkout';

class Schedule extends Component {
	state = {
		date: new Date(),
		showModal: false,
	}

	handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        }, 
        () => {
            // Calculation to determine total
            var total = 0;
            console.log(this.state.premiumPckg);
            if (this.state.premiumPckg) {
                total += 350
            }
            if (this.state.upgradedPckg) {
                total += 200
            }
            if (this.state.standardPckg) {
                total += 100
            }
            if (this.state.aeration) {
                total += 50
            }
            if (this.state.reseeding) {
                total += 50
            }
            if (this.state.trimming) {
                total += 50
            }
            if (this.state.pineNeedles) {
                total += 50
            }
            if (this.state.leafRemoval) {
                total += 50
            }
            if (this.state.pesticide) {
                total += 50
            }
            if (this.state.topiary) {
                total += 50
            }
            if (this.state.pruning) {
                total += 50
            }
            if (this.state.soil) {
                total += 50
            }
            if (this.state.mulch) {
                total += 50
            }

            this.setState({
                total: total
            });
            console.log(total);
		});
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
						<Modal {...this.state} onChange={this.handleServiceChange}/>
						{/* <Checkout {...this.state} /> */}
					</div>
				</div>
			</div>
		)
	}
}


export default Schedule;
