import fse from "fs-extra";
import {
  copyTemplates,
  generateLowerName,
  generateUpperName,
  moveFiles,
  replaceNamesInFiles
} from "../utils";

const generateContainer = (name, useTypescript) => {
  // Craft the names with logic against type
  const lowerName = generateLowerName(name, "CONT");
  const upperName = generateUpperName(name, "CONT");
  const stylesFile = `${__dirname}/${lowerName}/${lowerName}.scss`;

  fse.mkdir(`${__dirname}/${lowerName}`);

  // Create copies of templates
  let indexFile;
  let markupFile;
  if (useTypescript) {
    indexFile = `${__dirname}/${lowerName}/index.ts`;
    markupFile = `${__dirname}/${lowerName}/${lowerName}.tsx`;
  } else {
    indexFile = `${__dirname}/${lowerName}/index.js`;
    markupFile = `${__dirname}/${lowerName}/${lowerName}.jsx`;
  }

  copyTemplates({ indexFile, markupFile, stylesFile }, useTypescript);

  const files = [indexFile, markupFile, stylesFile];

  // Replace the upper, lower, and page names using crafted names
  replaceNamesInFiles(files, lowerName, upperName);

  moveFiles(
    `${__dirname}/${lowerName}/`,
    `${process.cwd()}/src/containers/${lowerName}`
  );
};

export default generateContainer;
