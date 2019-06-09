import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';
// import { url } from 'inspector';
import image1 from '../../cssPages/ImageGallery/trimming.png';
import image2 from '../../cssPages/ImageGallery/pineneedles.png';
import image3 from '../../cssPages/ImageGallery/aeration.png';
import image4 from '../../cssPages/ImageGallery/reseeding.png';
import image5 from '../../cssPages/ImageGallery/banner.png';


export default class Test extends React.Component {
  state = {
    images: [
      '../../cssPages/ImageGallery/trimming.png',
      '../../cssPages/ImageGallery/pineneedles.png',
      '../../cssPages/ImageGallery/aeration.png',
      '../../cssPages/ImageGallery/reseeding.png'
    ]
  }


  componentWillMount() {
    this.setState({
      children: [],
      images: [],
      activeItemIndex: 0,
    });

    setTimeout(() => {
      this.setState({
        //
      })
    }, 100);
  }

  createChildren = n => range(n).map(i => <div key={i} style={{ height: 300, background: this.state.images }}>{i}</div>);

  changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });

  render() {
    const {
      activeItemIndex,
      children,
    } = this.state;

    return (
      <div>

        <img src={image5} className="grass5" alt="grass" style={{ height: 300 }} />
        
        <ItemsCarousel
          // Placeholder configurations
          enablePlaceholder
          numberOfPlaceholderItems={5}
          minimumPlaceholderTime={1000}
          placeholderItem={<div style={{ height: 300, background: 'url(images[i])' }}></div>}

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

          {Array.from(new Array(10)).map((_, i) =>
            <div
              key={i}
              style={{
                height: 2,
                background: 'url(images[i])'
              }}

            />

          )}
        </ItemsCarousel>

        {/* -------------------------------------------------------------------------------------------- */}
        <img src={image1} className="grass1" alt="grass" style={{ height: 350 }} />
        <img src={image2} className="grass2" alt="grass" style={{ height: 350 }} />
        <img src={image3} className="grass3" alt="grass" style={{ height: 350 }} />
        <img src={image4} className="grass4" alt="grass" style={{ height: 350 }} />
        <br />
        <br></br>
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8 flex-center">
            <div className="jumbotron pt-3">
              <h2>Check Out Some of Our Reviews:</h2>
              <br />
              <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                  <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className='card-review' style={{ border: 'none' }}>
                          <img src="./images/waynesworld.jpg" style={{ width: '160px', float: 'left', marginRight: '15px' }}></img>
                          <h4 style={{ textAlign: 'left' }}>Greenscapes sure knows what
                      <br />they're doing! They always get the
                      <br />job done and never leave my yard lookin' a mess. Like I tell all my
                      <br />neighbors, be sure to call
                      <br />Greenscapes if your yard needs a
                      <br />good mowin'! -Dylbob, Hickory
                      </h4>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className='card-review' style={{ border: 'none' }}>
                          <img src="./images/Dougthepug.jpg" style={{ width: '160px', float: 'left', marginRight: '15px' }}></img>
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
                      <div className="carousel-item">
                        <div className='card-review' style={{ border: 'none' }}>
                          <img src="./images/maninfield.jpg" style={{ width: '160px', float: 'left', marginRight: '15px' }}></img>
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
                      <div className="carousel-item">
                        <div className='card-review' style={{ border: 'none' }}>
                          <img src="./images/barneyfife.jpg" style={{ width: '150px', float: 'left', marginRight: '15px' }}></img>
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
                      <div className="carousel-item">
                        <div className='card-review' style={{ border: 'none' }}>
                          <img src="./images/instamodel.jpg" style={{ width: '160px', float: 'left', marginRight: '15px' }}></img>
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
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
                <div classNameName="col-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div >

    );
  }
} 
