import React, { useContext, useEffect, useState } from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import AuthContext from "../../contexts/AuthContext";
import Selected from "../../components/SelectedChallenges";
import API from "../../lib/API";
import "./style.css"
const User = (props) => {
  const userInfo = useContext(AuthContext);
  const [theSelected, setTheSelected] = useState([]);
  const [allActions, setAllActions] = useState();

  useEffect(() => {
    API.Actions.getAll(userInfo.authToken).then(({ data }) =>
      setTheSelected(data)
    );
    //setTheSelected(selected);
  }, []);
  console.log(allActions);
  console.log(userInfo);
  return (
    <>
      <h1>Welcome to the world of tomorrow {userInfo.user.name}!!!</h1>
      {theSelected && <Selected selections={theSelected} />}
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Travel
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
              Regularly Biking to Work/School: points - 60
            </Card.Body>
          </Accordion.Collapse>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <span
                style={{ cursor: "pointer" }}
                onClick={() => alert("clicked")}
              >
                +
              </span>{" "}
              Buying an electric vehicle: points - 150
            </Card.Body>
          </Accordion.Collapse>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <span
                style={{ cursor: "pointer" }}
                onClick={() => alert("clicked")}
              >
                +
              </span>{" "}
              Go economy class: points - 150
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Food
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <span
                style={{ cursor: "pointer" }}
                onClick={() => alert("clicked")}
              >
                +
              </span>{" "}
              Food items
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
              Home
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              {" "}
              <span
                style={{ cursor: "pointer" }}
                onClick={() => alert("clicked")}
              >
                +
              </span>{" "}
              Home items
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="3">
              Consumable Items
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              {" "}
              <span
                style={{ cursor: "pointer" }}
                onClick={() => alert("clicked")}
              >
                +
              </span>{" "}
              Consumable items
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  );
};
export default User;
