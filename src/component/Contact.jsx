import React, { useState, useEffect } from "react";
import Avatar from "react-avatar";
import { useSelector, useDispatch } from "react-redux";
import { deleteData, selectAllContact } from "../actions/ContactActions";

const Contact = ({ contact, selectAll, setSelectAll }) => {
  const dispatch = useDispatch();
  return (
    <>
      <td>
        <div className="custom-control custom-checkbox">
          <input
            id="selectAll"
            type="checkbox"
            className="custom-control-input"
            checked={selectAll}
          />

          <label htmlFor="selectAll" className="custom-control-label"></label>
        </div>
      </td>
      <th>
        <Avatar className="mr-3" name={contact.name} round={true} size="50" />
        {contact.name}
      </th>
      <th>{contact.phone}</th>
      <th>{contact.email}</th>
      <td className="actions">
        <a href={`/edit/${contact.id}`}>
          <span className="material-icons mr-2">edit</span>
        </a>
        <button onClick={() => dispatch(deleteData(contact.id))}>
          <span className="material-icons  text-danger">remove_circle</span>
        </button>
      </td>
    </>
  );
};

export default Contact;
