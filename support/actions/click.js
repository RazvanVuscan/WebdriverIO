const click = {
  button: async (locator) => {
    const button = await $(locator);
    await button.click();
  },
};

export default click;
