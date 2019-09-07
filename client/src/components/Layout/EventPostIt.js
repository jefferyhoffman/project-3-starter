import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const EventPostIt = props => {
  return (
    <div className='card text-center'>
      <div>
        <img
          src={props.event_url}
          alt='url'
          className='roundImg'
          style={{ width: '60px ' }}
        />
        <h4>{props.event_title}</h4>
      </div>
      <div>
        <a href={props.html_url} className='btn btnDark btn-sm my1'>
          {' '}
          More{' '}
        </a>
      </div>
    </div>
  );
};

export default EventPostIt;
