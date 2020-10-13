const select = {
  dropdown: async (locator, value) => {
    const dropdown = await $(locator);
    await dropdown.selectByAttribute('value', value);
    console.log(`=========================>${await dropdown.getValue()}`);
  },
};

export default select;
