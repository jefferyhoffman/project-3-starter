import React from "react";
import "./Footer.css";
import { Share } from 'react-twitter-widgets'
import ShareLink from 'react-facebook-share-link'
const Footer = () => {
   

   return (
      <section className="hero-foot has-text-centered">
         <div className='columns'>


            <div className='column'>
               <p><strong>Let's Guess</strong></p>
               <p>&copy; Copyright 2020</p>
               
               
               <Share url="https://andrewsuzuki.com" options={{ size: "large" }} />
               <ShareLink link='https://your-site.com/some-page'>
                  {link => (
                     <a href={link} target='_blank'></a>
                  )}
               </ShareLink>
               
               <ShareLink link='https://your-site.com/some-page'>
                  {link => (
                     <button className="button is-small is-info" href={link} target='_blank'><strong>FB</strong></button>
                  )}
               </ShareLink>

            </div>
         </div>
      </section>
   );
};

export default Footer;
