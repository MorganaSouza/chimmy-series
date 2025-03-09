module.exports = {
    globDirectory: "build/",
    globPatterns: [
      "**/*.{html,json,js,css,png,jpg,svg,ico}"
    ],
    swDest: "build/sw.js",
    clientsClaim: true,
    skipWaiting: true
  };
  