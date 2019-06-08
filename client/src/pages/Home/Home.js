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

    );  
  }
} 