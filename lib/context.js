const { readFileSync, writeFileSync } = require("fs");

module.exports.loadContext = (root) => {
  return JSON.parse(readFileSync(`${root}/context.json`));
};

module.exports.saveContext = (ctx) => {
  return writeFileSync(`${ctx.root}/context.json`, JSON.stringify(ctx));
};
