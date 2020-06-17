import {
  copyTemplate,
  generateLowerName,
  generatePageName,
  generateUpperName,
  moveFiles,
  replaceNamesInFiles
} from "../utils";

const generatePage = name => {
  // Craft the names with logic against type
  const lowerName = generateLowerName(name, "PAGE");
  const upperName = generateUpperName(name, "PAGE");
  const pageName = generatePageName(name);

  // Create a copy of template
  copyTemplate(
    `${__dirname}/../templates/page.js`,
    `${__dirname}/${lowerName}.js`
  );

  const file = `${__dirname}/${lowerName}.js`;
  const files = [file];

  // Replace the upper, lower, and page names using crafted names
  replaceNamesInFiles(files, lowerName, upperName, pageName);

  moveFiles(file, `${process.cwd()}/src/pages/${lowerName}.js`);
};

export default generatePage;
