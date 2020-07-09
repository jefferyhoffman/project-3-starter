import React from 'react'


const Notification = (props) => {
return (
<div class="notification is-primary">
  <button class="delete" ></button>
    {props.text}
</div>
)
}
export default Notification;