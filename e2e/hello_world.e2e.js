import { expect } from "chai";
import testUtils from "./utils";

describe("application launch", function() {
  beforeEach(testUtils.beforeEach);
  afterEach(testUtils.afterEach);

  it("shows editor after launch", function() {
    return this.app.client.$("#bitsyLogoTitle > span").then(element => {
      return element.getText().then(text => {
        expect(text).to.equal("Bitsy");
      });
    });
  });
});
