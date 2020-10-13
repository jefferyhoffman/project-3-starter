import React, { useEffect, useState } from 'react';
import API from '../../lib/API';


const styles = {
    button: {
        marginTop: "-40px",
        paddingTop: "50px"
    }
}

function HomeButton() {

    const [email, setEmail] = useState("")
    const [emailSent, setEmailSent] = useState(false)

    const handleOnSubmit = event => {
        event.preventDefault();
        console.log(email)
        setEmailSent(true)
        API.Sendgrid.sendEmail(email)
            .then(data => {
                console.log(data)
                setEmail("")
            })
            .catch(err => console.log(err));
    }




    return (
        <section className="container">
            <div className="columns">
                <div className="column"></div>
                <div className="column">
                    {emailSent ? <div>
                        Email Sent
                    </div> : null}
                    <form onSubmit={e => handleOnSubmit(e)}>
                        <div className="" style={styles.button}>
                            <div class="control has-icons-left has-icons-right" >

                                <input class="input is-medium" type="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                                <span class="icon is-small is-left">
                                    <i class="fas fa-envelope"></i>
                                </span>
                                <span class="icon is-small is-right">
                                    <i class="fas fa-check"></i>
                                </span>
                            </div>
                            <button class="button is-small is-light" type="submit" >Join Our Email List</button>

                        </div>
                    </form>
                </div>
                <div className="column"></div>
            </div>
        </section>
    )
}

export default HomeButton;