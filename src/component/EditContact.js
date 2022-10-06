import React, { useState,useEffect } from "react";
import { useSelector ,useDispatch} from "react-redux";
import {loadData, updateData} from '../actions/ContactActions'
import { v4 as uuidv4 } from 'uuid';
import {useNavigate,useParams } from "react-router-dom"

const EditContact = () => {
    let history = useNavigate ();
    const data = useSelector((state)=>state.ContactReducer.contact)
    let {id}=useParams()
    const dispatch =useDispatch()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

  
    useEffect(()=>{
        if(data!==null){
            setName(data.name);
            setPhone(data.phone);
            setEmail(data.email)
        }
        dispatch(loadData(id))

    },[data])

    const upate_Contact = (e)=>{
      e.preventDefault();
      const updated_data = Object.assign(data , {
       name,phone,email
      })
      dispatch(updateData(updated_data))
      history('/')

    }

  return (
    <div className="card border-0 shadow col-lg-6 mx-auto">
      <div className="card-header mt-3"><h5>Add New Contact </h5></div>
      <div className="card-body">
        <form onSubmit={(e)=>upate_Contact(e)}
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
          <button className="btn btn-warning" type="submit">
            Update Content
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditContact;