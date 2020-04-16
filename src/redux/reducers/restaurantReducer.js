const restaurantReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_RESTAURANTS':
        console.log('reducer',action.payload);
        
        return action.payload;
      case 'SET_SEARCH_RESTAURANTS':
        return action.payload;
      case 'SET_CHOSEN_RESTAURANT':
        return action.payload;
      case 'SET_MY_RESTAURANTS':
      return action.payload;
      default:
        return state;
    }
  };

  export default restaurantReducer;
  