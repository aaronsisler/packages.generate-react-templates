import fse from "fs-extra";
import {
  copyTemplate,
  generateLowerName,
  generateUpperName,
  replaceNamesInFiles
} from "../utils";

const generateComponent = name => {
  // Craft the names with logic against type
  const lowerName = generateLowerName(name, "COMP");
  const upperName = generateUpperName(name, "COMP");

  const indexFile = `${__dirname}/${lowerName}/index.js`;
  const markupFile = `${__dirname}/${lowerName}/${lowerName}.jsx`;
  const stylesFile = `${__dirname}/${lowerName}/${lowerName}.scss`;

  fse.mkdir(`${__dirname}/${lowerName}`);

  // Create copyies of templates
  copyTemplate(
    `${__dirname}/../templates/markup.jsx`,
    `${__dirname}/${lowerName}/${lowerName}.jsx`
  );
  copyTemplate(
    `${__dirname}/../templates/styles.scss`,
    `${__dirname}/${lowerName}/${lowerName}.scss`
  );
  copyTemplate(
    `${__dirname}/../templates/index.js`,
    `${__dirname}/${lowerName}/index.js`
  );

  const files = [indexFile, markupFile, stylesFile];

  // Replace the upper, lower, and page names using crafted names
  replaceNamesInFiles(files, lowerName, upperName);

  fse.moveSync(
    `${__dirname}/${lowerName}/`,
    `${process.cwd()}/src/components/${lowerName}`
  );
};

export default generateComponent;
