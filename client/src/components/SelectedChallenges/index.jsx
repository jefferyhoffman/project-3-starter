import React from "react";
import { Tabs, Tab, Row, Col, Nav } from "react-bootstrap";

const SelectedChallenges = (props) => {
  console.log(props);
  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={9}>
            <Tabs
              defaultActiveKey="home"
              transition={false}
              id="noanim-tab-example"
            >
              <Tab eventKey="Current Challenge" title="Current Challenge">
                Create a challenge
                {props.selections.map((action) => (
                  <p>
                    points: {action.points} - {action.name} -{" "}
                    {action.description}
                  </p>
                ))}
              </Tab>
              {/* <Tab eventKey="Update" title="Update">
                Update a challenge
              </Tab> */}
              <Tab eventKey="Past Challenge" title="Past Challenge">
                See all challenges
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
