import fse from "fs-extra";

const copyTemplate = (sourceFile, targetFile) => {
  try {
    fse.copySync(sourceFile, targetFile);
  } catch (error) {
    console.log(`File already exists: ${targetFile}`); // eslint-disable-line no-console
  }
};

export default copyTemplate;
