import fs from "fs";

const validatePage = name => {
  if (fs.existsSync(`${process.cwd()}/src/pages/${name}.js`)) {
    console.log(`page already exists: ${name}`); // eslint-disable-line no-console
    process.exit(1);
  }
};

export default validatePage;
