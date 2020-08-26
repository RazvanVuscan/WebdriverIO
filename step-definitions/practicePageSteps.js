const { Given, When, Then } = require('cucumber')
const navigate = require('../support/actions/navigate')
const select = require('../support/actions/select')
const click = require('../support/actions/click')
const check = require('../support/checks/titles')
const variableStorage = require('../helpers/variableStorage')

Given(/^The user opens the test automation practice web page$/, async () => {
  await navigate.toPage('homepage');
});

Then(
  /^The user checks that the page title is "([^"]*)"$/,
  async (requiredTitle) => {
    await check.pageTitle(requiredTitle);
  }
);

When(
  /^The user selects the "([^"]*)" option in the dropdown$/,
  async (option) => {
    variableStorage.text = option;
    await select.dropdown('#dropdown-class-example', option);
  }
);

When(
  /^The user searches for "([^"]*)" in the autosuggest field$/,
  async (text) => {
    const autosuggest = await $('#autocomplete');
    await autosuggest.setValue(text);

    const results = await $('#ui-id-1');
    await results.waitForDisplayed({timeout: 2000});

    const listOfElements = await results.$$('div[id*=ui-id-]');

    for (let i = 0; i < listOfElements.length; i++) {
      console.log('---------->', await listOfElements[i].getText());
      if ((await listOfElements[i].getText()).includes('Kingdom')) {
        await listOfElements[i].click();
        break;
      }
    }

    await browser.pause(1000);
  }
);


When(
  /^The user clicks the hide button$/,
  async () => {
    await click.button('#hide-textbox');
  }
);

Then(
  /^The user checks if the display box is "(hidden|not hidden)"$/,
  async (check) => {
    await browser.pause(1000);
    const displayBox = await $('#displayed-text');
    check === 'hidden' ? await expect(displayBox).not.toBeDisplayed() : await expect(displayBox).toBeDisplayed();
  }
);
