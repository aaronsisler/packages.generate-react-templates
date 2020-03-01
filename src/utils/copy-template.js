import fse from "fs-extra";

const copyTemplate = (sourceFile, targetFile) => {
  fse.copySync(sourceFile, targetFile);
};

export default copyTemplate;
