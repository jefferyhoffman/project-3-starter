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
      <h3>thats some good mowin'!
        <br />
        -Dylbob, Hickory 
      </h3>
    </div>
    <div class="carousel-item">
    <h3>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam finibus, orci ut congue ornare, nunc quam euismod odio, at commodo purus felis sed lacus. Maecenas sit amet lectus in urna laoreet porttitor.
        <br />
        -CoCo, Huntersville
      </h3>
    </div>
    <div class="carousel-item">
    <h3>its like they cut my lawn and stuff
        <br />
        -Ronnie, Charlotte 
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