import React, { useContext, useEffect, useState } from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import AuthContext from "../../contexts/AuthContext";
import Selected from "../../components/SelectedChallenges";
import API from "../../lib/API";
const User = (props) => {
  const userInfo = useContext(AuthContext);
  const [theSelected, setTheSelected] = useState([]);
  useEffect(() => {
    const selected = API.Actions.getSelected();
    setTheSelected(selected);
  }, []);
  console.log(userInfo);
  return (
    <>
      <h1>Welcome to the world of tomorrow {userInfo.user.name}!!!</h1>
      {theSelected && <Selected selections={theSelected} />}
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Click me!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <span
                style={{ cursor: "pointer" }}
                onClick={() => alert("clicked")}
              >
                +
              </span>{" "}
              Hello! I'm the body
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Click me!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Click me!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Click me!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  );
};
export default User;
