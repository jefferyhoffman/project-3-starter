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
  const [render, setRender]=useState(1)
  const [challengeID, setChallengeID]=useState()
  const [checkboxData, setCheckboxData]=useState({
    value: false
    // ChallengeId: 0,
    // ActionId: 0
    })
  const [currScore, setCurrScore]=useState(0)

  useEffect(() => {
    API.Actions.getAll(userInfo.authToken).then(({ data }) =>{
      console.log(data)
    setAllActions(data)
    //else createChallenge()
    });
    
    getCurrActions()
    //setTheSelected(selected);
  }, []);
  console.log(userInfo);


  const getCurrActions=()=>{
    API.Challenges.getCurrentChallenge(userInfo.authToken).then((results) =>{
      console.log(results)
      if(results.status === 200){
        setTheSelected(results.data.actions)
      setChallengeID(results.data.id)
      API.Challenges.getCurrentScoreOfChallenge(results.data.id, userInfo.authToken).then(
        res=> setCurrScore(res.data)
      )
    }
      else createChallenge()
   }
   );
  }
  const addAction = (points, name, description, id) => {
    setTheSelected([...theSelected, { points, name, description, id }]);
  };

  const createChallenge = () => {
    console.log('made it here')
    API.Challenges.createChallenge(userInfo.authToken)
      .then(({ data }) => {
        console.log(data, "created a new challenge")
        setChallengeID(data.id)
        //getCurrActions()
      })
      //.then(({ data }) => console.log("Challenge saved"))
      .catch((err) => console.log(err));
    
  };

  const addNewAction=(Actionid)=>{
    const oldArray = theSelected.map(actionz=>actionz.id)
    oldArray.push(Actionid)
    console.log(oldArray)
    API.Challenges.updateChallenge(challengeID, oldArray, userInfo.authToken).then(
    (res)=>{
      console.log(res)
      if(res.status === 200){
        console.log('ok')
        getCurrActions()
      }
    }
    )
  }
  const deleteChallenge =(actionId)=>{
    const newArr = [actionId]
    console.log(challengeID, newArr, userInfo.authToken)
    API.Challenges.deleteActionFromChallenge(challengeID, newArr, userInfo.authToken).then(
      (res)=>{
        console.log(res)
        if(res.status === 200){
          console.log('ok')
          getCurrActions()
        }
      }
      )
      
  }



  const completeTheAction=(ActionId)=>{
    API.Challenges.challengeActionAccomplishedToggle(challengeID, ActionId, userInfo.authToken).then(
      (res)=>{
        console.log(res)
        if(res.status === 200){
          console.log('ok')
          getCurrActions()
        }
      }
      )
  }

  const makeBody = (cat, eventKey) => {
    const filteredList = allActions.filter((act) => act.category === cat);

    return filteredList.map((act) => (
      <Accordion.Collapse key={act.id} eventKey={eventKey}>
        <Card.Body>
          <span
            style={{ cursor: "pointer" }}
            // onClick={() => alert("added " + act.points)}
            onClick={() =>
              // addAction(
              //   act.points,
              //   act.name,
              //   <ButtonGroup>
              //     <DropdownButton variant="clear" title={<FiInfo size={28} />}>
              //       <Dropdown.Item eventKey="">{act.description}</Dropdown.Item>
              //     </DropdownButton>
              //   </ButtonGroup>,
              //   act.id
              // )
              addNewAction(act.id)
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
      <h3 className= "h3_heading_dark">
        {currScore ? <p style={{color: "#DB6C4B"}}> Current Score: {currScore}</p>: null}
        Please choose from the actions below to create your first challenge!
      </h3>
      {allActions && (
        <Selected selections={theSelected} deleteHandler={deleteChallenge} completeHandler={completeTheAction} />
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
