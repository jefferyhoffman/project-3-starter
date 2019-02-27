import React from "react";

function Itin(props) {
  return (
    <div
      style={{
              background: "white",
              boxShadow: " 0 3px 6px #999, 0 3px 6px #999"
            }}
      onClick={() => props.onRemove(props.id)}
    >

    </div>
  );
}

export default Itin;