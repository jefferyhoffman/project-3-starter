import React, { Component, useState } from "react";
import Modal from '../../components/Modal/Modal'


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
const styles = {
  form: {
    marginTop: "200px"
  },
  button: {
    display: "block",
    margin: "auto"
  }
}

const Form = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [companyName, setCompanyName] = useState("")
  const [typeOfBill, setTypeOfBill] = useState("")
  const [amountDue, setAmountDue] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [howOften, setHowOften] = useState("")

  const handleSub = (e) => {
    e.preventDefault();

    console.log('clicked')
    const theBill = {
      company: companyName,
      type: typeOfBill,
      amount: amountDue,
      date: dueDate,
      frequency: howOften
    }
    props.submit(theBill)
    setIsOpen(true);
    // updates form fields
    setCompanyName("")
    setTypeOfBill("")
    setAmountDue("")
    setDueDate("")
    setHowOften("")

  }

  return (
    <div style={styles.form} className="animate__animated animate__fadeIn animate__delay-1s">

      {/* <button type="button" className="btn btn-primary">Hello World</button> */}
      <form onSubmit={handleSub}>

        <div className="form-group w-100">


          <input type="text" name="company" className="form-control" id="formGroupExampleInput" placeholder="Company Name" value={companyName} onChange={e => setCompanyName(e.target.value)} />
        </div>


        <div className="row form-group">
          <div className="col">

            <input type="text" name="type" className="form-control" id="formGroupExampleInput2" placeholder="Type of Bill" value={typeOfBill} onChange={e => setTypeOfBill(e.target.value)} />


          </div>
          <div className="col">
            <input type="number" name="amount" className="form-control" id="formGroupExampleInput2" placeholder="Amount Due" value={amountDue} onChange={e => setAmountDue(parseFloat(e.target.value))} />
          </div>
        </div>

        <div className="row form-group">
          <div className="col">

            <input type="date" name="date" className="form-control" id="formGroupExampleInput2" placeholder="Due Date" value={dueDate} onChange={e => setDueDate(e.target.value)} />
          </div>
          <div className="col">

            <input type="number" name="frequency" className="form-control" id="formGroupExampleInput2" placeholder="How Often" value={howOften} onChange={e => setHowOften(parseInt(e.target.value))} />

          </div>

        </div>
        <div style={styles.button} className="row form-group">
          <button type="submit" className="btn btn-primary ">Submit Bill</button>
          <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            Congratulation! You have made a new bill!
            Close to continue
        </Modal>
        </div>

      </form>
    </div>
  )
}


export default Form;