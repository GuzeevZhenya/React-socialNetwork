import React from 'react';
import './DialogItem.css';
import { NavLink } from "react-router-dom";
const DialogItem = (props) => {
  return (
    <div className="dialogs-item">
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
};
export default DialogItem;
