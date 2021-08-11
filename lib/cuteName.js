// see https://replit.com/@amasad/repl-name-generator
const fs = require("fs");

const NAMES = fs
  .readFileSync(__dirname + "/../data/noun.txt")
  .toString("utf8")
  .trim()
  .split("\n");

const ADJS = fs
  .readFileSync(__dirname + "/../data/adj.txt")
  .toString("utf8")
  .trim()
  .split("\n");

function upcase(n) {
  return n[0].toUpperCase() + n.slice(1);
}

function cuteName() {
  const adj1 = ADJS[Math.floor(Math.random() * ADJS.length)];
  const adj2 = ADJS[Math.floor(Math.random() * ADJS.length)];
  const cuteName = NAMES[Math.floor(Math.random() * NAMES.length)];

  return upcase(adj1) + upcase(adj2) + upcase(cuteName);
}

module.exports = cuteName;
