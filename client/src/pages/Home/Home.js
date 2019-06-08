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
          placeholderItem={<div style={{ height: 300, background: '#ffff' }}></div>}

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
                      <div class='card-review' style={{ border: 'none' }}>
                          <img src="https://i.warosu.org/data/g/img/0649/00/1519766267404.jpg" style={{ width: '160px', float: 'left', marginRight: '15px'}}></img>
                      <h4 style={{ textAlign: 'left' }}>Greenscapes sure knows what 
                      <br />they're doing! They always get the 
                      <br />job done and never leave my yard lookin' a mess. Like I tell all my
                      <br />neighbors, be sure to call  
                      <br />Greenscapes if your yard needs a 
                      <br />good mowin'! -Dylbob, Hickory
                      </h4>
                      </div>
                      </div>
                      <div class="carousel-item">
                      <div class='card-review' style={{ border: 'none' }}>
                          <img src="https://barkpost.com/wp-content/uploads/2014/09/10598265_725714694166199_1606666690_n.jpg" style={{ width: '160px', float: 'left', marginRight: '15px'}}></img>
                        <h4 style={{ textAlign: 'left' }}>
                          Ever since I started using 
                          <br />Greenscapes my yard has never 
                          <br />looked better! I'll never go 
                          <br />back to doing my own yardwork 
                          <br />again! Grenscapes makes yard 
                          <br />upkeep a breeze and has really 
                          <br />saved my grass! -CoCo, Huntersville
                      </h4>
                      </div>
                      </div>
                      <div class="carousel-item">
                      <div class='card-review' style={{ border: 'none' }}>
                          <img src="https://www.thedailymeditation.com/wp-content/uploads/2017/06/man-lying-down-in-field-doing-minful-writing.jpg" style={{ width: '160px', float: 'left', marginRight: '15px'}}></img>
                        <h4 style={{ textAlign: 'left' }}>As a man who loves to do 
                        <br />things himself I have to admit,
                        <br />Greenscapes sure does a 
                        <br />better job than I ever did. Even  
                        <br />the Mrs.'s says so! Love not having to worry about
                        <br />keeping my yard looking it's best. 
                        <br />Thanks Greenscapes! -Gerard, Dillworth
                      </h4>
                      </div>
                      </div>
                      <div class="carousel-item">
                      <div class='card-review' style={{ border: 'none' }}>
                          <img src="https://www.emmys.com/sites/default/files/styles/bio_pics_detail/public/bios/don-knotts-barney-fife-450x600.jpg?itok=Qn6J7z3J" style={{ width: '150px', float: 'left', marginRight: '15px'}}></img>
                        <h4 style={{ textAlign: 'left' }}>10/10 would recommend.
                          <br />Old man Pete next door is
                          <br />always asking why my yard 
                          <br />looks so good and I keep 
                          <br />telling him, Call Greenscapes! 
                          <br />they sure know how to cut  
                          <br />lawns and stuff!-Ronnie, Charlotte
                        </h4>
                      </div>
                      </div>
                      <div class="carousel-item">
                        <div class='card-review' style={{ border: 'none' }}>
                          <img src="http://www.tunisiesoir.com/wp-content/uploads/2018/09/180926140739_1_540x360.jpg" style={{ width: '160px', float: 'left', marginRight: '15px' }}></img>
                          <h4 style={{ textAlign: 'left' }}>My lawn was really getting
    <br />in the way of maintaining my
    <br />social media presence. One call
    <br />to Greenscapes and now my
    <br />yard has never looked better. I can focus on more
    <br /> important things like getting insta-followers 
    <br />instead! -Tayler, South Charlotte</h4>
                        </div>
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
      </div >
      
    );
  }
} 