const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "options",
        baseUrl: "./",
        aliases: {
          "@ui": "./src/ui",
          "@styles": "./src/styles",
        }
      }
    }
  ]
};