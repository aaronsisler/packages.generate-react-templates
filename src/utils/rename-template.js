import fs from "fs";

const renameTemplate = (currentName, targetName) => {
  try {
    fs.renameSync(currentName, targetName);
  } catch (error) {
    console.error("Error occurred:", error); // eslint-disable-line no-console
  }
};

export default renameTemplate;
