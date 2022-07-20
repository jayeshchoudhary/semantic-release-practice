const micromatch = require("micromatch");
const config = require("./config");
console.log("main project major 3");
const fs = require("fs");
const temp = require("conventional-changelog-writer");

var conventionalCommitsParser = require("conventional-commits-parser");
const result = conventionalCommitsParser.sync(
  "fix(title): STUI-31 a title is fixed",
  config
);

try {
  fs.writeFileSync("test.json", JSON.stringify(result, null, 4));
  // file written successfully
} catch (err) {
  console.error(err);
}

console.log("test");
