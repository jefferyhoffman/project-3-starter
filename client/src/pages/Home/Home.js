import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';
// import { url } from 'inspector';
import image1 from '../../cssPages/ImageGallery/img1.png';
import image2 from '../../cssPages/ImageGallery/img2.png';



export default class Test extends React.Component {
  state = {
    images: [
      "https://placeimg.com/380/200/nature",
      "https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
      "https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2201&q=80"
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
        <img src={image1} className="grass1" alt="grass" style={{ height: 550 }} />
        <img src={image2} className="grass2" alt="grass" style={{ height: 550 }} />
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
                  <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <h3>thats some good mowin'!
        <br />
                          -Dylbob, Hickory
      </h3>
                      </div>
                      <div className="carousel-item">
                        <h3>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam finibus, orci ut congue ornare, nunc quam euismod odio, at commodo purus felis sed lacus. Maecenas sit amet lectus in urna laoreet porttitor.
        <br />
                          -CoCo, Huntersville
      </h3>
                      </div>
                      <div className="carousel-item">
                        <h3>its like they cut my lawn and stuff
        <br />
                          -Ronnie, Charlotte
      </h3>
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
                <div className="col-2"></div>
              </div>
            </div>
          </div>
        </div>


      </div>

    );
  }
} 
