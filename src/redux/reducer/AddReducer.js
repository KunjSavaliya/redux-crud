const initialState = {
    users: []
  };
  const AddReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_USER":
        return {
          users: [action.payload, ...state.users]
        };

      case "EDIT_USER":
        const updatedUserDetail = action.payload;
        const updatedUser = state.users.map((savedata) => {
          if (savedata === updatedUserDetail) {
            return updatedUserDetail;
          } else {
            return savedata;
          }
        });
        return { users: updatedUser };
  
      case "REMOVE_USER":
        return {
          users: action.payload
          // users: state.users.filter((savedata) => {
          //   return savedata !== action.payload;
          // })
        };
      default:
        return state;
    }
  };
  export default AddReducer;
  