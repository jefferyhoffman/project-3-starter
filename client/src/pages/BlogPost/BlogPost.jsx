import React, { useState, useContext } from "react";
import AuthContext from "../../contexts/AuthContext"
import "./index.css";
import API from "../../lib/API";
import { Redirect } from 'react-router-dom';
import stateAbreviations from "../../lib/stateAbriviations"


const BlogPost = () => {
  const { user } = useContext(AuthContext)
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [blog, setBlog] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [redirect, setRedirect] = useState(false)

  const handleSub = e => {
    e.preventDefault()
    const newPost = {
      email: user.email,
      city: city,
      state: state,
      blog: blog,
      image: imgUrl

    }
    API.Blog.create(newPost)
      .then(data => {
        console.log("created blog", data);
        setRedirect(true)
      })
      .catch(err => {
        console.log(err);
      })
  }
  return (
    <>
      {redirect ? <Redirect to="/blog" /> : null}
      <form onSubmit={e => handleSub(e)}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">City</label>
          <input
            type="text"
            className="form-control"
            onChange={e => setCity(e.target.value)}
          />

        </div>
        <div className="form-group">
          <label className="mr-1" htmlFor="exampleInputEmail1">State</label>
          <select onChange={e => setState(e.target.value)}>
            {stateAbreviations.map(val => {
              return (
                <option value={val}>{val}</option>
              )
            })}
          </select>

        </div>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Blog</label>
          <textarea

            className="form-control"
            onChange={e => setBlog(e.target.value)}
          ></textarea>

        </div>


        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Image URL</label>
          <input
            type="text"
            className="form-control"
            onChange={e => setImgUrl(e.target.value)}
          />
        </div>



        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};
export default BlogPost;
