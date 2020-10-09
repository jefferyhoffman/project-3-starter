import React, { Component, useState } from "react";

// Module 19 exercise 17 example

// class Form extends Component {
//   state = {
//     companyName: "",
//     typeOfBill: "",
//     amountDue: "",
//     dueDate: "",
//     howOften: "",

//   };
//   handleInputChange = event => {

//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   };

//   handleFormSubmit = event => {

//     event.preventDefault();

//     alert(`Your bill for ${this.state.companyName} is now saved`);

//   }

// }

const Form = (props) => {
  const [companyName, setCompanyName] = useState("")
  const [typeOfBill, setTypeOfBill] = useState("")
  const [amountDue, setAmountDue] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [howOften, setHowOften] = useState("")

  const handleSub = () => {
    console.log('clicked')
    const theBill = {
      company: companyName,
      type: typeOfBill,
      amount: amountDue,
      date: dueDate,
      frequency: howOften
    }
    props.submit(theBill)
    // updates form fields
    setCompanyName("")
    setTypeOfBill("")
    setAmountDue("")
    setDueDate("")
    setHowOften("")

  }

  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={() => handleSub()}>Submit Bill</button>

      <form>

        <div className="form-group w-100">

          {/* <label for="formGroupExampleInput">Title</label> */}
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Company Name" value={companyName} onChange={e => setCompanyName(e.target.value)} />
        </div>


        <div className="row form-group">
          <div className="col">

            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Type of Bill" value={typeOfBill} onChange={e => setTypeOfBill(e.target.value)} />

            {/* <label for="formGroupExampleInput2">Company</label> */}
          </div>
          <div className="col">
            <input type="number" className="form-control" id="formGroupExampleInput2" placeholder="Amount Due" value={amountDue} onChange={e => setAmountDue(parseFloat(e.target.value))} />
          </div>
        </div>

        <div className="row form-group">
          <div className="col">
            {/* <label for="formGroupExampleInput2">Company</label> */}
            <input type="date" className="form-control" id="formGroupExampleInput2" placeholder="Due Date" value={dueDate} onChange={e => setDueDate(e.target.value)} />
          </div>
          <div className="col">
            <input type="number" className="form-control" id="formGroupExampleInput2" placeholder="How Often" value={howOften} onChange={e => setHowOften(parseInt(e.target.value))} />
          </div>

          {/* <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Alert!</strong>
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div> */}

          
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