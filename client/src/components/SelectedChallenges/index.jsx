import React from "react";

const SelectedChallenges = (props) => {

  return (
    <>
      <div className="jumbotron">
        <h1 className="display-4">You have selected these challenges:</h1>
        <div className="container">
          {props.selections.map((action) => (
            <div className="row">
              <div className="col">{action.name}</div>
              <div className="col">{action.description}</div>

              <hr className="my-4" />
            </div>
          ))}
        </div>
        <hr className="my-4" />
        <p>List Other actions they can take</p>
      </div>
    </>
  );
};
export default SelectedChallenges;
