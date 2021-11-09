module.exports = {
  reactStrictMode: true,
  future: {
    webpack5: false
  }
};

const withPWA = require("next-pwa");
module.exports = withPWA({
  pwa: { dest: "public" }
});
