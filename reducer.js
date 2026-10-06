export function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      state.items.push(action.payload); // Mutation directe
      return state;
    default:
      return state;
  }
}
