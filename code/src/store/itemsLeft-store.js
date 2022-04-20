import { initStore } from "./store";

const configureStore = () => {
  const actions = {
    ITEM_SELECTED: (curState, productId) => {
      const prodIndex = curState.products.findIndex((p) => p.id === productId);
      const updatedProducts = [...curState.products];

      let newPplLeft = parseInt(curState.products[prodIndex].pplLeft);
      if (isNaN(newPplLeft)) {
        return { products: updatedProducts };
      }

      if (newPplLeft > 0) {
        newPplLeft--;
      }
      updatedProducts[prodIndex] = {
        ...curState.products[prodIndex],
        pplLeft: newPplLeft.toString(),
      };
      return { products: updatedProducts };
    },
    CHECKBOX_TOGGLE: (curState, productId) => {
      const prodIndex = curState.products.findIndex((p) => p.id === productId);
      let checked = !curState.products[prodIndex].selected;
      const updatedProducts = [...curState.products];
      updatedProducts.map((p) => (p.selected = false));

      updatedProducts[prodIndex].selected = checked;
      return { products: updatedProducts };
    },
    INPUT_CHANGE: (curState, payload) => {
      const { id: productId, input } = payload;
      const prodIndex = curState.products.findIndex((p) => p.id === productId);
      const updatedProducts = [...curState.products];
      updatedProducts[prodIndex].pledge = input;
      return { products: updatedProducts };
    },
    SET_ERROR: (curState, productId) => {
      const prodIndex = curState.products.findIndex((p) => p.id === productId);
      const error = !curState.products[prodIndex].error;
      const updatedProducts = [...curState.products];
      updatedProducts[prodIndex].error = error;
      return { products: updatedProducts };
    },
    RESET_PRODUCTS_AFTER_FORM_SUBMIT: (curState) => {
      const updatedProducts = [...curState.products];
      updatedProducts.forEach((p) => {
        p.pledge = p.minPledge;
        p.error = false;
        p.selected = false;
      });

      return { products: updatedProducts };
    },
  };
  initStore(actions, {
    products: [
      {
        id: "0",
        titlePrimary: "Pledge with no reward",
        titleSecondary: "",
        info: "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
        pplLeft: "",
        pledge: "",
        selected: false,
        minPledge: "",
        error: false,
      },
      {
        id: "1",
        titlePrimary: "Bamboo Stand",
        titleSecondary: "Pledge $25 or more",
        info: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
        pplLeft: "101",
        pledge: "25",
        selected: false,
        minPledge: "25",
        error: false,
      },
      {
        id: "2",
        titlePrimary: "Black Edition Stand",
        titleSecondary: "Pledge $75 or more",
        info: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
        pplLeft: "64",
        pledge: "75",
        selected: false,
        minPledge: "75",
        error: false,
      },
      {
        id: "3",
        titlePrimary: "Mahogany Special Edition",
        titleSecondary: "Pledge $200 or more",
        info: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
        pplLeft: "0",
        pledge: "200",
        selected: false,
        minPledge: "200",
        error: false,
      },
    ],
  });
};

export default configureStore;
