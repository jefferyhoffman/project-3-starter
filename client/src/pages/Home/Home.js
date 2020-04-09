import React from 'react';
import ArtistCard from "../../components/ArtistCard/ArtistCard"
import "./Home.css"

function HomePage(props) {
 

  
    return (<div>
      <div className="row">
        <div className="col">

          <div className="jumbotron">
            <h1 className="display-4">Baton Pass!</h1>
            <p className="lead">instruction on what to do/or what the site is about</p>
            <hr className="my-4" />
            {/* <p>*some optional text</p>
            <a className="btn btn-lg" href="/" role="button">Login/Signup</a> */}
          </div>
        </div>
      </div>

      <div className="row ml-3">
          {props.homeGallery.map(homeGal =>
            <ArtistCard
            key={homeGal.artist}
            title={homeGal.title}
            artist={homeGal.artist}
            image={homeGal.image}
            caption ={homeGal.caption} 
             />

          )}
        
      </div>
      

    </div>
    );
  }


export default HomePage;
