const micromatch = require("micromatch 2");
console.log("main project");

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
