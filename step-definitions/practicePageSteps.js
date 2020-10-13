import { Given, When, Then } from 'cucumber';
import navigate from '../support/actions/navigate';
import select from '../support/actions/select';
import click from '../support/actions/click';
import check from '../support/checks/titles';
import variableStorage from '../helpers/variableStorage';
import locators from '../helpers/locators';

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
    await select.dropdown(locators.dropdown(), option);
    await console.log('=====', variableStorage.text);
  }
);

When(
  /^The user searches for "([^"]*)" in the autosuggest field$/,
  async (text) => {
    const autosuggest = await $(locators.autocomplete());
    await autosuggest.setValue(text);

    const results = await $(locators.autocompleteResults());
    await results.waitForDisplayed({ timeout: 2000 });

    const listOfElements = await results.$$(locators.listOfResults());

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

When(/^The user clicks the hide button$/, async () => {
  await click.button(locators.hideTextboxButton());
});

Then(
  /^The user checks if the display box is "(hidden|not hidden)"$/,
  async (check) => {
    await browser.pause(1000);
    const displayBox = await $(locators.textBox());
    check === 'hidden'
      ? await expect(displayBox).not.toBeDisplayed()
      : await expect(displayBox).toBeDisplayed();
  }
);
