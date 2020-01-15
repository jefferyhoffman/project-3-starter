import React, { Component } from 'react';
import {MDBRow, MDBCol, MDBContainer} from "mdbreact";

const FAQsPage = () => {
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol>
                    <p>Question: Why us?</p>
                    <p>Answer: Because we are the most comprehensive and free source for a professional grade business card.</p>
                    <p>Question: How do I create my business card?</p>
                    <p>Answer: First, sign up and create a unique login (don’t worry, our sign up system is completely protected and had been vetted by top security experts). Next, sign in. After you sign in, you will be redirected to our user dashboard page. From there, click on the design studio tap. You will be directed to fill out a form with the information you want to appear on the business card. Once you will out the information and click submit, you will have to pick one of our impressive templates for your business card. Lastly, you will be able to print your business card!!!</p>
                    <p>Question: Can I make more than one business card?</p>
                    <p>Answer: Yes! You are able to make as many as you want!</p>
                    <p>Question: Will I be charged for this?</p>
                    <p>Answer: No. We strive to provide high quality business card at no cost.</p>
                    <p>Question: What if I am not satisfied with my business card?</p>
                    <p>Answer:You can simply start over and make a new one at no charge.</p>
                    <p>Question: Can anyone create a business card?</p>
                    <p>Answer: Yes!</p>
                    <p>Question: How did you create this?</p>
                    <p>Answer: Our site was created completely in React.js using MDB React for styling.</p>
                    <p>Question: Our site was created completely in React.js using MDB React for styling.</p>
                    <p>Answer: Yes. We are always happy to hear from visitors to our site. Your feedback helps us enhance the user experience and assure that our site truly becomes the best free source of professional business cards. </p>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default FAQsPage;