import React, { useState } from "react";
import { useSelector ,useDispatch} from "react-redux";
import {addContact} from '../actions/ContactActions'
import { v4 as uuidv4 } from 'uuid';
import {useNavigate } from "react-router-dom"

const AddContact = () => {
    let history = useNavigate ();
    const dispatch =useDispatch()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const craeteContact = (e)=>{
        
        e.preventDefault();
        dispatch((addContact({id:uuidv4(),name:name,email:email,phone:phone})))
        history('/')
    }

  return (
    <div className="card border-0 shadow col-lg-6 mx-auto">
      <div className="card-header mt-3"><h5>Add New Contact </h5></div>
      <div className="card-body">
        <form onSubmit={(e) => craeteContact(e)}
        >
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your E-mail Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Create Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddContact;