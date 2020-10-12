import React, { Component } from 'react';
import BlogCard from '../../components/BlogCard/BlogCard'
// import logo from './logo.svg';

const testData = [
  {
    author: "Caleb",
    city: "Huntersville",
    state: "North Carolina",
    text: "I like Huntersville",
    img: "https://www.lakenormanmike.com/wp-content/uploads/2019/12/Huntersville-NC-birkdale-village-lake-norman-real-estate-agent.jpg"
  },
  {
    author: "Caleb",
    city: "Huntersville",
    state: "North Carolina",
    text: "I like Huntersville",
    img: "https://www.lakenormanmike.com/wp-content/uploads/2019/12/Huntersville-NC-birkdale-village-lake-norman-real-estate-agent.jpg"
  },
  {
    author: "Caleb",
    city: "Huntersville",
    state: "North Carolina",
    text: "I like Huntersville",
    img: "https://www.lakenormanmike.com/wp-content/uploads/2019/12/Huntersville-NC-birkdale-village-lake-norman-real-estate-agent.jpg"
  }, {
    author: "Caleb",
    city: "Huntersville",
    state: "North Carolina",
    text: "I like Huntersville",
    img: "https://www.lakenormanmike.com/wp-content/uploads/2019/12/Huntersville-NC-birkdale-village-lake-norman-real-estate-agent.jpg"
  }, {
    author: "Caleb",
    city: "Huntersville",
    state: "North Carolina",
    text: "I like Huntersville",
    img: "https://www.lakenormanmike.com/wp-content/uploads/2019/12/Huntersville-NC-birkdale-village-lake-norman-real-estate-agent.jpg"
  },
  {
    author: "Caleb",
    city: "Huntersville",
    state: "North Carolina",
    text: "I like Huntersville",
    img: "https://www.lakenormanmike.com/wp-content/uploads/2019/12/Huntersville-NC-birkdale-village-lake-norman-real-estate-agent.jpg"
  }
]

function HomePage() {


  return (
    <div 
      style={{ marginTop: "100px" }}
      className="d-flex flex-wrap justify-content-around"
      // data-aos="zoom-in-up"
      // data-aos-easing="ease-in-out"
      // data-aos-once="false"
      class="mt-5"
    >
      {testData.map(val => {
        return <BlogCard author={val.author} city={val.city} state={val.state} text={val.text} img={val.img} ></BlogCard>
      })}
    </div>
  );

}

export default HomePage;
