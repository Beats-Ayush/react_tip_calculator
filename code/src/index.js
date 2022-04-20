import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

import configureBookMarksStore from "./store/bookmarks-store";
import configureItemsLeftStore from "./store/itemsLeft-store";
import configureBackersStore from "./store/backers-store";
import configureAmountStore from "./store/amountBacked-store";
import configureMenuStore from "./store/menu-store";

configureBookMarksStore();
configureItemsLeftStore();
configureBackersStore();
configureAmountStore();
configureMenuStore();

ReactDOM.render(<App />, document.getElementById("root"));
