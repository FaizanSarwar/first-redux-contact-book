import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Contact from "./Contact";
import {
  clearAllContact,
  selectAllContact,
  deleteAllContact,
} from "../actions/ContactActions";

const Contacts = () => {
  const dispatch = useDispatch();
  const [selectAll, setSelectAll] = useState(false);
  const data = useSelector((state) => state.ContactReducer.contacts);
  const selectedContact = useSelector(
    (state) => state.ContactReducer.selectedContacts
  );

  useEffect(() => {
    if (selectAll) {
      dispatch(selectAllContact(data.map((val) => val.id)));
    } else {
      dispatch(clearAllContact());
    }
  }, [selectAll]);

  return (
    <div>
      {selectedContact.length > 1 ? (
        <button
          className="btn btn-danger mb-3"
          onClick={() => dispatch(deleteAllContact())}
        >
          delete all
        </button>
      ) : null}

      <table className="table shadow">
        <thead>
          <tr>
            <td>
              <div className="custom-control custom-checkbox">
                <input
                  id="selectAll"
                  type="checkbox"
                  className="custom-control-input"
                  value={selectAll}
                  onClick={() => setSelectAll(!selectAll)}
                />
                <label
                  htmlFor="selectAll"
                  className="custom-control-label"
                ></label>
              </div>
            </td>
            <th>Name</th>
            <th>Phone</th>
            <th>E-mail</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((contact, index) => (
            <tr>
              <Contact
                contact={contact}
                key={contact.id}
                selectAll={selectAll}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
