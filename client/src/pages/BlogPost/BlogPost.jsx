import React, { useState } from "react";

const BlogPost = () => {
  const [street, setStreet] = useState("");
    const handleSub=e=>{
        e.preventDefault()
        const newBlog ={
            streetAddres: street
        }
        console.log(newBlog)
    }
  return (
    <>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Street Address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value= {street}
            onChange={e=> setStreet(e.target.value)}
          />
          
        </div>

        <button type="submit" className="btn btn-primary" onClick={e=>handleSub(e)}>
          Submit
        </button>
      </form>
    </>
  );
};
export default BlogPost;
