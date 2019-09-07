const mongoose = require("mongoose");
const db = require("../../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/communityconnect"
);

const profilesData = [ {
    id: '1',
    user_url:
        'https://i.pinimg.com/originals/9b/31/21/9b3121caca953e05b28d8bf891d7b5df.png',
    user_name: 'Anees Adams',
    password: "password",
    email: "AneesAdams@rockingit.com",
    user_number: "555-234-6789",
    user_community: "NoDa"

},
{
    id: '2',
    user_url:
        'https://s3.amazonaws.com/one_org_international/international/media/international/2013/12/ubuntu2.jpg',
    user_name: 'Michael Beck',
    password: "password",
    email: "MichaelBeck@rockingit.com",
    user_number: "555-678-4563",
    user_community: "Midtown"

},
{
    id: '3',
    user_url:
        'https://www.charlottefive.com/wp-content/uploads/2018/03/Lookingintothelobby.jpg',
    user_name: 'Timothy Brahm',
    password: "password",
    email: "TimothyBrahms@rockingit.com",
    user_number: "555-738-9374",
    user_community: "NoDa"

},
{
    id: '4',
    user_url:
        'http://worldaffairscharlotte.org/wp-content/uploads/2018/09/Ifest-Social-Media-Post-2.png',
    user_name: 'Leland Capps',
    password: "password",
    email: "LelandCapps@rockingit.com",
    user_number: "555-222-7427",
    user_community: "Midtown"

},
{
    id: '5',
    user_url:
        'http://www.therelatives.org/wp-content/uploads/2016/08/We-Walk-Together-group-May-2016.jpg',
    user_name: 'Brad Evans',
    password: "password",
    email: "BradEvans@rockingit.com",
    user_number: "555-973-4231",
    user_community: "University"

},
{
    id: '6',
    user_url:
        'https://festivalinthepark.org/wp-content/uploads/2019/08/FITP-2019_kiosk-banner.jpg',
    user_name: 'Matthew Gennings',
    password: "password",
    email: "MatthewGennings@rockingit.com",
    user_number: "555-952-7132",
    user_community: "Freedom"

},
{
    id: '7',
    user_url:
        'http://clt250.com/files/2018/08/qcu_charlotte_unite_festival_pic_1.jpg',
    user_name: 'Tony Goldsmith',
    password: "password",
    email: "TonyGoldsmith@rockingit.com",
    user_number: "555-352-4759",
    user_community: "NoDa"

},
{
    id: '8',
    user_url:
        'https://charlottekidsfest.org/wp-content/uploads/2019/05/charlotte-kids-fest-18_44023659955_o.jpg',
    user_name: 'Cassidy Groenendaal',
    password: "password",
    email: "CassidyGroenendaal@rockingit.com",
    user_number: "555-829-9364",
    user_community: "University"

},
{
    id: '9',
    user_url:
        'https://www.highlandcreek.com/wp-content/uploads/2017/03/stark-reality-logo.jpg',
    user_name: 'Israel Harvin',
    password: "password",
    email: "IsraelHarvin@rockingit.com",
    user_number: "555-098-1024",
    user_community: "Prosperity"

},
{
    id: '10',
    user_url:
        'https://s3-media1.fl.yelpcdn.com/ephoto/ev2QAWHDXdSW1gZBX0vhMw/300s.jpg',
    user_name: 'Erin Maness',
    password: "password",
    email: "ErinManess@rockingit.com",
    user_number: "555-764-5637",
    user_community: "Prosperity"

},
{
    id: '11',
    user_url:
        'https://s3-media1.fl.yelpcdn.com/ephoto/ev2QAWHDXdSW1gZBX0vhMw/300s.jpg',
    user_name: 'David Martin',
    password: "password",
    email: "DavidMartin@rockingit.com",
    user_number: "555-821-3482",
    user_community: "University"

},
{
    id: '12',
    user_url:
        'https://i.pinimg.com/originals/9b/31/21/9b3121caca953e05b28d8bf891d7b5df.png',
    user_name: 'Craig McAlister',
    password: "password",
    email: "CraigMcAlisters@rockingit.com",
    user_number: "555-085-7332",
    user_community: "NoDa"

},
{
    id: '13',
    user_url:
        'https://i.pinimg.com/originals/9b/31/21/9b3121caca953e05b28d8bf891d7b5df.png',
    user_name: 'Caleb Myers',
    password: "password",
    email: "CalebMyers@rockingit.com",
    user_number: "555-372-3817",
    user_community: "Midtown"

},
{
    id: '14',
    user_url:
        'https://i.pinimg.com/originals/9b/31/21/9b3121caca953e05b28d8bf891d7b5df.png',
    user_name: 'Bonaventure Ndicunguye',
    password: "password",
    email: "BonaventureNdicunguye@rockingit.com",
    user_number: "555-256-1782",
    user_community: "Midtown"

},
{
    id: '15',
    user_url:
        'https://i.pinimg.com/originals/9b/31/21/9b3121caca953e05b28d8bf891d7b5df.png',
    user_name: 'Burton Pinckney',
    password: "password",
    email: "BurtonPinckney@rockingit.com",
    user_number: "555-327-2837",
    user_community: "NoDa"

},
{
    id: '16',
    user_url:
        'https://i.pinimg.com/originals/9b/31/21/9b3121caca953e05b28d8bf891d7b5df.png',
    user_name: 'David Short',
    password: "password",
    email: "DavidShort@rockingit.com",
    user_number: "555-278-4726",
    user_community: "University"

},
{
    id: '17',
    user_url:
        'https://i.pinimg.com/originals/9b/31/21/9b3121caca953e05b28d8bf891d7b5df.png',
    user_name: 'Max Szczepaniak',
    password: "password",
    email: "MaxSzczepaniak@rockingit.com",
    user_number: "555-284-9273",
    user_community: "Midtown"

},
{
    id: '18',
    user_url:
        'https://i.pinimg.com/originals/9b/31/21/9b3121caca953e05b28d8bf891d7b5df.png',
    user_name: 'Katherine Walters',
    password: "password",
    email: "KatherineWalters@rockingit.com",
    user_number: "555-422-7342",
    user_community: "Noda"

},
{
    id: '19',
    user_url:
        'https://i.pinimg.com/originals/9b/31/21/9b3121caca953e05b28d8bf891d7b5df.png',
    user_name: 'Robert Zuniga',
    password: "password",
    email: "RobertZuniga@rockingit.com",
    user_number: "555-827-9304",
    user_community: "Midtown"

}];

const usersData = [{
    id: '1',
    user_url:
        'https://i.pinimg.com/originals/9b/31/21/9b3121caca953e05b28d8bf891d7b5df.png',
    user_name: 'Anees Adams',
    password: "password",
    email: "AneesAdams@rockingit.com",
    user_number: "555-234-6789",
    user_community: "NoDa"

},
{
    id: '2',
    user_url:
        'https://s3.amazonaws.com/one_org_international/international/media/international/2013/12/ubuntu2.jpg',
    user_name: 'Michael Beck',
    password: "password",
    email: "MichaelBeck@rockingit.com",
    user_number: "555-678-4563",
    user_community: "Midtown"

},
{
    id: '3',
    user_url:
        'https://www.charlottefive.com/wp-content/uploads/2018/03/Lookingintothelobby.jpg',
    user_name: 'Timothy Brahm',
    password: "password",
    email: "TimothyBrahms@rockingit.com",
    user_number: "555-738-9374",
    user_community: "NoDa"

},
{
    id: '4',
    user_url:
        'http://worldaffairscharlotte.org/wp-content/uploads/2018/09/Ifest-Social-Media-Post-2.png',
    user_name: 'Leland Capps',
    password: "password",
    email: "LelandCapps@rockingit.com",
    user_number: "555-222-7427",
    user_community: "Midtown"

},
{
    id: '5',
    user_url:
        'http://www.therelatives.org/wp-content/uploads/2016/08/We-Walk-Together-group-May-2016.jpg',
    user_name: 'Brad Evans',
    password: "password",
    email: "BradEvans@rockingit.com",
    user_number: "555-973-4231",
    user_community: "University"

},
{
    id: '6',
    user_url:
        'https://festivalinthepark.org/wp-content/uploads/2019/08/FITP-2019_kiosk-banner.jpg',
    user_name: 'Matthew Gennings',
    password: "password",
    email: "MatthewGennings@rockingit.com",
    user_number: "555-952-7132",
    user_community: "Freedom"

},
{
    id: '7',
    user_url:
        'http://clt250.com/files/2018/08/qcu_charlotte_unite_festival_pic_1.jpg',
    user_name: 'Tony Goldsmith',
    password: "password",
    email: "TonyGoldsmith@rockingit.com",
    user_number: "555-352-4759",
    user_community: "NoDa"

},
{
    id: '8',
    user_url:
        'https://charlottekidsfest.org/wp-content/uploads/2019/05/charlotte-kids-fest-18_44023659955_o.jpg',
    user_name: 'Cassidy Groenendaal',
    password: "password",
    email: "CassidyGroenendaal@rockingit.com",
    user_number: "555-829-9364",
    user_community: "University"

},
{
    id: '9',
    user_url:
        'https://www.highlandcreek.com/wp-content/uploads/2017/03/stark-reality-logo.jpg',
    user_name: 'Israel Harvin',
    password: "password",
    email: "IsraelHarvin@rockingit.com",
    user_number: "555-098-1024",
    user_community: "Prosperity"

},
{
    id: '10',
    user_url:
        'https://s3-media1.fl.yelpcdn.com/ephoto/ev2QAWHDXdSW1gZBX0vhMw/300s.jpg',
    user_name: 'Erin Maness',
    password: "password",
    email: "ErinManess@rockingit.com",
    user_number: "555-764-5637",
    user_community: "Prosperity"

},
{
    id: '11',
    user_url:
        'https://s3-media1.fl.yelpcdn.com/ephoto/ev2QAWHDXdSW1gZBX0vhMw/300s.jpg',
    user_name: 'David Martin',
    password: "password",
    email: "DavidMartin@rockingit.com",
    user_number: "555-821-3482",
    user_community: "University"

},
{
    id: '12',
    user_url:
        'https://i.pinimg.com/originals/9b/31/21/9b3121caca953e05b28d8bf891d7b5df.png',
    user_name: 'Craig McAlister',
    password: "password",
    email: "CraigMcAlisters@rockingit.com",
    user_number: "555-085-7332",
    user_community: "NoDa"

},
{
    id: '13',
    user_url:
        'https://i.pinimg.com/originals/9b/31/21/9b3121caca953e05b28d8bf891d7b5df.png',
    user_name: 'Caleb Myers',
    password: "password",
    email: "CalebMyers@rockingit.com",
    user_number: "555-372-3817",
    user_community: "Midtown"

},
{
    id: '14',
    user_url:
        'https://i.pinimg.com/originals/9b/31/21/9b3121caca953e05b28d8bf891d7b5df.png',
    user_name: 'Bonaventure Ndicunguye',
    password: "password",
    email: "BonaventureNdicunguye@rockingit.com",
    user_number: "555-256-1782",
    user_community: "Midtown"

},
{
    id: '15',
    user_url:
        'https://i.pinimg.com/originals/9b/31/21/9b3121caca953e05b28d8bf891d7b5df.png',
    user_name: 'Burton Pinckney',
    password: "password",
    email: "BurtonPinckney@rockingit.com",
    user_number: "555-327-2837",
    user_community: "NoDa"

},
{
    id: '16',
    user_url:
        'https://i.pinimg.com/originals/9b/31/21/9b3121caca953e05b28d8bf891d7b5df.png',
    user_name: 'David Short',
    password: "password",
    email: "DavidShort@rockingit.com",
    user_number: "555-278-4726",
    user_community: "University"

},
{
    id: '17',
    user_url:
        'https://i.pinimg.com/originals/9b/31/21/9b3121caca953e05b28d8bf891d7b5df.png',
    user_name: 'Max Szczepaniak',
    password: "password",
    email: "MaxSzczepaniak@rockingit.com",
    user_number: "555-284-9273",
    user_community: "Midtown"

},
{
    id: '18',
    user_url:
        'https://i.pinimg.com/originals/9b/31/21/9b3121caca953e05b28d8bf891d7b5df.png',
    user_name: 'Katherine Walters',
    password: "password",
    email: "KatherineWalters@rockingit.com",
    user_number: "555-422-7342",
    user_community: "Noda"

},
{
    id: '19',
    user_url:
        'https://i.pinimg.com/originals/9b/31/21/9b3121caca953e05b28d8bf891d7b5df.png',
    user_name: 'Robert Zuniga',
    password: "password",
    email: "RobertZuniga@rockingit.com",
    user_number: "555-827-9304",
    user_community: "Midtown"

}];
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
    console.log(data.result.n + "  event records inserted!");
    
})
.catch(err => {
    console.error(err);
   
});

db.Profiles
.remove({})
.then(() => db.Profiles.collection.insertMany(profilesData))
.then(data => {
    console.log(data.result.n + " profile records inserted!");
  
})
.catch(err => {
    console.error(err);
    
});

db.Users
.remove({})
.then(() => db.Users.collection.insertMany(usersData))
.then(data => {
    console.log(data.result.n + " user records inserted!");
   
})
.catch(err => {
    console.error(err);
  
});

