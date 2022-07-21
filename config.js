const config = require("conventional-changelog-conventionalcommits");

module.exports = config({
  issuePrefixes: ["TEST-"],
  issueUrlFormat: "https://myBugTracker.com/{{prefix}}{{id}}",
  types: [
    { type: "feat", section: "Features" },
    { type: "fix", section: "Bug Fixes" },
    { type: "major", section: "Major" },
    { type: "chore", hidden: true },
    { type: "refactor", hidden: true },
    { type: "test", hidden: true },
    { type: "wip", hidden: true },
  ],
});
