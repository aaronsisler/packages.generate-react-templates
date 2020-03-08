import fs from "fs";
import generateLowerName from "../generate-lower-name";

const validateComponent = name => {
  const lowerName = generateLowerName(name, "COMP");

  if (fs.existsSync(`${process.cwd()}/src/components/${lowerName}`)) {
    console.log(`component already exists: ${lowerName}`); // eslint-disable-line no-console
    process.exit(1);
  }
};

export default validateComponent;
