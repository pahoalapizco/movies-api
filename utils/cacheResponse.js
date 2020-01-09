const { config } = require('../config/');

function cacheResponse(res, seconds) {
  // Only production!
  if(!config.dev) {
    res.set("Cache-Control", `public, max-age=${seconds}`);
  }
}

module.exports = cacheResponse;
