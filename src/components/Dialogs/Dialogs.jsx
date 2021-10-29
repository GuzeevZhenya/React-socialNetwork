import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import './Dialogs.css'


export default function Dialogs(props) {

  let dialogsElements = props.dialogs.map(item => {
    return (
      <DialogItem name={item.name} id={item.id}/>
    )
  })
  let messageElements = props.messages.map(item => {
    return (
      <Message message={item.message} id={item.id} />
    )
  })


  return (
    <div className="dialogs">
      <div className="dialogs-items">
        {dialogsElements}
      </div>
      <div className="dialogs-messages">
      {messageElements}
      </div>
    </div>
  );
}
