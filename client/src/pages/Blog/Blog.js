import React, { useState, useEffect, useContext } from 'react';
import BlogCard from '../../components/BlogCard/BlogCard'
import API from "../../lib/API";
import AuthContext from "../../contexts/AuthContext"


function HomePage() {
  const { authToken } = useContext(AuthContext);
  const [userBlogs, setUserBlogs] = useState([])

  useEffect(() => {
    API.Blog.getAllBlogsByUser(authToken)
      .then(data => {
        setUserBlogs(() => data.data);
      })
  }, [])


  return (
    <div
      style={{ marginTop: "100px" }}
      className="d-flex flex-wrap justify-content-around"
      class="mt-5"
      // data-aos="zoom-in-up"
      // data-aos-offset="200"
      // data-aos-delay="50"
      // data-aos-duration="1000"
      // data-aos-easing="ease-in-out"
      // data-aos-mirror="true"
      // data-aos-once="false"
      // data-aos-anchor-placement="top-center"
  
    >
      {userBlogs.map(val => {
        return <BlogCard author={val.email} city={val.city} state={val.state} text={val.blog} img={val.image} ></BlogCard>
      })}
    </div>
  );

}

export default HomePage;
