import { initStore } from "./store";

const configureStore = () => {
  const actions = {
    TOGGLE_MENU: (curState) => {
      const toggleMenu = !curState.menuIsOpen;
      return { menuIsOpen: toggleMenu };
    },
  };

  initStore(actions, { menuIsOpen: false });
};

export default configureStore;
