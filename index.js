const fs = require("fs");

const defaults = {
  path: "manifest.hash.json",
};

module.exports = function (opts = {}) {
  opts = Object.assign({}, defaults, opts);

  return {
    name: "hashed-mapping",

    generateBundle(_outputOptions, bundle) {
      const files = {};

      for (const key of Object.keys(bundle)) {
        const hashedFile = key;
        const originalFile = key.replace(/\.(\w+)(\.css|\.js)$/, "$2");

        files[originalFile] = hashedFile;
      }

      fs.writeFileSync(opts.path, JSON.stringify(files, null, "  "));
    },
  };
};
