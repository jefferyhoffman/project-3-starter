import React, { useContext, useEffect, useState } from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import AuthContext from "../../contexts/AuthContext";
import Selected from "../../components/SelectedChallenges";
import API from "../../lib/API";

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
  const makeBody = (cat, eventKey) => {
    const filteredList = theSelected.filter((act) => act.category === cat);

    return filteredList.map((act) => (
      <Accordion.Collapse key={act.id} eventKey={eventKey}>
        <Card.Body>
          <span
            style={{ cursor: "pointer" }}
            onClick={() => alert("added " + act.points)}
          >
            +
          </span>{" "}
          {act.name}: points - {act.points}
        </Card.Body>
      </Accordion.Collapse>
    ));
  };

  return (
    <>
      <h1>
        Please choose from the options below to create your first challenge!
        {userInfo.user.name}!!!
      </h1>
      {theSelected && <Selected selections={theSelected} />}
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Travel
            </Accordion.Toggle>
          </Card.Header>

          {theSelected && makeBody("Travel", "0")}
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Food
            </Accordion.Toggle>
          </Card.Header>
          {theSelected && makeBody("Food", "1")}
          {/* <Accordion.Collapse eventKey="1">
            <Card.Body>
              <span
                style={{ cursor: "pointer" }}
                onClick={() => alert("clicked")}
              >
                +
              </span>{" "}
              Food items
            </Card.Body>
          </Accordion.Collapse> */}
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
              Home
            </Accordion.Toggle>
          </Card.Header>
          {theSelected && makeBody("Home", "2")}
          {/* <Accordion.Collapse eventKey="2">
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
          </Accordion.Collapse> */}
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="3">
              Consumable Items
            </Accordion.Toggle>
          </Card.Header>
          {theSelected && makeBody("Consumable Items", "3")}
          {/* <Accordion.Collapse eventKey="3">
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
          </Accordion.Collapse> */}
        </Card>
      </Accordion>
    </>
  );
};
export default User;
