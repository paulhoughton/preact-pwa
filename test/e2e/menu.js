module.exports = {
  "Menu test": function(client) {
    client
      .url("http://localhost:8080")
      .waitForElementVisible("main", 1000)
      .assert.containsText(".mdc-toolbar span", "PWA")
      .click(".hamburger")
      .waitForElementVisible(".mdc-temporary-drawer--open", 1000)
      .click(".mdc-list a:nth-child(2)")
      .waitForElementVisible(".mdc-card", 1000)
      .assert.containsText(
        ".mdc-card__supporting-text",
        "About this Application"
      )
      .click(".mdc-button")
      .assert.containsText("main p", "Home Page");
  }
};
