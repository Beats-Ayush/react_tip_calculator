import { initStore } from "./store";

const configureStore = () => {
  const actions = {
    AMOUNT_CHANGE: (curState, input) => {
      const newAmount = (
        parseInt(curState.amount) + parseInt(input)
      ).toString();

      return { amount: newAmount };
    },
  };

  initStore(actions, { amount: "89914" });
};

export default configureStore;
