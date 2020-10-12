import React from "react";
import ReactDOM from 'react-dom';
import { MDBRow } from "mdbreact";
import '../Testsomething/this.css'

class MasonryPage extends React.Component {
  constructor() {
    super();

    this.MasonryRef = React.createRef();
  }

  componentDidMount() {
    this.arrangeMasonry();
  }

  arrangeMasonry = () => {
    const numCols = 3;
    const colHeights = Array(numCols).fill(0);
    const container = ReactDOM.findDOMNode(this.MasonryRef.current);

    Array.from(container.children).forEach((child, i) => {
      const order = i % numCols;
      child.style.order = order;
      colHeights[order] += parseFloat(child.clientHeight);
    })
    container.style.height = Math.max(...colHeights) + 'px';
  }

  render() {
    return (
      <MDBRow className="masonry-with-columns" ref={this.MasonryRef}>
        <div style={{ order: 0 }}>
          1
        </div>
        <div style={{ order: 1 }}>
          2
        </div>
        <div style={{ order: 2 }}>
          3
        </div>
        <div style={{ order: 0 }}>
          4
        </div>
        <div style={{ order: 1 }}>
          5
        </div>
        <div style={{ order: 2 }}>
          6
        </div>
        <div style={{ order: 0 }}>
          7
        </div>
        <div style={{ order: 1 }}>
          8
        </div>
        <div style={{ order: 2 }}>
          9
        </div>
        <div style={{ order: 0 }}>
          10
        </div>
        <div style={{ order: 1 }}>
          11
        </div>
        <div style={{ order: 2 }}>
          12
        </div>
        <div style={{ order: 0 }}>
          13
        </div>
        <div style={{ order: 1 }}>
          14
        </div>
        <div style={{ order: 2 }}>
          15
        </div>
      </MDBRow>
    );
  }
}
export default MasonryPage;