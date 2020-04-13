import React from "react";
import { Tabs, Tab, Row, Col, Nav, Button } from "react-bootstrap";
import { TiDeleteOutline } from "react-icons/ti";
import { FiSave } from "react-icons/fi";

const SelectedChallenges = (props) => {
  console.log(props);

  const handleComplete = (id) => {
    props.completeHandler(id);
  };
  const handleDelete = (id)=>{
    props.deleteHandler(id)
  }

  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={9}>
            <Tabs
              defaultActiveKey="Current Challenge"
              transition={false}
              id="noanim-tab-example"
            >
              <Tab eventKey="Current Challenge" title="Current Challenge">
                {props.selections.map((action, position) => {
                if(!action.ChallengeAction.accomplished){

                return (
                  <div key={action.id + position}>

                  <p >
                    <span style={{ cursor: "pointer" }}
                      onClick={() => handleComplete(action.id)}>✔️</span>
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => handleDelete(action.id)}
                    >
                      {" "}
                      <TiDeleteOutline size={28} />{" "}
                    </span>
                    points: {action.points} - {action.name} -{" "}
                    {action.description}
                  </p>
                  </div>
                )}})}
                {/* {props.selections.length > 0 ? (
                  <Button
                    style={{ fontFamily: "roboto" }}
                    variant="light"
                    onClick={props.clickHandler}
                  >
                    {<FiSave size={28} />} Save this Challenge
                  </Button>
                ) : null} */}
              </Tab>
              <br></br>
              {/* <Tab eventKey="Update" title="Update">
                Update a challenge
              </Tab> */}
              <Tab eventKey="Completed Actions" title="Completed Actions">
              {props.selections.map((action, position) => {
                if(action.ChallengeAction.accomplished){

                return (
                  <div key={action.id + position}>

                  <p >

                    points: {action.points} - {action.name} -{" "}
                    {action.description}
                  </p>
                  </div>
                )}})}
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Tab.Container>
      {/* <div className="jumbotron">
        <h1 className="display-4">This weeks Challenges:</h1>
        <div className="container">
          {props.selections.map((action) => (
            <div className="row" key={action.id}>
              <div className="col">{action.name}</div>
              <div className="col">{action.description}</div>

              <hr className="my-4" />
            </div>
          ))}
        </div>
        <hr className="my-4" /> */}
      {/* <p>List Other actions they can take</p> */}
      {/* </div> */}
    </>
  );
};
export default SelectedChallenges;
