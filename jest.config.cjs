module.exports = {
  transformIgnorePatterns: ["/node_modules/(?!swiper|ssr-window|dom7)"],
  // if you already have an entry present (as I did), eg. `/node_modules/(?!lodash-es)`, simply add the swiper entries to it
  // eg: `/node_modules/(?!lodash-es|swiper|ssr-window|dom7)`

  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  verbose: true,
  testEnvironment: "jsdom",
};
