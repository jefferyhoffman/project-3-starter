import React from "react";
import "./Footer.css";
import {Share} from 'react-twitter-widgets'
import ShareLink from 'react-facebook-share-link'
const Footer = () => {
  return (
    <section className="hero-foot has-text-centered">
      <div className ='columns'>
        <div className='column is-3'>
          <p>Share on Social</p>
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
      <div className='column is-6'>
            <strong>Let's Guess</strong> <br/>
            <span>Copyright 2020</span>
       
     </div>
            </div>
    </section>
  );
};

export default Footer;
