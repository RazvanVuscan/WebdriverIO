const titles = {
  pageTitle: async (title) => {
    await expect(browser).toHaveTitle(title);
  },
};

export default titles;
