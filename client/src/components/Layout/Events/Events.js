import React, { Component } from 'react';
import EventItem from './EventItem';

class Events extends Component {
  state = {
    events: [
      {
        id: '1',
        event_url:
          'https://www.eu40.eu/wp-content/uploads/2018/07/180716_EU40_SummerBBQ-1.png',
        name: 'Summer Barbeque',
        html_url: 'https://healthynibblesandbits.com/how-to-make-bubble-tea/'
      },
      {
        id: '2',
        event_url:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt-08IO190CARcDb8U3nrja8UPFm9J-M2L55Gzr7DHCLirbp8nkQ',
        name: 'Movie Night Saturdays',
        html_url: 'https://healthynibblesandbits.com/how-to-make-bubble-tea/'
      },
      {
        id: '3',
        event_url:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOvXDmswF3TMFdCMpw5KYslXlayZ00uT4NISWc6fMirfhsnc3s',
        name: 'Group Going to Jazz at the Park',
        html_url: 'https://healthynibblesandbits.com/how-to-make-bubble-tea/'
      }
    ],
    renderEvents: true
  };

  render() {
    return (
      <div className='card text-center'>
        {this.state.events.map(event => (
          <EventItem key={event.id} event={event} />
        ))}
      </div>
    );
  }
}

export default Events;
