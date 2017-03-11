import { h, Component } from "preact";
import { MDCTemporaryDrawer } from "@material/drawer/dist/mdc.drawer";
import "@material/drawer/dist/mdc.drawer.css";
import "@material/list/dist/mdc.list.css";
import "@material/toolbar/dist/mdc.toolbar.css";

import "./App.scss";
import { Router } from "preact-router";
import { createHashHistory } from "history";
import { routes, mappings } from "./Routes";

export default class App extends Component {
  render() {
    return (
      <div class="app">
        <div class="app-inner">
          <div class="mdc-toolbar">
            <section
              class="mdc-toolbar__section mdc-toolbar__section--align-start"
              onClick={this.openDrawer}
            >
              <div class="hamburger">
                <div class="hamburger-line" />
                <div class="hamburger-line" />
                <div class="hamburger-line" />
              </div>
              <span class="mdc-toolbar__title">PWA</span>
            </section>
          </div>

          <aside
            class="mdc-temporary-drawer mdc-typography"
            ref={r => this.temporaryDrawer = r}
          >
            <nav class="mdc-temporary-drawer__drawer">
              <header class="mdc-temporary-drawer__header">
                <div class="mdc-temporary-drawer__header-content">
                  PWA
                </div>
              </header>
              <nav class="mdc-temporary-drawer__content mdc-list">
                {mappings.map(({ title, path }) => (
                  <a class="mdc-list-item" href={"#" + path}>{title}</a>
                ))}
              </nav>
            </nav>
          </aside>
          <main>
            <Router history={this.history = createHashHistory()}>
              {routes}
            </Router>
          </main>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.drawer = new MDCTemporaryDrawer(this.temporaryDrawer);
    this.history.listen(() => this.drawer.open = false);
  }

  openDrawer = () => this.drawer.open = true;
}
