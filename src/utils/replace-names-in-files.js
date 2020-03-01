import replace from "replace-in-file";

const replaceNamesInFiles = (files, lowerName, upperName, pageName) => {
  const upperOptions = {
    files,
    from: /UPPER_NAME/g,
    to: upperName
  };

  const lowerOptions = {
    files,
    from: /LOWER_NAME/g,
    to: lowerName
  };

  const pageOptions = {
    files,
    from: /PAGE_NAME/g,
    to: pageName
  };

  try {
    if (pageName) {
      replace.sync(pageOptions);
    }

    replace.sync(upperOptions);
    replace.sync(lowerOptions);
  } catch (error) {
    console.error("Error occurred:", error); // eslint-disable-line no-console
  }
};

export default replaceNamesInFiles;
