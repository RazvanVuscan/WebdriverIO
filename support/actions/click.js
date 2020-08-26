const click = {
  button: async (locator) => {
    const button = await $(locator);
    await button.click();
  }
}

module.exports = click;
