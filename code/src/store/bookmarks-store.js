import { initStore } from "./store";

const configureStore = () => {
  const actions = {
    TOGGLE_BOOKMARK: (curState) => {
      const newBookMarkValue = !curState.bookMark;
      return { bookMark: newBookMarkValue };
    },
  };

  initStore(actions, { bookMark: false });
};

export default configureStore;
