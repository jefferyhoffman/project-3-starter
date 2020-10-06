import React, { useState } from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

import "react-big-calendar/lib/css/react-big-calendar.css";

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = momentLocalizer(moment) // or globalizeLocalizer

const MyCalendar = props => {
    const [events, setEvents] = useState([
        {
            start: moment().toDate(),
            end: moment().add(1, "days").toDate(),
            title: "Some Title",
        }
    ]);

    const addEvent = () => {
        setEvents([
            ...events,
            {
                start: moment().toDate(),
                end: moment().toDate(),
                title: "Electricity bill"
            },
            {
                start: moment().toDate(),
                end: moment().toDate(),
                title: "Water bill"

            }

        ]);
    }
    

    
    

    return (
        <div>
            <button onClick={addEvent}>Add</button>
            <Calendar
                localizer={localizer}
                defaultDate={new Date()}
                defaultView="month"
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: "100vh" }}
            />
        </div>
    )
}

export default MyCalendar;