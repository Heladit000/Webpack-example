const fs = require("fs");

//crate env file with keys values
fs.writeFileSync(
  "./.env",
  `
PROFILE_API=${process.env.PROFILE_API}
IMAGE_API=${process.env.IMAGE_API}
`
);
