import React from "react";
const styles = {
  form: {
    marginTop: "200px"
  }
}


function Form() {
  return (
    <div style={styles.form} className="animate__animated animate__fadeIn animate__delay-2s">
      <div className="col">
        <h1>Your bill</h1>
      </div>
      
      <form>

        <div className="form-group w-100">
          
          
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Company Name" />
        </div>


        <div className="row form-group">
          <div className="col">
          <select id="inputState" class="form-control">
        <option selected disabled>Type of bill?</option>
        <option>Car</option>
        <option>Rent</option>
        <option>Medical</option>
        <option>Utilities</option>
      </select>
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
          <select id="inputState" class="form-control">
        <option selected disabled>How often?</option>
        <option>One time only</option>
        <option>Weekly</option>
        <option>Every two weeks</option>
        <option>Monthly</option>
        <option>Every two months</option>
        <option>quaterly</option>
        <option>Every six months</option>
        <option>Yearly</option>
      </select>
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