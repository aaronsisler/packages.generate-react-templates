import fse from "fs-extra";

const moveFiles = (source, target) => {
  try {
    fse.moveSync(source, target);
  } catch (error) {
    console.log(`Move Target already exists: ${target}`); // eslint-disable-line no-console
  }
};

export default moveFiles;
