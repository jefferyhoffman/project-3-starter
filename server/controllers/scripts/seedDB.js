const mongoose = require("mongoose");
const db = require("../../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/communityconnect"
);

const eventsData = [
            {
                id: '1',
                event_url:
                    'https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/4003/s300/uncc-switchup-thumbnail-a.png',
                event_title: 'Demo Day',
                event_details: "Graduates will model their projects",
                event_date: "Wednesday, October 2nd",
                event_task: "Bring your best work!",
                event_place: "Triple C Brewary Company",
                community: "NoDa",
                html_url: 'https://www.evensi.us/coding-boot-camp-unc-charlotte-project-demo-day-c3-lab/255909507'
            },
            {
                id: '2',
                event_url:
                    'https://s3.amazonaws.com/one_org_international/international/media/international/2013/12/ubuntu2.jpg',
                event_title: 'UBUNTU - Power of Unity - A Community Building Course',
                event_details: "Power of Unity",
                event_date: "Every Thursday starting Sept. 19th",
                event_task: "Bring your best work!",
                event_place: "Johnson C Smith University Library",
                community: "Midtown",
                html_url: 'https://www.eventbrite.com/e/ubuntu-power-of-unity-a-community-building-course-tickets-70816392737?aff=ebdssbdestsearch'
            },
            {
                id: '3',
                event_url:
                    'https://www.charlottefive.com/wp-content/uploads/2018/03/Lookingintothelobby.jpg',
                event_title: 'CRISIS ASSISTANCE FREE STORE',
                event_details: "Feeding and Housing those recovering from crisis",
                event_date: "Saturday, August 23, 2019",
                event_task: "Bring your best work!",
                event_place: "Freedom House",
                community: "Midtown",
                html_url: 'https://freedomhouse.cc/serve-clt/'
            },
            {
                id: '4',
                event_url:
                    'http://worldaffairscharlotte.org/wp-content/uploads/2018/09/Ifest-Social-Media-Post-2.png',
                event_title: 'UNC Charlottes International Festival',
                event_details: "Internation Fest for All!",
                event_date: "Saturday, Sep 21, 10 AM – 6 PM",
                event_task: "Bring your best work!",
                event_place: "Barnhardt Student Activity Center",
                community: "Midtown",
                html_url: 'https://www.eventbrite.com/e/unc-charlottes-international-festival-tickets-48281933563'
            },
            {
                id: '5',
                event_url:
                    'http://www.therelatives.org/wp-content/uploads/2016/08/We-Walk-Together-group-May-2016.jpg',
                event_title: 'We Walk Together Charlotte - WALK in Charlotte',
                event_details: "08:30-10:00am",
                event_date: "October 15th, 2019",
                event_task: "Bring your best work!",
                event_place: "Salvation Army Center Of Hope Shelter for Women and Children",
                community: "Midtown",
                html_url: 'https://www.wewalktogethercharlotte.org/'
            },
            {
                id: '6',
                event_url:
                    'https://festivalinthepark.org/wp-content/uploads/2019/08/FITP-2019_kiosk-banner.jpg',
                event_title: 'Festival In The Park',
                event_details: "4:00pm-TBD",
                event_date: "Fri, Sep 20 – Sun, Sep 22",
                event_task: "Bring your best work!",
                event_place: "Freedom Park",
                community: "Freedom",
                html_url: 'https://10times.com/festival-in-park'
            },
            {
                id: '7',
                event_url:
                    'http://clt250.com/files/2018/08/qcu_charlotte_unite_festival_pic_1.jpg',
                event_title: '3rd Annual Charlotte UNITE Festival',
                event_details: "12-8pm",
                event_date: "Saturday, Oct 5",
                event_task: "Bring your best work!",
                event_place: "NoDa Brewing Company",
                community: "NoDa",
                html_url: 'https://www.eventbrite.com/e/3rd-annual-charlotte-unite-festival-tickets-62915953310'
            },
            {
                id: '8',
                event_url:
                    'https://charlottekidsfest.org/wp-content/uploads/2019/05/charlotte-kids-fest-18_44023659955_o.jpg',
                event_title: 'Charlotte Kids Fest in University City',
                event_details: "11am-4pm",
                event_date: "Saturday, Oct 5",
                event_task: "Bring your best work!",
                event_place: "RI-1 Deck, 9100 Robert D. Snyder Rd, Charlotte, NC",
                community: "University",
                html_url: 'https://www.charlotteonthecheap.com/charlotte-kids-fest-university-city/'
            },
            {
                id: '9',
                event_url:
                    'https://www.highlandcreek.com/wp-content/uploads/2017/03/stark-reality-logo.jpg',
                event_title: 'Concert in the Park',
                event_details: "5:30-8:30pm",
                event_date: "Sat, Sep 14",
                event_task: "Bring your best work!",
                event_place: "Prosperity Park",
                community: "Prosperity",
                html_url: 'https://www.highlandcreek.com/events/concert-in-the-park/'
            },
            {
                id: '10',
                event_url:
                    'https://s3-media1.fl.yelpcdn.com/ephoto/ev2QAWHDXdSW1gZBX0vhMw/300s.jpg',
                event_title: 'VolunCHEERS: Midtown Greenway Clean Up',
                event_details: "10 AM – 2 PM",
                event_date: "Sun, Sep 15",
                event_task: "Bring your best work!",
                event_place: "Midtown Park",
                community: "Midtown",
                html_url: 'https://www.meetup.com/South-End-Social/'
            }
        ]
   
db.Events
.remove({})
.then(() => db.Events.collection.insertMany(eventsData))
.then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1)
});