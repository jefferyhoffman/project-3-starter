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
               
               
               <Share url="https://letsguess.herokuapp.com/" options={{ size: "large" }} />
               <ShareLink link='https://letsguess.herokuapp.com/'>
                  {link => (
                     <a href={link} target='_blank'></a>
                  )}
               </ShareLink>
               <iframe src="https://www.facebook.com/plugins/share_button.php?href=http%3A%2F%2Fletsguess.herokuapp.com%2F&layout=button&size=large&width=77&height=28&appId" width="77" height="28" style={{border:"none",overflow:"hidden" }}scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
               <p><strong>Avatars created at<a href="https://www.cartoonify.de/" target="blank"> Cartoonify</a></strong></p>
               {/* <ShareLink link='https://your-site.com/some-page'>
                  {link => (
                     <button className="button is-small is-info" href={link} target='_blank'><strong>FB</strong></button>
                  )}
               </ShareLink> */}

            </div>
         </div>
      </section>
   );
};

export default Footer;
