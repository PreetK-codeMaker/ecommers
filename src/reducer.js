export const initalState = {
  // creating an empty // reducer dispatch the data in the data layer
  basket: [],
};
export const getbasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

export const initialState = {
  basket: [],
  user: null, // dy default they are null
};
const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_ITEM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id == action.id
      );
      //new basket
      let nBasket = [...state.basket];

      if (index > 0) {
        nBasket.splice(index, 1);
      } else {
        console.warn(`product(id: ${action.id})not in basket!`);
      }

      return {
        ...state,
        basket: nBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

//select

export default reducer;
