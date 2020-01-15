import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";
import "./style.css";
import IndexNav from '../../components/IndexNAV';

const FAQsPage = () => {
    return (
        <div className='mainBodyColorFAQ'>
            <React.Fragment>
                <IndexNav />
                <MDBContainer>
                    <MDBRow>
                        <MDBCol className='textFAQ'>
                            <div className='FAQBody rounded'>
                            <p className="question"><span className='QA'>Q:</span> Why us?</p>
                            <p className='answer'><span className='QA'>A:</span> Because we are the most comprehensive and free source for a professional grade business card.</p>
                            <p className="question"><span className='QA'>Q:</span> How do I create my business card?</p>
                            <p className='answer'><span className='QA'>A:</span> First, sign up and create a unique login (don’t worry, our sign up system is completely protected and had been vetted by top security experts). Next, sign in. After you sign in, you will be redirected to our user dashboard page. From there, click on the design studio tap. You will be directed to fill out a form with the information you want to appear on the business card. Once you will out the information and click submit, you will have to pick one of our impressive templates for your business card. Lastly, you will be able to print your business card!!!</p>
                            <p className="question"><span className='QA'>Q:</span> Can I make more than one business card?</p>
                            <p className='answer'><span className='QA'>A:</span> Yes! You are able to make as many as you want!</p>
                            <p className="question"><span className='QA'>Q:</span> Will I be charged for this?</p>
                            <p className='answer'><span className='QA'>A:</span> No. We strive to provide high quality business card at no cost.</p>
                            <p className="question"><span className='QA'>Q:</span> What if I am not satisfied with my business card?</p>
                            <p className='answer'><span className='QA'>A:</span> You can simply start over and make a new one at no charge.</p>
                            <p className="question"><span className='QA'>Q:</span> Can anyone create a business card?</p>
                            <p className='answer'><span className='QA'>A:</span> Yes!</p>
                            <p className="question"><span className='QA'>Q:</span> How did you create this?</p>
                            <p className='answer'><span className='QA'>A:</span> Our site was created completely in React.js using MDB React for styling.</p>
                            <p className="question"><span className='QA'>Q:</span> Our site was created completely in React.js using MDB React for styling.</p>
                            <p className='answer'><span className='QA'>A:</span> Yes. We are always happy to hear from visitors to our site. Your feedback helps us enhance the user experience and assure that our site truly becomes the best free source of professional business cards. </p>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </React.Fragment>
        </div>
    )
}

export default FAQsPage;