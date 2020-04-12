import React from "react";
import { Tabs, Tab, Row, Col, Nav, Button } from "react-bootstrap";
import { TiDeleteOutline } from "react-icons/ti";

const SelectedChallenges = (props) => {
  console.log(props);

  const handleComplete = (id) => {
    props.deleteHandler(id);
  };

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
                {props.selections.map((action, position) => (
                  <p key={action.id + position}>
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => handleComplete(position)}
                    >
                      {" "}
                      <TiDeleteOutline size={28} />{" "}
                    </span>
                    points: {action.points} - {action.name} -{" "}
                    {action.description}
                  </p>
                ))}
                {props.selections.length > 0 ? (
                  <Button variant="outline-info" onClick={props.clickHandler}>
                    Saved
                  </Button>
                ) : null}
              </Tab>
              <br></br>
              {/* <Tab eventKey="Update" title="Update">
                Update a challenge
              </Tab> */}
              <Tab eventKey="Completed Actions" title="Completed Actions"></Tab>
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
