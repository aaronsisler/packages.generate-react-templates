import fs from "fs";
import generateLowerName from "../generate-lower-name";

const validateContainer = name => {
  const lowerName = generateLowerName(name, "CONT");

  if (fs.existsSync(`${process.cwd()}/src/containers/${lowerName}`)) {
    console.log(`container already exists: ${lowerName}`); // eslint-disable-line no-console
    process.exit(1);
  }
};

export default validateContainer;
