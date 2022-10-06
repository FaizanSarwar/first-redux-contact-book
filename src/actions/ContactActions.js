import {
    CREATE_CONTACT,
    GET_CONTACT,
    UPDATE_CONTACT,
    DELETE_CONTACT,
    SELECT_CONTACT,
    CLEAR_CONTACT,
    DELETE_SELECTED_CONTACT,
  } from "../constant";
  
  // actions
  export const addContact = (contact) => ({
    type: CREATE_CONTACT,
   contact
  });
  export const loadData = (id)=>({
    type:GET_CONTACT,
    id
  })
  export const updateData = (data)=>({
    type:UPDATE_CONTACT,
    data

  })

  export const deleteData=(id)=>({
    type:DELETE_CONTACT,
    id

  })
  export const selectAllContact = (id)=>({
    type:SELECT_CONTACT,
    id
  })
export const clearAllContact = ()=>({
  type:CLEAR_CONTACT

})

export const deleteAllContact = ()=>({
  type:DELETE_SELECTED_CONTACT

})
