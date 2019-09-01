import React, { Component } from 'react';

class EventItem extends Component {
  render() {
    const { name, event_url, html_url } = this.props.event;

    return (
      <div className='card text-center'>
        <div>
          <img
            src={event_url}
            alt='url'
            className='roundImg'
            style={{ width: '100px ', height: '120', marginTop: '5px' }}
          />
          <h4>{name}</h4>
        </div>
        <div>
          <a href={html_url} className='btn btnDark btn-sm my1'>
            {' '}
            More{' '}
          </a>
        </div>
      </div>
    );
  }
}

export default EventItem;
