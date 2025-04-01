const contextreducer = (state, action) => {
  let transactions;
  switch (action.type) {
    case "ADD_TRASANCTION":
      transactions = [action.payload, ...state];
      localStorage.setItem("transactions", JSON.stringify(transactions));
      return transactions;
    case "DELETE_TRANSACTION":
      transactions = state.filter(
        (transaction) => transaction.id !== payload.id
      );
      localStorage.setItem("transactions", JSON.stringify(transactions));
      return transactions;
    default:
      return state;
  }
};
export default contextreducer;
