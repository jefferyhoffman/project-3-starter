import React, { Component, useEffect } from "react";

const styles = {
    forum: {
      fontSize: "30px",
      marginRight: "50px",
    },
    forumHead: {
        margintop: "50px",
        marginLeft: "-10px"
    },
    forumLeft: {
        marginLeft: "-100px",
      
    },
    ForumBody: {
        fontSize: "40px"
    }
}
    
class Community extends Component {
    render() {
      return (
          <div>
        <article className="media" style={styles.forumBody}>
        <figure className="media-left" style={styles.forumLeft}>
          <p className="image is-64x64">
            <img src="https://randomuser.me/api/portraits/women/24.jpg"/>
          </p>
        </figure>
        <div className="media-content" style={styles.forum}>
          <div className="content">
            <p style={styles.forumHead}>
              <strong>Barbara Middleton</strong>
              <br/>
              <p style={styles.forum}> </p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
              <br/>
              <small><a>Like</a> · <a>Reply</a> · 3 hrs</small>
            </p>
          </div>
      
          <article className="media">
            <figure className="media-left" style={styles.forumLeft}>
              <p className="image is-48x48">
                <img src="https://randomuser.me/api/portraits/men/46.jpg"/>
              </p>
            </figure>
            <div className="media-content">
              <div className="content">
                <p style={styles.forumHead}>
                  <strong>Sean Brown</strong>
                  <br/>
                  Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam blandit nisl a nulla sagittis, a lobortis leo feugiat.
                  <br/>
                  <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
                </p>
              </div>
      
              <article className="media">
                Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu lorem cursus ullamcorper sit amet nec massa.
              </article>
      
              <article className="media">
                Morbi vitae diam et purus tincidunt porttitor vel vitae augue. Praesent malesuada metus sed pharetra euismod. Cras tellus odio, tincidunt iaculis diam non, porta aliquet tortor.
              </article>
            </div>
          </article>
      
          <article className="media">
            <figure className="media-left" style={styles.forumLeft}>
              <p className="image is-48x48">
                <img src="https://randomuser.me/api/portraits/women/40.jpg"/>
              </p>
            </figure>
            <div className="media-content">
              <div className="content">
                <p  style={styles.forumHead}>
                  <strong>Kayli Eunice </strong>
                  <br/>
                  Sed convallis scelerisque mauris, non pulvinar nunc mattis vel. Maecenas varius felis sit amet magna vestibulum euismod malesuada cursus libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus lacinia non nisl id feugiat.
                  <br/>
                  <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
                </p>
              </div>
            </div>
          </article>
        </div>
      </article>
      <article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
            <img src="https://randomuser.me/api/portraits/women/68.jpg"/>
          </p>
        </figure>
        <div className="media-content">
          <div className="field">
            <p className="control" style={styles.forum}>
              <textarea className="textarea" placeholder="Add a comment..."></textarea>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button className="button is-success is-light">Post comment</button>
            </p>
          </div>
        </div>
      </article>
      </div>
      );
    }
  }
  
  export default Community;




