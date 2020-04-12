import React, { useContext, useEffect, useState } from "react";
import {
  Accordion,
  Card,
  Button,
  ButtonGroup,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import AuthContext from "../../contexts/AuthContext";
import Selected from "../../components/SelectedChallenges";
import { FiPlusSquare } from "react-icons/fi";
import { FiInfo } from "react-icons/fi";
// import CreateChallenge from "../../components/CreateChallenge";
import API from "../../lib/API";
import "./style.css";

const User = (props) => {
  const userInfo = useContext(AuthContext);
  const [theSelected, setTheSelected] = useState([]);
  const [allActions, setAllActions] = useState([]);
  const [render, setRender] = useState(1);
  useEffect(() => {
    API.Actions.getAll(userInfo.authToken).then(({ data }) =>
      setAllActions(data)
    );
    API.Challenges.getCurrentChallenge(userInfo.authToken).then(({ data }) =>
      console.log(data)
    );
    //setTheSelected(selected);
  }, []);
  console.log(userInfo);

  const addAction = (points, name, description, id) => {
    setTheSelected([...theSelected, { points, name, description, id }]);
  };

  const createChallenge = () => {
    API.Challenges.createChallenge(userInfo.authToken)
      .then(({ data }) => {
        let idArray = theSelected.map((action) => action.id);
        return API.Challenges.updateChallenge(
          data.id,
          idArray,
          userInfo.authToken
        );
      })
      .then(({ data }) => console.log("Challenge saved"))
      .catch((err) => console.log(err));
  };
  const deleteChallenge = (id) => {
    console.log(theSelected, id, "<===");
    const newNew = theSelected;
    newNew.splice(id, 1);
    console.log(newNew);
    setTheSelected(() => newNew);
    setRender((curr) => curr + 1);
  };
  const makeBody = (cat, eventKey) => {
    const filteredList = allActions.filter((act) => act.category === cat);

    return filteredList.map((act) => (
      <Accordion.Collapse key={act.id} eventKey={eventKey}>
        <Card.Body>
          <span
            style={{ cursor: "pointer" }}
            // onClick={() => alert("added " + act.points)}
            onClick={() =>
              addAction(
                act.points,
                act.name,
                <ButtonGroup>
                  <DropdownButton variant="clear" title={<FiInfo size={28} />}>
                    <Dropdown.Item eventKey="">{act.description}</Dropdown.Item>
                  </DropdownButton>
                </ButtonGroup>,
                act.id
              )
            }
          >
            <FiPlusSquare size={28} />
          </span>{" "}
          points: {act.points} - {act.name} -{" "}
          <ButtonGroup>
            <DropdownButton variant="clear" title={<FiInfo size={28} />}>
              <Dropdown.Item eventKey="">{act.description}</Dropdown.Item>
            </DropdownButton>
          </ButtonGroup>
        </Card.Body>
      </Accordion.Collapse>
    ));
  };

  return (
    <>
      <h1>
        Please choose from the actions below to create your first challenge!
      </h1>
      {allActions && (
        <Selected
          selections={theSelected}
          deleteHandler={deleteChallenge}
          clickHandler={createChallenge}
        />
      )}
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header className="travel">
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Travel
            </Accordion.Toggle>
          </Card.Header>

          {allActions && makeBody("Travel", "1")}
        </Card>
        <Card>
          <Card.Header className="food">
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
              Food
            </Accordion.Toggle>
          </Card.Header>
          {allActions && makeBody("Food", "2")}
        </Card>
        <Card>
          <Card.Header className="home">
            <Accordion.Toggle as={Button} variant="link" eventKey="3">
              Home
            </Accordion.Toggle>
          </Card.Header>
          {allActions && makeBody("Home", "3")}
        </Card>
        <Card>
          <Card.Header className="consumable">
            <Accordion.Toggle as={Button} variant="link" eventKey="4">
              Consumable Items
            </Accordion.Toggle>
          </Card.Header>
          {allActions && makeBody("Consumable Items", "4")}
        </Card>
      </Accordion>
    </>
  );
};
export default User;
