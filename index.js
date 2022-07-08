const micromatch = require("micromatch");
console.log("main project -1 major");

console.log(
  micromatch(
    [
      "",
      "data-manager-ui",
      "data-manager-ui",
      "data-manager-ui-remote",
      "adata-manager-ui",
      "test",
      "remote-managed-ui",
    ],
    ["!data-manager-ui"]
  )
); //=> ['foo', 'bar', 'baz']
