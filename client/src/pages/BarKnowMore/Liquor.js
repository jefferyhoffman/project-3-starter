import React, { Component } from 'react';
import '../BarKnowMore/bar.css'
import top5 from '../Images/top5.jpg';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';
import API from '../../lib/API';


class Liquor extends Component {
  render() {
    return (
      <>
        <div>
          <div className='container-liquor'>
            <h2 className='pages-header'>Liquor Links</h2>
            <br />
            <div className='row'>
              <div className='col-4'>
                <div className="book">
                  <div className="back"></div>
                  <div className="page6">here</div>
                  <div className="page5">there</div>
                  <div className="page4"></div>
                  <div className="page3"></div>
                  <div className="page2"></div>
                  <div className="page1"></div>
                  <div className="front"><h3>Liquor</h3></div>
                </div>
              </div>
              <div className='col-4'>
                <div className="book">
                  <div className="back"></div>
                  <div className="page6">here</div>
                  <div className="page5">there</div>
                  <div className="page4"></div>
                  <div className="page3"></div>
                  <div className="page2"></div>
                  <div className="page1"></div>
                  <div className="front"><h3>Liquor</h3></div>
                </div>
              </div>
              <div className='col-4'>
                <div className="book">
                  <div className="back"></div>
                  <div className="page6">here</div>
                  <div className="page5">there</div>
                  <div className="page4"></div>
                  <div className="page3"></div>
                  <div className="page2"></div>
                  <div className="page1"></div>
                  <div className="front"><h3>Liquor</h3></div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-4'>
                <div className="book">
                  <div className="back"></div>
                  <div className="page6">here</div>
                  <div className="page5">there</div>
                  <div className="page4"></div>
                  <div className="page3"></div>
                  <div className="page2"></div>
                  <div className="page1"></div>
                  <div className="front"><h3>Liquor</h3></div>
                </div>
              </div>
              <div className='col-4'>
                <div className="book">
                  <div className="back"></div>
                  <div className="page6">here</div>
                  <div className="page5">there</div>
                  <div className="page4"></div>
                  <div className="page3"></div>
                  <div className="page2"></div>
                  <div className="page1"></div>
                  <div className="front"><h3>Liquor</h3></div>
                </div>
              </div>
              <div className='col-4'>
                <div className="book">
                  <div className="back"></div>
                  <div className="page6">here</div>
                  <div className="page5">there</div>
                  <div className="page4"></div>
                  <div className="page3"></div>
                  <div className="page2"></div>
                  <div className="page1"></div>
                  <div className="front"><h3>Liquor</h3></div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-4'>
                <div className="book">
                  <div className="back"></div>
                  <div className="page6">here</div>
                  <div className="page5">there</div>
                  <div className="page4"></div>
                  <div className="page3"></div>
                  <div className="page2"></div>
                  <div className="page1"></div>
                  <div className="front"><h3>Liquor</h3></div>
                </div>
              </div>
              <div className='col-4'>
                <div className="book">
                  <div className="back"></div>
                  <div className="page6">here</div>
                  <div className="page5">there</div>
                  <div className="page4"></div>
                  <div className="page3"></div>
                  <div className="page2"></div>
                  <div className="page1"></div>
                  <div className="front"><h3>Liquor</h3></div>
                </div>
              </div>
              <div className='col-4'>
                <div className="book">
                  <div className="back"></div>
                  <div className="page6">here</div>
                  <div className="page5">there</div>
                  <div className="page4"></div>
                  <div className="page3"></div>
                  <div className="page2"></div>
                  <div className="page1"></div>
                  <div className="front"><h3>Liquor</h3></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Liquor;
