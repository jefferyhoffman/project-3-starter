import React, { useContext, useEffect, useState } from "react";
import {Card, Button } from "react-bootstrap";
import AuthContext from "../../contexts/AuthContext";
// import Selected from "../../components/SelectedChallenges";
// import CreateChallenge from "../../components/CreateChallenge";
import API from "../../lib/API";
import "./style.css";

const Friends = (props) => {
  const userInfo = useContext(AuthContext);
  // const [theSelected, setTheSelected] = useState([]);
  // const [allActions, setAllActions] = useState([]);

  // const createChallenge = () => {
  //   API.Challenges.createChallenge(userInfo.authToken)
  //     .then(({ data }) => {
  //       let idArray = theSelected.map((action) => action.id);
  //       return API.Challenges.updateChallenge(
  //         data.id,
  //         idArray,
  //         userInfo.authToken
  //       );
  //     })
  //     .then(({ data }) => console.log("Challenge saved"))
  //     .catch((err) => console.log(err));
  // };

  // const makeBody = (cat, eventKey) => {
  //   const filteredList = allActions.filter((act) => act.category === cat);

    return filteredList.map((act) => (
      <Accordion.Collapse key={act.id} eventKey={eventKey}>
        <Card.Body>
          <span
            style={{ cursor: "pointer" }}
            // onClick={() => alert("added " + act.points)}
            onClick={() =>
              addAction(act.points, act.name, act.description, act.id)
            }
          >
            +
          </span>{" "}
          points: {act.points} - {act.name} - {act.description}
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
      {allActions && (
        <Selected selections={theSelected} clickHandler={createChallenge} />
      )}
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Travel
            </Accordion.Toggle>
          </Card.Header>

          {allActions && makeBody("Travel", "1")}
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
              Food
            </Accordion.Toggle>
          </Card.Header>
          {allActions && makeBody("Food", "2")}
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
            <Accordion.Toggle as={Button} variant="link" eventKey="3">
              Home
            </Accordion.Toggle>
          </Card.Header>
          {allActions && makeBody("Home", "3")}
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
            <Accordion.Toggle as={Button} variant="link" eventKey="4">
              Consumable Items
            </Accordion.Toggle>
          </Card.Header>
          {allActions && makeBody("Consumable Items", "4")}
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
