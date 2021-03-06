const navigate = {
  toPage: async (type, page) => {
    const url = type === 'homepage' ? browser.options.baseUrl : page;
    await browser.url(url);
  },
};

export default navigate;
