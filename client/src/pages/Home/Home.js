// import React, { Component } from 'react';
// // import '../Home/style.css';
// import Register from '../Register/Register'

// class HomePage extends Component {
//   render() {
//     return (
//       <div className="row">
     
//       </div>
//     );
//   }
// }

// export default HomePage;


import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';
import '../../cssPages/images/aeration.png';

export default class Test extends React.Component {

  componentWillMount() {
    this.setState({
      children: [],
      activeItemIndex: 0,
    });

    setTimeout(() => {
      this.setState({
        // children: createChildren(20),
      })
    }, 100);
  }

  createChildren = n => range(n).map(i => <div key={i} style={{ height: 300, background: '#333' }}>{i}</div>);

  changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });

  render() {
    const {
      activeItemIndex,
      children,
    } = this.state;

    return (
      <div>
      <ItemsCarousel
        // Placeholder configurations
        enablePlaceholder
        numberOfPlaceholderItems={5}
        minimumPlaceholderTime={1000}
        placeholderItem={<div style={{ height: 300, background: '#ffff'}}></div>}

        // Carousel configurations
        numberOfCards={3}
        gutter={12}
        showSlither={true}
        firstAndLastGutter={true}
        freeScrolling={false}

        // Active item configurations
        requestToChangeActive={this.changeActiveItem}
        activeItemIndex={activeItemIndex}
        activePosition={'center'}

        chevronWidth={24}
        rightChevron={'>'}
        leftChevron={'<'}
        outsideChevron={false}
      >
        {children}
      </ItemsCarousel>

      <br />
      <div className="row">
      <div className="col-2"></div>
      <div className="col-8 flex-center">
<div className="jumbotron pt-3">
<h2>Check Out Some of Our Reviews:</h2>
<br />
<div className="row">
<div className="col-2"></div>
<div className="col-8">
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <h3>Greenscapes sure knows what they're doing! They always get the job done and never leave my yard lookin' a mess, 
        like I tell all my neighbors, call Greenscapes if your yard needs a good mowin'!
        <br />
        -Dylbob, Hickory 
      </h3>
    </div>
    <div class="carousel-item">
    <h3>
    Ever since I started using Greenscapes my yard has never looked better!  
    I'll never go back to doing my own yardwork again! Grenscapes makes yard upkeep a breeze and has saved my grass!
        <br />
        -CoCo, Huntersville
      </h3>
    </div>
    <div class="carousel-item">
    <h3>As a man who loves to cut his grass I have to admit, Greenscapes sure does a better job than I ever did.  Even the Mrs.'s says so!
        <br />
        -Gerard, Dillworth 
      </h3>
    </div>
    <div class="carousel-item">
    <h3>10/10 would recommend, Old man Pete next door's always asking why my yard looks so good and I keep telling him, Call Greenscapes, they sure know how to cut lawns and stuff!
        <br />
        -Ronnie, Charlotte 
      </h3>
    </div>
    <div class="carousel-item">
    <h3>Taking care of my lawn was really getting in the way of maintaining my social media presence. One call to Greenscapes and now my yard has never looked better. I can focus on getting more insta-followers instead!
        <br />
        -Tayler, South Charloote
      </h3>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>
<div className="col-2"></div>
</div>
</div>
</div>
</div>


      
      </div>
      
    );  
  }
} 