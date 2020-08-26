const titles = {
  pageTitle: async (title) => {
    await expect(browser).toHaveTitle(title);
  }
}

module.exports = titles;
