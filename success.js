const args = process.argv.slice(2);

const fs = require("fs");
try {
  fs.writeFileSync("temp.txt", JSON.stringify(args[0], null, 4));
  // file written successfully
} catch (err) {
  console.error(err);
}
