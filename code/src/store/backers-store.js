import { initStore } from "./store";

const configureStore = () => {
  const actions = {
    PROJECT_BACKED: (curState) => {
      const willBackProject = !curState.backProject;
      const newBackers = curState.backers + 1;
      return { backers: newBackers, backProject: willBackProject };
    },
    TOGGLE_MODAL_OVERLAY: (curState) => {
      const showModalOverlay = !curState.showModalOverlay;
      return { showModalOverlay };
    },
    TOGGLE_BACK_PROJECT: (curState) => {
      const willBackProject = !curState.backProject;
      return { backProject: willBackProject };
    },
  };

  initStore(actions, {
    backProject: false,
    backers: 5007,
    showModalOverlay: false,
  });
};

export default configureStore;
