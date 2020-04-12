import React, { useContext, useEffect, useState } from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import AuthContext from "../../contexts/AuthContext";
import Selected from "../../components/SelectedChallenges";
import { FiPlusSquare } from "react-icons/fi";
// import CreateChallenge from "../../components/CreateChallenge";
import API from "../../lib/API";
import "./style.css";

const User = (props) => {
  const userInfo = useContext(AuthContext);
  const [theSelected, setTheSelected] = useState([]);
  const [allActions, setAllActions] = useState([]);
  const [render, setRender]=useState(1)
  const [checkboxData, setCheckboxData]=useState({
    value: false
    // ChallengeId: 0,
    // ActionId: 0
    })

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
  const deleteChallenge =(id)=>{
    console.log(theSelected,id,'<===')
     const newNew = theSelected
     newNew.splice(id,1)
     console.log(newNew)
      setTheSelected(()=>newNew)
      setRender((curr)=>curr+1)
      
  }

  const handleCheckbox = (event, action) => {
    // if (value) {
      setCheckboxData({value: true})
      console.log("checked!")
      console.log(event.target.value)
      // setCheckboxData({
      //   value: false,
      //   ChallengeId: ,
      //   ActionId: action.id  
      // })
  }

    // API.Challenges.challengeActionAccomplishedToggle(ChallengeId, ActionId, userInfo.authToken)

  // }



  const makeBody = (cat, eventKey) => {
    const filteredList = allActions.filter((act) => act.category === cat);

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
            <FiPlusSquare size={28}/>
          </span>{" "}
          points: {act.points} - {act.name} - {act.description}
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
        <Selected selections={theSelected} deleteHandler={deleteChallenge} clickHandler={createChallenge} checkboxHandler={handleCheckbox}/>
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
          <Card.Header className="home">
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
          <Card.Header className="consumable">
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
