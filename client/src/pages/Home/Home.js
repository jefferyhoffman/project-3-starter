import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';
// import { url } from 'inspector';
import image1 from '../../cssPages/ImageGallery/trimming.png';
import image2 from '../../cssPages/ImageGallery/pineneedles.png';
import image3 from '../../cssPages/ImageGallery/aeration.png';
import image4 from '../../cssPages/ImageGallery/removal.png';
import image5 from '../../cssPages/ImageGallery/banner.png';
import image6 from '../../cssPages/ImageGallery/topiary.png';
import image7 from '../../cssPages/ImageGallery/reseeding.png';
import image8 from '../../cssPages/ImageGallery/pruning.png';
import image9 from '../../cssPages/ImageGallery/offer.png';



export default class Test extends React.Component {
  state = {
    images: [
      '../../cssPages/ImageGallery/trimming.png',
      '../../cssPages/ImageGallery/pineneedles.png',
      '../../cssPages/ImageGallery/aeration.png',
      '../../cssPages/ImageGallery/removal.png'
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
        <div className="row">
          <div className="col-12">
            <img src={image5} className="grass5 img-fluid img-responsive" alt="grass" />
          </div>
        </div>
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

          <h1>See Our Work</h1>
        </ItemsCarousel>

        {/* -------------------------------------------------------------------------------------------- */}

        <img src={image1} className="grass1" alt="grass" />
        <img src={image2} className="grass2" alt="grass" />
        <img src={image3} className="grass3" alt="grass" />
        <img src={image4} className="grass4" alt="grass" />
        <br />
        <img src={image6} className="grass6" alt="grass" />
        <img src={image7} className="grass7" alt="grass" />
        <img src={image8} className="grass8" alt="grass" />
        <img src={image9} className="grass9" alt="grass" />
        <br />
        <br></br>
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8 flex-center">
            <div className="jumbotron pt-3 smallReview">
              <h2>Check Out Some of Our Reviews</h2>
              <br />
              <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                  <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className='card-review' style={{ border: 'none' }}>
                          <img src="./images/waynesworld.jpg" className="imgReviewer" style={{ width: '160px', float: 'left', marginRight: '15px', marginBottom: '100px'}}></img>
                          <h4 style={{ textAlign: 'left' }}>Greenscapes sure knows what
                      <br />they're doing! They always get the
                      <br />job done and never leave my yard lookin' a mess. Like I tell all my
                      <br />neighbors, be sure to call
                      <br />Greenscapes if your yard needs a 
                      <br />good mowin'!-Dylbob, Hickory
                      </h4>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className='card-review' style={{ border: 'none' }}>
                          <img src="./images/Dougthepug.jpg" className="imgReviewer" style={{ width: '160px', float: 'left', marginRight: '15px', marginBottom: '100px' }}></img>
                          <h4 style={{ textAlign: 'left' }}>
                            Ever since I started using
                          <br />Greenscapes my yard has never
                          <br />looked better! I'll never go
                          <br />back to doing my own yardwork
                          <br />again! Greenscapes makes yard
                          <br />upkeep a breeze and has really
                          <br />saved my grass!
                          <br />-CoCo, Huntersville
                      </h4>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className='card-review' style={{ border: 'none' }}>
                          <img src="./images/maninfield.jpg" className="imgReviewer" style={{ width: '160px', float: 'left', marginRight: '15px', marginBottom: '100px'}}></img>
                          <h4 style={{ textAlign: 'left' }}>As a man who loves to do
                        <br />things himself I have to admit,
                        <br />Greenscapes sure does a
                        <br />better job than I ever did. Even
                        <br />the Mrs.'s says so! I love not having to 
                        <br />worry about keeping my yard looking 
                        <br />its best. Thanks Greenscapes!
                        <br />-Gerard, Dilworth
                      </h4>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className='card-review' style={{ border: 'none' }}>
                          <img src="./images/barneyfife.jpg" className="imgReviewer" style={{ width: '150px', float: 'left', marginRight: '15px', marginBottom: '100px'}}></img>
                          <h4 style={{ textAlign: 'left' }}>10/10 would recommend.
                          <br />Old man Pete next door is
                          <br />always asking why my yard
                          <br />looks so good and I keep
                          <br />telling him, call Greenscapes!
                          <br />they sure know how to cut
                          <br />lawns and stuff!
                          <br />-Ronnie, Charlotte
                        </h4>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className='card-review' style={{ border: 'none' }}>
                          <img src="./images/instamodel.jpg" className="imgReviewer" style={{ width: '160px', float: 'left', marginRight: '15px', marginBottom: '100px' }}></img>
                          <h4 style={{ textAlign: 'left' }}>My lawn was really getting
    <br />in the way of maintaining my
    <br />social media presence. One call
    <br />to Greenscapes and now my
    <br />yard has never looked better. I can focus on more important things like getting insta-followers instead!
    <br />-Tayler, South Charlotte</h4>
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
