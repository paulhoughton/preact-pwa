import { h, render } from "preact";
import { install } from "offline-plugin/runtime";

let root;

function init() {
  let App = require("./App").default;

  root = render(<App />, document.body, root);
}

init();

if (module.hot) module.hot.accept("./App", init);

install();
