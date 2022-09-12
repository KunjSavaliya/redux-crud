export const addUser = (user) => {
    return {
      type: "ADD_USER",
      payload: user
    };
  };



  
  export const removeUser = (savedata) => {
    return {
      type: "REMOVE_USER",
      payload: savedata
    };
  };
  export const editUser = (user) => {
    return {
      type: "EDIT_USER",
      payload: user
    };
  };