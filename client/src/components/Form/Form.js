import React from "react";


function Form() {
  return (
    <div>
      {/* <button type="button" className="btn btn-primary">Hello World</button> */}
      <form>

        <div className="form-group w-100">
          {/* 
          <label for="formGroupExampleInput">Title</label> */}
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Company Name" />
        </div>


        <div className="row form-group">
          <div className="col">

            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Type of Bill" />

            {/* <label for="formGroupExampleInput2">Company</label> */}
          </div>
          <div className="col">
            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Amount Due" />
          </div>
        </div>

        <div className="row form-group">
          <div className="col">
            {/* <label for="formGroupExampleInput2">Company</label> */}
            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Due Date" />
          </div>
          <div className="col">
            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="How Often" />
          </div>
        </div>



        {/* <div className="form-group w-25">
          <label for="formGroupExampleInput">Due Date</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Place title here" />
        </div>

        <div className="form-group w-25">
          <label for="formGroupExampleInput2">Amount Due</label>
          <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Company Name" />
        </div> */}
      </form>
    </div>
  )
}


export default Form;