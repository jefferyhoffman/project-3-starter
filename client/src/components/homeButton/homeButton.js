import React, { Component } from 'react';
import API from '../../lib/API'


const styles = {
    button: {
        marginTop: "-40px",
        paddingTop: "50px"
    }
}

export default class HomeButton extends Component {

    constructor(props) {
        super(props)

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        
        this.state = {
            email: ""
        }
    }
    onChangeUserEmail(e) {
        this.setState({ email: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()

        const userObject = {
            email: this.state.email
        };

        API.Sendgrid.sendEmail()
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ email: '' })
    }


render() {
        return (
            <section className="container">
                <div className="columns">
                    <div className="column"></div>
                    <div className="column">
                        <div className="" style={styles.button} onSubmit={this.onSubmit}>
                            <div class="control has-icons-left has-icons-right" >
                                <input class="input is-medium" type="email" placeholder="Email" value={this.email} onChange={this.onChangeUserEmail}/>
                                <span class="icon is-small is-left">
                                    <i class="fas fa-envelope"></i>
                                </span>
                                <span class="icon is-small is-right">
                                    <i class="fas fa-check"></i>
                                </span>
                            </div>
                            <button class="button is-small is-light" type="submit" >Join Our Email List</button>
                        </div>
                    </div>
                    <div className="column"></div>
                </div>
            </section>
        )
    }
}
