import React, { useState } from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";
// import Form from '../components/Form/Form'

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = momentLocalizer(moment) // or globalizeLocalizer

const MyCalendar = props => {
    // const [events, setEvents] = useState([
    //     {
    //         start: moment().toDate(),
    //         end: moment().add(1, "days").toDate(),
    //         title: "Some Title",
    //     }
    // ]);    

    const handleSelect = (event, e) => {
        alert(`Bill details:

Company: ${event.title}
Type: ${event.billType}
Date: ${event.start}
Amount: ${event.billAmount}
Frequency: ${event.billFrequency} days`);
    }

    return (
        <div style={{marginTop: "60px" }} className="calendar">
            {/* <button onClick={addEvent}>Add</button> */}
            <Calendar
                localizer={localizer}
                defaultDate={new Date()}
                defaultView="month"
                events={props.bills.map(bill => ({ start: bill.date, end: bill.date, title: bill.company, billType: bill.type, billAmount: bill.amount, billFrequency: bill.frequency }))}
                startAccessor="start"
                endAccessor="end"
                onSelectEvent={handleSelect}
                style={{ height: "70vh" }}
            />
        </div>
    )
}

export default MyCalendar;